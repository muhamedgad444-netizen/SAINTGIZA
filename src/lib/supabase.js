import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://ieydonndmkgdaavauqda.supabase.co'

const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_EIV0vzFgMXIfNcq5LucCIw_WZz8wac2'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

export async function fetchProductsFromDb() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('active', true)
    .order('sort_order', { ascending: true })

  if (error || !Array.isArray(data) || data.length === 0) return null

  return data.map((row) => ({
    id: row.id,
    name: row.name,
    subtitle: row.subtitle,
    price: Number(row.price),
    category: row.category,
    image: row.image,
    hoverImage: row.hover_image || row.image,
    detailImages: Array.isArray(row.detail_images) && row.detail_images.length > 0
      ? row.detail_images
      : [row.image],
    sizes: Array.isArray(row.sizes) ? row.sizes : [],
    description: row.description,
    materials: row.materials,
    shipping: row.shipping,
    color: row.color,
    source: row.source,
    externalUrl: row.external_url,
  }))
}

export async function submitOrderToDb({
  firstName,
  lastName,
  email,
  address,
  city,
  postalCode,
  paymentMethod,
  items,
}) {
  const orderId = crypto.randomUUID()

  const { error: orderError } = await supabase.from('orders').insert({
    id: orderId,
    email: email.trim(),
    first_name: firstName.trim(),
    last_name: lastName.trim(),
    address: address.trim(),
    city: city.trim(),
    postal_code: postalCode.trim(),
    payment_method: paymentMethod,
  })

  if (orderError) throw orderError

  const rows = items.map((item) => ({
    order_id: orderId,
    product_id: item.id,
    size: String(item.size),
    quantity: Math.min(20, Math.max(1, Number(item.quantity) || 1)),
  }))

  const { error: itemsError } = await supabase.from('order_items').insert(rows)
  if (itemsError) throw itemsError

  return orderId
}

export async function subscribeNewsletterInDb(email) {
  const clean = email.trim().toLowerCase()
  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email: clean })

  // Duplicate email (23505) is treated as already subscribed
  if (error && error.code !== '23505') throw error
  return true
}
