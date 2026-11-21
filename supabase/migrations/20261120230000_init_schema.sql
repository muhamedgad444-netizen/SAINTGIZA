-- SAINTGIZA schema: catalog (public read), orders + newsletter (anonymous insert only).
-- Prices on order lines are always taken from `products` by a trigger, never trusted from the client.

create table if not exists public.products (
  id           text primary key,
  name         text not null,
  subtitle     text,
  category     text not null,
  price        numeric(10,2) not null check (price >= 0),
  image        text,
  hover_image  text,
  detail_images text[] not null default '{}',
  sizes        text[] not null default '{}',
  description  text,
  materials    text,
  shipping     text,
  color        text,
  source       text not null default 'saintgiza' check (source in ('saintgiza','runway')),
  external_url text,
  sort_order   int not null default 0,
  active       boolean not null default true,
  created_at   timestamptz not null default now()
);

create table if not exists public.looks (
  id          text primary key,
  position    int not null unique,
  name        text not null,
  description text,
  image       text not null,
  product_ids text[] not null default '{}'
);

create table if not exists public.orders (
  id           uuid primary key,
  email        text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and length(email) <= 254),
  first_name   text not null check (length(first_name) between 1 and 100),
  last_name    text not null check (length(last_name) between 1 and 100),
  address      text not null check (length(address) between 1 and 300),
  city         text not null check (length(city) between 1 and 100),
  postal_code  text not null check (length(postal_code) between 1 and 20),
  payment_method text not null check (payment_method in ('visa','mastercard','cash')),
  shipping     numeric(10,2) not null default 50 check (shipping >= 0),
  subtotal     numeric(10,2) not null default 0,
  total        numeric(10,2) not null default 0,
  status       text not null default 'pending' check (status in ('pending','paid','shipped','cancelled')),
  created_at   timestamptz not null default now()
);

create table if not exists public.order_items (
  id          bigint generated always as identity primary key,
  order_id    uuid not null references public.orders(id) on delete cascade,
  product_id  text not null references public.products(id),
  size        text not null check (length(size) between 1 and 10),
  quantity    int  not null check (quantity between 1 and 20),
  unit_price  numeric(10,2) not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists order_items_order_id_idx on public.order_items(order_id);
create index if not exists order_items_product_id_idx on public.order_items(product_id);

create table if not exists public.newsletter_subscribers (
  email      text primary key check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and length(email) <= 254),
  created_at timestamptz not null default now()
);

-- Server-side pricing: unit price comes from the catalog; order totals are recomputed.
-- SECURITY DEFINER is needed so the anon role (which cannot read/update orders) can keep totals in sync.
-- These live in a non-exposed schema and only run as triggers.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create or replace function private.order_item_set_price()
returns trigger language plpgsql security definer set search_path = '' as $$
declare p numeric(10,2); s text[];
begin
  select price, sizes into p, s from public.products where id = new.product_id and active;
  if p is null then raise exception 'Unknown product %', new.product_id; end if;
  if array_length(s, 1) is not null and not (new.size = any(s)) then
    raise exception 'Invalid size % for %', new.size, new.product_id;
  end if;
  if (select status from public.orders where id = new.order_id) <> 'pending' then
    raise exception 'Order is closed';
  end if;
  new.unit_price := p;
  return new;
end $$;

create or replace function private.order_recalc_totals()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  update public.orders o
     set subtotal = coalesce((select sum(unit_price * quantity) from public.order_items where order_id = o.id), 0),
         total    = coalesce((select sum(unit_price * quantity) from public.order_items where order_id = o.id), 0) + o.shipping
   where o.id = new.order_id;
  return null;
end $$;

create or replace function private.order_force_defaults()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  new.status := 'pending'; new.shipping := 50; new.subtotal := 0; new.total := 50; new.created_at := now();
  return new;
end $$;

revoke all on function private.order_item_set_price() from public;
revoke all on function private.order_recalc_totals() from public;
revoke all on function private.order_force_defaults() from public;

drop trigger if exists order_items_price on public.order_items;
create trigger order_items_price before insert on public.order_items
  for each row execute function private.order_item_set_price();

drop trigger if exists order_items_totals on public.order_items;
create trigger order_items_totals after insert on public.order_items
  for each row execute function private.order_recalc_totals();

drop trigger if exists orders_defaults on public.orders;
create trigger orders_defaults before insert on public.orders
  for each row execute function private.order_force_defaults();

-- Row Level Security
alter table public.products enable row level security;
alter table public.looks enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.newsletter_subscribers enable row level security;

drop policy if exists "catalog is public" on public.products;
create policy "catalog is public" on public.products for select to anon, authenticated using (active);

drop policy if exists "looks are public" on public.looks;
create policy "looks are public" on public.looks for select to anon, authenticated using (true);

drop policy if exists "anyone can place an order" on public.orders;
create policy "anyone can place an order" on public.orders for insert to anon, authenticated with check (true);

drop policy if exists "anyone can add lines to a new order" on public.order_items;
create policy "anyone can add lines to a new order" on public.order_items for insert to anon, authenticated
  with check (created_at > now() - interval '5 minutes');

drop policy if exists "anyone can subscribe" on public.newsletter_subscribers;
create policy "anyone can subscribe" on public.newsletter_subscribers for insert to anon, authenticated with check (true);

-- Data API grants (explicit; RLS still applies)
grant usage on schema public to anon, authenticated;
grant select on public.products, public.looks to anon, authenticated;
grant insert on public.orders, public.order_items, public.newsletter_subscribers to anon, authenticated;
