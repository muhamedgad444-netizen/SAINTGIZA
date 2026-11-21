// Try the Look. — Runway custom element & styling bag (vanilla JS)

const ASSET_BASE = 'https://reel-ref-try-the-look.vercel.app/assets/';

export const NATIVE_CATALOG = {
  source: 'https://saintgiza.com/runway',
  looks: [
    {
      name: 'The City Edit',
      description: 'A charcoal ribbed knit, relaxed denim, and minimal runners.',
      image: '/models/model-1-640.webp',
      products: ['sg-charcoal-knit', 'sg-classic-denim', 'sg-retro-runner-grey'],
    },
    {
      name: 'Gallery Opening',
      description: 'A clean heavyweight tee, vintage wash denim, and low courts.',
      image: '/models/model-5-640.webp',
      products: ['sg-oversized-tee-white', 'sg-relaxed-faded-denim', 'sg-court-sneaker-bone'],
    },
    {
      name: 'Grounded Palette',
      description: 'Olive raglan knitwear, espresso corduroy, and field boots.',
      image: '/models/model-4-640.webp',
      products: ['sg-olive-raglan-knit', 'sg-corduroy-trousers', 'sg-field-trail-boot'],
    },
    {
      name: 'Studio Day',
      description: 'Boxy obsidian tee, light wash baggy denim, and triple white courts.',
      image: '/models/model-6-640.webp',
      products: ['sg-boxy-black-tee', 'sg-light-wash-denim', 'sg-court-white'],
    },
    {
      name: 'Tailored Perspective',
      description: 'Rich burgundy ribbing, washed charcoal denim, and minimal derbies.',
      image: '/models/model-3-640.webp',
      products: ['sg-burgundy-ribbed-knit', 'sg-charcoal-denim', 'sg-derby-black'],
    },
    {
      name: 'Minimalist Uniform',
      description: 'A heather grey crewneck, vintage denim, and retro court sneakers.',
      image: '/models/model-2-640.webp',
      products: ['sg-grey-crewneck', 'sg-vintage-denim', 'sg-court-sneaker-black'],
    },
  ],
  items: [
    {
      id: 'sg-charcoal-knit',
      name: 'Charcoal Ribbed Knit',
      type: 'SAINTGIZA RUNWAY',
      price: 210,
      image: '/showroom/m1-top.webp',
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 10100, a: true, o: ['S'] },
        { id: 10101, a: true, o: ['M'] },
        { id: 10102, a: true, o: ['L'] },
        { id: 10103, a: true, o: ['XL'] },
      ],
      url: '/product/sg-charcoal-knit',
    },
    {
      id: 'sg-classic-denim',
      name: 'Relaxed Wide Denim',
      type: 'SAINTGIZA RUNWAY',
      price: 195,
      image: '/showroom/m1-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 10200, a: true, o: ['30'] },
        { id: 10201, a: true, o: ['32'] },
        { id: 10202, a: true, o: ['34'] },
        { id: 10203, a: true, o: ['36'] },
      ],
      url: '/product/sg-classic-denim',
    },
    {
      id: 'sg-retro-runner-grey',
      name: 'Minimal Runner — Cement',
      type: 'SAINTGIZA FOOTWEAR',
      price: 185,
      image: '/showroom/m1-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 10300, a: true, o: ['40'] },
        { id: 10301, a: true, o: ['41'] },
        { id: 10302, a: true, o: ['42'] },
        { id: 10303, a: true, o: ['43'] },
        { id: 10304, a: true, o: ['44'] },
        { id: 10305, a: true, o: ['45'] },
      ],
      url: '/product/sg-retro-runner-grey',
    },

    {
      id: 'sg-oversized-tee-white',
      name: 'Heavyweight Minimal Tee',
      type: 'SAINTGIZA ESSENTIALS',
      price: 95,
      image: '/showroom/m5-top.webp',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      variants: [
        { id: 20100, a: true, o: ['S'] },
        { id: 20101, a: true, o: ['M'] },
        { id: 20102, a: true, o: ['L'] },
        { id: 20103, a: true, o: ['XL'] },
        { id: 20104, a: true, o: ['XXL'] },
      ],
      url: '/product/sg-oversized-tee-white',
    },
    {
      id: 'sg-relaxed-faded-denim',
      name: 'Vintage Fade Denim',
      type: 'SAINTGIZA RUNWAY',
      price: 210,
      image: '/showroom/m5-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 20200, a: true, o: ['30'] },
        { id: 20201, a: true, o: ['32'] },
        { id: 20202, a: true, o: ['34'] },
        { id: 20203, a: true, o: ['36'] },
      ],
      url: '/product/sg-relaxed-faded-denim',
    },
    {
      id: 'sg-court-sneaker-bone',
      name: 'Toe-Cap Court Sneaker',
      type: 'SAINTGIZA FOOTWEAR',
      price: 165,
      image: '/showroom/m5-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 20300, a: true, o: ['40'] },
        { id: 20301, a: true, o: ['41'] },
        { id: 20302, a: true, o: ['42'] },
        { id: 20303, a: true, o: ['43'] },
        { id: 20304, a: true, o: ['44'] },
        { id: 20305, a: true, o: ['45'] },
      ],
      url: '/product/sg-court-sneaker-bone',
    },

    {
      id: 'sg-olive-raglan-knit',
      name: 'Olive Raglan Heavy Knit',
      type: 'SAINTGIZA ARCHIVE',
      price: 225,
      image: '/showroom/m4-top.webp',
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 30100, a: true, o: ['S'] },
        { id: 30101, a: true, o: ['M'] },
        { id: 30102, a: true, o: ['L'] },
        { id: 30103, a: true, o: ['XL'] },
      ],
      url: '/product/sg-olive-raglan-knit',
    },
    {
      id: 'sg-corduroy-trousers',
      name: 'Pleated Corduroy Trouser',
      type: 'SAINTGIZA ARCHIVE',
      price: 195,
      image: '/showroom/m4-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 30200, a: true, o: ['30'] },
        { id: 30201, a: true, o: ['32'] },
        { id: 30202, a: true, o: ['34'] },
        { id: 30203, a: true, o: ['36'] },
      ],
      url: '/product/sg-corduroy-trousers',
    },
    {
      id: 'sg-field-trail-boot',
      name: 'Field Low Trail Boot',
      type: 'SAINTGIZA FOOTWEAR',
      price: 240,
      image: '/showroom/m4-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 30300, a: true, o: ['40'] },
        { id: 30301, a: true, o: ['41'] },
        { id: 30302, a: true, o: ['42'] },
        { id: 30303, a: true, o: ['43'] },
        { id: 30304, a: true, o: ['44'] },
        { id: 30305, a: true, o: ['45'] },
      ],
      url: '/product/sg-field-trail-boot',
    },

    {
      id: 'sg-boxy-black-tee',
      name: 'Boxy Heavyweight Tee',
      type: 'SAINTGIZA ESSENTIALS',
      price: 95,
      image: '/showroom/m6-top.webp',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      variants: [
        { id: 40100, a: true, o: ['S'] },
        { id: 40101, a: true, o: ['M'] },
        { id: 40102, a: true, o: ['L'] },
        { id: 40103, a: true, o: ['XL'] },
        { id: 40104, a: true, o: ['XXL'] },
      ],
      url: '/product/sg-boxy-black-tee',
    },
    {
      id: 'sg-light-wash-denim',
      name: 'Light Wash Baggy Denim',
      type: 'SAINTGIZA RUNWAY',
      price: 195,
      image: '/showroom/m6-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 40200, a: true, o: ['30'] },
        { id: 40201, a: true, o: ['32'] },
        { id: 40202, a: true, o: ['34'] },
        { id: 40203, a: true, o: ['36'] },
      ],
      url: '/product/sg-light-wash-denim',
    },
    {
      id: 'sg-court-white',
      name: 'Court Low — Triple White',
      type: 'SAINTGIZA FOOTWEAR',
      price: 165,
      image: '/showroom/m6-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 40300, a: true, o: ['40'] },
        { id: 40301, a: true, o: ['41'] },
        { id: 40302, a: true, o: ['42'] },
        { id: 40303, a: true, o: ['43'] },
        { id: 40304, a: true, o: ['44'] },
        { id: 40305, a: true, o: ['45'] },
      ],
      url: '/product/sg-court-white',
    },

    {
      id: 'sg-burgundy-ribbed-knit',
      name: 'Burgundy Heavy Ribbed Knit',
      type: 'SAINTGIZA ARCHIVE',
      price: 225,
      image: '/showroom/m3-top.webp',
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 50100, a: true, o: ['S'] },
        { id: 50101, a: true, o: ['M'] },
        { id: 50102, a: true, o: ['L'] },
        { id: 50103, a: true, o: ['XL'] },
      ],
      url: '/product/sg-burgundy-ribbed-knit',
    },
    {
      id: 'sg-charcoal-denim',
      name: 'Washed Charcoal Denim',
      type: 'SAINTGIZA RUNWAY',
      price: 205,
      image: '/showroom/m3-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 50200, a: true, o: ['30'] },
        { id: 50201, a: true, o: ['32'] },
        { id: 50202, a: true, o: ['34'] },
        { id: 50203, a: true, o: ['36'] },
      ],
      url: '/product/sg-charcoal-denim',
    },
    {
      id: 'sg-derby-black',
      name: 'Minimal Leather Derby',
      type: 'SAINTGIZA FOOTWEAR',
      price: 260,
      image: '/showroom/m3-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 50300, a: true, o: ['40'] },
        { id: 50301, a: true, o: ['41'] },
        { id: 50302, a: true, o: ['42'] },
        { id: 50303, a: true, o: ['43'] },
        { id: 50304, a: true, o: ['44'] },
        { id: 50305, a: true, o: ['45'] },
      ],
      url: '/product/sg-derby-black',
    },

    {
      id: 'sg-grey-crewneck',
      name: 'French Terry Crewneck',
      type: 'SAINTGIZA ESSENTIALS',
      price: 175,
      image: '/showroom/m2-top.webp',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      variants: [
        { id: 60100, a: true, o: ['S'] },
        { id: 60101, a: true, o: ['M'] },
        { id: 60102, a: true, o: ['L'] },
        { id: 60103, a: true, o: ['XL'] },
        { id: 60104, a: true, o: ['XXL'] },
      ],
      url: '/product/sg-grey-crewneck',
    },
    {
      id: 'sg-vintage-denim',
      name: 'Relaxed Vintage Denim',
      type: 'SAINTGIZA RUNWAY',
      price: 195,
      image: '/showroom/m2-pants.webp',
      sizes: ['30', '32', '34', '36'],
      variants: [
        { id: 60200, a: true, o: ['30'] },
        { id: 60201, a: true, o: ['32'] },
        { id: 60202, a: true, o: ['34'] },
        { id: 60203, a: true, o: ['36'] },
      ],
      url: '/product/sg-vintage-denim',
    },
    {
      id: 'sg-court-sneaker-black',
      name: 'Retro Court Sneaker',
      type: 'SAINTGIZA FOOTWEAR',
      price: 165,
      image: '/showroom/m2-shoes.webp',
      sizes: ['40', '41', '42', '43', '44', '45'],
      variants: [
        { id: 60300, a: true, o: ['40'] },
        { id: 60301, a: true, o: ['41'] },
        { id: 60302, a: true, o: ['42'] },
        { id: 60303, a: true, o: ['43'] },
        { id: 60304, a: true, o: ['44'] },
        { id: 60305, a: true, o: ['45'] },
      ],
      url: '/product/sg-court-sneaker-black',
    },
  ],
};

// === 10.3 Styling Bag Manager ===
const BAG_STORAGE_KEY = 'runway-styling-bag-v3';
const usdFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

class StylingBag {
  constructor() {
    this.entries = [];
    this.variantMap = new Map();
    this.toastTimer = null;
    this.validated = false;
    this.loadStorage();
  }

  registerProducts(productsMap) {
    if (!productsMap || typeof productsMap !== 'object') return;
    this.validateCatalog();
    for (const prod of Object.values(productsMap)) {
      if (!prod || !Array.isArray(prod.variants)) continue;
      const numericPrice =
        typeof prod.priceNumber === 'number'
          ? prod.priceNumber
          : Number(String(prod.price || '').replace(/[^0-9.]/g, '')) || 0;
      const itemObj = {
        id: prod.id,
        name: prod.name,
        type: prod.vendor || 'From the original lookbook',
        price: numericPrice,
        image: prod.image,
        sizes: prod.options || [],
        variants: prod.variants,
        url: prod.url || `https://nike-makknzjs.myshopify.com/products/${prod.id}`,
      };
      for (const v of prod.variants) {
        if (v && Number.isSafeInteger(v.id)) {
          this.variantMap.set(v.id, { item: itemObj, variant: v });
        }
      }
    }
    this.render();
  }

  validateCatalog() {
    if (this.validated) return;
    const cat = NATIVE_CATALOG;
    if (!cat || !Array.isArray(cat.items)) {
      throw new Error('The product list could not load.');
    }
    for (const item of cat.items) {
      if (
        typeof item.id !== 'string' ||
        typeof item.name !== 'string' ||
        typeof item.price !== 'number' ||
        !Number.isFinite(item.price) ||
        item.price < 0 ||
        !Array.isArray(item.variants)
      ) {
        throw new Error('The product list is unavailable.');
      }
      for (const v of item.variants) {
        if (
          !Number.isSafeInteger(v.id) ||
          typeof v.a !== 'boolean' ||
          !Array.isArray(v.o) ||
          !v.o.every((s) => typeof s === 'string')
        ) {
          throw new Error('The product list is unavailable.');
        }
        this.variantMap.set(v.id, { item, variant: v });
      }
    }
    this.validated = true;
  }

  loadStorage() {
    try {
      const raw = localStorage.getItem(BAG_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const clean = [];
      for (const e of parsed) {
        if (
          e &&
          Number.isSafeInteger(e.id) &&
          Number.isSafeInteger(e.quantity) &&
          e.quantity >= 1 &&
          e.quantity <= 20
        ) {
          clean.push({ id: e.id, quantity: e.quantity });
          if (clean.length >= 50) break;
        }
      }
      this.entries = clean;
    } catch {
      this.entries = [];
    }
  }

  saveStorage() {
    try {
      localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(this.entries.slice(0, 50)));
    } catch {
      // ignore storage errors
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('runway:bag-change'));
    }
  }

  updateCounts() {
    const sum = this.entries.reduce((acc, e) => acc + e.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(sum);
    });
  }

  showToast(text) {
    const status = document.getElementById('bag-status');
    if (!status) return;
    status.textContent = text;
    status.classList.add('is-on');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      status.classList.remove('is-on');
    }, 2500);
  }

  async add(items) {
    this.validateCatalog();
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('Please choose an available size.');
    }
    for (const req of items) {
      const id = Number(req.id);
      const found = this.variantMap.get(id);
      if (!found || !found.variant.a) {
        throw new Error('Please choose an available size.');
      }
    }
    for (const req of items) {
      const id = Number(req.id);
      const qty = Number.isSafeInteger(req.quantity) ? req.quantity : 1;
      const existing = this.entries.find((e) => e.id === id);
      if (existing) {
        existing.quantity = Math.min(20, existing.quantity + qty);
      } else if (this.entries.length < 50) {
        this.entries.push({ id, quantity: Math.min(20, Math.max(1, qty)) });
      }
    }
    this.saveStorage();
    this.render();
    this.showToast(
      items.length > 1
        ? 'Look saved to your styling bag'
        : 'Piece saved to your styling bag'
    );
  }

  remove(variantId) {
    this.entries = this.entries.filter((e) => e.id !== variantId);
    this.saveStorage();
    this.render();
  }

  render() {
    try {
      this.validateCatalog();
    } catch {
      // ignore if catalog not ready
    }
    this.updateCounts();
    const container = document.getElementById('bag-items');
    const totalEl = document.getElementById('bag-total');
    const exportBtn = document.getElementById('export-bag');
    if (!container) return;

    container.innerHTML = '';
    const validEntries = this.entries.filter((e) => this.variantMap.has(e.id));

    if (validEntries.length === 0) {
      const p = document.createElement('p');
      p.className = 'bag-note';
      p.textContent = 'Your styling bag is empty. Choose a size beside a piece to save it.';
      container.appendChild(p);
      if (totalEl) totalEl.textContent = '';
      if (exportBtn) exportBtn.disabled = true;
      return;
    }

    let subtotal = 0;
    for (const entry of validEntries) {
      const { item, variant } = this.variantMap.get(entry.id);
      subtotal += item.price * entry.quantity;
      const sizeStr = variant.o.join(' / ');

      const row = document.createElement('div');
      row.className = 'bag-row';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.width = 80;
      img.height = 100;
      img.loading = 'lazy';
      img.decoding = 'async';

      const details = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = item.name;

      const meta = document.createElement('p');
      meta.textContent = `Size ${sizeStr} · Quantity ${entry.quantity} · ${usdFmt.format(item.price)}`;

      const shopLink = document.createElement('a');
      shopLink.href = `/product/${item.id}`;
      shopLink.textContent = 'View piece details →';
      shopLink.addEventListener('click', () => {
        const dlg = document.getElementById('bag-dialog');
        if (dlg && dlg.open) dlg.close();
      });

      details.appendChild(h3);
      details.appendChild(meta);
      details.appendChild(shopLink);

      const rmBtn = document.createElement('button');
      rmBtn.type = 'button';
      rmBtn.className = 'bag-remove';
      rmBtn.setAttribute('aria-label', `Remove ${item.name}`);
      rmBtn.textContent = '×';
      rmBtn.addEventListener('click', () => this.remove(entry.id));

      row.appendChild(img);
      row.appendChild(details);
      row.appendChild(rmBtn);
      container.appendChild(row);
    }

    if (totalEl) {
      totalEl.textContent = `Reference subtotal ${usdFmt.format(subtotal)}`;
    }
    if (exportBtn) {
      exportBtn.disabled = false;
    }
  }

  exportShortlist() {
    this.validateCatalog();
    const validEntries = this.entries.filter((e) => this.variantMap.has(e.id));
    if (validEntries.length === 0) return;
    const parts = [
      'RUNWAY — STYLING SHORTLIST',
      'Reference prices; no order or payment has been placed.',
      '',
    ];
    for (const entry of validEntries) {
      const { item, variant } = this.variantMap.get(entry.id);
      const sizeStr = variant.o.join(' / ');
      parts.push(`${item.name} · Size ${sizeStr} · Quantity ${entry.quantity}\n${item.url}`);
    }
    const text = parts.join('\n\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'runway-outfit-shortlist.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

export const stylingBag = new StylingBag();

export function initBagDialog() {
  stylingBag.render();
  const dialog = document.getElementById('bag-dialog');
  const closeBtn = document.getElementById('close-bag');
  const exportBtn = document.getElementById('export-bag');

  document.querySelectorAll('#open-bag, [data-open-bag]').forEach((btn) => {
    if (btn.dataset.bagBound) return;
    btn.dataset.bagBound = '1';
    btn.addEventListener('click', () => {
      stylingBag.render();
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  });

  if (closeBtn && !closeBtn.dataset.bagBound) {
    closeBtn.dataset.bagBound = '1';
    closeBtn.addEventListener('click', () => {
      if (dialog) dialog.close();
    });
  }

  if (exportBtn && !exportBtn.dataset.bagBound) {
    exportBtn.dataset.bagBound = '1';
    exportBtn.addEventListener('click', () => {
      stylingBag.exportShortlist();
    });
  }

  if (dialog && !dialog.dataset.bagBound) {
    dialog.dataset.bagBound = '1';
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        dialog.close();
      }
    });
  }
}

// === Helper Math Functions ===
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const mod = (n, m) => ((n % m) + m) % m;

// === Custom Element <runway-section> ===
class RunwaySection extends HTMLElement {
  connectedCallback() {
    if (this._initialized) {
      this.bindWindowAndObservers();
      this.measure();
      this.kick();
      if (this.playing) this.restartAutoBar();
      return;
    }
    this._initialized = true;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (window.Shopify && window.Shopify.designMode) {
      this.classList.add('rw--design');
    }

    // DOM querying
    this.stage = this.querySelector('[data-rw-stage]');
    this.actorsEl = this.querySelector('[data-rw-actors]');
    this.heroesEl = this.querySelector('[data-rw-heroes]');
    this.cursorEl = this.querySelector('[data-rw-cursor]');
    this.liveEl = this.querySelector('[data-rw-live]');
    this.piecesLabelEl = this.querySelector('[data-rw-pieces]');
    this.panelEl = this.querySelector('.rw__panel');
    this.autoBtn = this.querySelector('[data-rw-auto]');
    this.lbEl = this.querySelector('[data-rw-lb]');
    this.lbStage = this.querySelector('[data-rw-lb-stage]');
    this.lbKicker = this.querySelector('[data-rw-lb-kicker]');
    this.lbName = this.querySelector('[data-rw-lb-name]');

    this.ticks = Array.from(this.querySelectorAll('[data-rw-tick]'));
    this.heroes = Array.from(this.querySelectorAll('[data-rw-hero]'));
    this.panels = Array.from(this.querySelectorAll('[data-rw-panel]'));
    const origModels = Array.from(this.querySelectorAll('[data-rw-model]'));

    this.n = 6;
    this.N = this.n * Math.ceil(8 / this.n); // 12

    // Clone bodies 0..5 into 6..11
    for (let i = 0; i < this.n; i++) {
      const clone = origModels[i].cloneNode(true);
      clone.setAttribute('data-rw-clone', '');
      clone.dataset.index = String(i + this.n);
      const img = clone.querySelector('img[data-model-image]');
      if (img) img.setAttribute('loading', 'lazy');
      this.actorsEl.appendChild(clone);
    }

    this.modelEls = Array.from(this.actorsEl.querySelectorAll('[data-rw-model]'));
    this.bodies = this.modelEls.map((el, a) => ({
      el,
      a,
      look: a % this.n,
      hit: el.querySelector('.rw__hit'),
      w: 0,
      lastBlur: -1,
      // Classic mode per-body spring state
      x: 0,
      g: 0,
      v: 0,
      goal: 0,
      from: 0,
      trip: 0, // 0 none, 1 forward, -1 backward
    }));

    // Constants from balanced feel
    this.K = 95;
    this.C = 2 * Math.sqrt(this.K); // ~19.4935886896
    this.lag = 0.04;

    // Carousel state
    this.index = 0;
    const startOffset = this.reducedMotion ? 0 : 1.15;
    this.target = 0;
    this.cur = -startOffset;
    this.vel = 0;
    this.still = false;

    // Classic initial positions
    for (const b of this.bodies) {
      const initGoal = mod(b.a - this.target, this.N);
      b.goal = initGoal;
      b.x = initGoal + startOffset;
      b.g = initGoal + startOffset;
      b.from = b.x;
    }

    // Lifecycle & Autoplay state
    this.visible = true;
    this.playing = false;
    this.dragging = false;
    this.panelHover = false;
    this.zoomed = false;
    this.engaged = false;
    this.autoTimer = null;
    this.rafId = null;
    this.lastTime = 0;
    this.latchedVh = window.innerHeight;
    this.latchedVw = window.innerWidth;
    this.isMobile = window.innerWidth <= 749;
    this.mode = this.isMobile ? 'classic' : 'ring';

    // Custom cursor state
    if (this.finePointer && this.cursorEl) {
      this.classList.add('rw--cursor');
      this.cx = 0;
      this.cy = 0;
      this.ctx = 0;
      this.cty = 0;
      this.cursorActive = false;
      this.cursorRaf = null;
    } else if (this.cursorEl) {
      this.cursorEl.remove();
      this.cursorEl = null;
    }

    // Size sheet state
    this.sheetHost = null;
    this.openCard = null;
    this.lbTimer = null;
    this.wheelAcc = 0;
    this.wheelLocked = false;
    this.suppressClickUntil = 0;

    // Setup image decoding & feet detection
    this.setupImages();
    this.detectFeet();
    this.initPickers();

    // Intro reveal setup
    this.classList.add('rw--js');
    if (this.reducedMotion) {
      this.classList.add('is-revealed');
    }

    this.measure();
    this.setIndex(0, true);

    if (this.reducedMotion) {
      this.cur = this.target;
      this.setStill(true);
      this.renderAll();
    } else {
      this.kick();
    }

    // Autoplay init
    if (
      this.dataset.autoplay === 'true' &&
      !this.reducedMotion &&
      !(window.Shopify && window.Shopify.designMode)
    ) {
      this.play(true);
    }

    this.bindEvents();
    initBagDialog();
  }

  disconnectedCallback() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.cursorRaf) cancelAnimationFrame(this.cursorRaf);
    if (this.autoTimer) clearTimeout(this.autoTimer);
    if (this.lbTimer) clearTimeout(this.lbTimer);
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    if (this.visObserver) this.visObserver.disconnect();
    if (this.revealObserver) this.revealObserver.disconnect();
    if (this.stageResizeObserver) this.stageResizeObserver.disconnect();
    if (this._onWinResize) window.removeEventListener('resize', this._onWinResize);
    if (this._onDocVis) document.removeEventListener('visibilitychange', this._onDocVis);
    this.dockSheet();
    if (this.sheetHost) {
      this.sheetHost.remove();
      this.sheetHost = null;
    }
  }

  // === 2.2 Image Decode ===
  setupImages() {
    const imgs = this.querySelectorAll('img[data-model-image]');
    imgs.forEach((img) => this.decodeModelImage(img));
  }

  decodeModelImage(img) {
    if (img.classList.contains('is-decoded')) return;
    const mark = () => img.classList.add('is-decoded');
    if (typeof img.decode === 'function') {
      img
        .decode()
        .then(mark)
        .catch(() => {
          if (img.complete && img.naturalWidth > 0) {
            mark();
          } else {
            img.addEventListener('load', mark, { once: true });
          }
        });
    } else if (img.complete && img.naturalWidth > 0) {
      mark();
    } else {
      img.addEventListener('load', mark, { once: true });
    }
  }

  // === 14. Feet Detection ===
  detectFeet() {
    this.heroes.forEach((hero, lookIdx) => {
      const probeUrl = hero.dataset.probe;
      if (!probeUrl) return;
      const probeImg = new Image();
      probeImg.crossOrigin = 'anonymous';
      probeImg.onload = () => {
        try {
          const w = 48;
          const h = Math.max(1, Math.round((probeImg.naturalHeight / probeImg.naturalWidth) * w));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(probeImg, 0, 0, w, h);
          const data = ctx.getImageData(0, 0, w, h).data;
          let lastRow = h - 1;
          outer: for (let r = h - 1; r >= 0; r--) {
            const rowStart = r * w * 4;
            for (let c = 0; c < w; c++) {
              if (data[rowStart + c * 4 + 3] > 40) {
                lastRow = r;
                break outer;
              }
            }
          }
          const foot = clamp((h - 1 - lastRow) / h, 0, 0.4);
          const val = foot.toFixed(4);
          hero.style.setProperty('--rw-foot', val);
          this.bodies.forEach((b) => {
            if (b.look === lookIdx) {
              b.el.style.setProperty('--rw-foot', val);
            }
          });
        } catch {
          // tainted canvas silently keeps offset 0
        }
      };
      probeImg.src = probeUrl;
    });
  }

  // === 10.2 Init Pickers ===
  initPickers() {
    const cards = this.querySelectorAll('.rw__item[data-rw-card]');
    cards.forEach((card) => {
      this.updateCardOption(card, true);
    });
  }

  getCardVariants(card, pickerOverride) {
    const picker = pickerOverride || card.querySelector('[data-rw-picker]');
    if (!picker) return [];
    const script = picker.querySelector('script[data-rw-variants]');
    if (!script) return [];
    try {
      return JSON.parse(script.textContent);
    } catch {
      return [];
    }
  }

  updateCardOption(card, isInitial = false, pickerOverride = null) {
    const picker = pickerOverride || card.querySelector('[data-rw-picker]');
    if (!picker) return;
    const variants = this.getCardVariants(card, picker);
    const radios = Array.from(picker.querySelectorAll('input[type="radio"]'));
    const checked = radios.find((r) => r.checked);
    const selectedVal = checked ? checked.value : null;

    // Toggle is-unavailable per pill
    radios.forEach((r) => {
      const pill = r.closest('.rw__pill');
      const avail = variants.some((v) => v.a && v.o[0] === r.value);
      if (pill) pill.classList.toggle('is-unavailable', !avail);
    });

    const match = variants.find((v) => v.a && v.o[0] === selectedVal);
    const confirmBtn = picker.querySelector('[data-rw-confirm]');
    const confirmLabel = picker.querySelector('[data-rw-confirm-label]');

    if (match) {
      card.dataset.selected = String(match.id);
      if (confirmBtn) confirmBtn.disabled = false;
      if (confirmLabel) confirmLabel.textContent = confirmLabel.dataset.add || 'Add to bag';
    } else {
      delete card.dataset.selected;
      if (confirmBtn) confirmBtn.disabled = true;
      if (confirmLabel) confirmLabel.textContent = this.dataset.msgSoldout || 'Sold out';
    }

    if (!isInitial) {
      card.dataset.touched = '1';
    }
  }

  // === 7.2 & 8.1 Measure & Resize ===
  measure() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (vw !== this.latchedVw || Math.abs(vh - this.latchedVh) >= 160) {
      this.latchedVw = vw;
      this.latchedVh = vh;
    }

    const wasMobile = this.isMobile;
    this.isMobile = vw <= 749;
    this.mode = this.isMobile ? 'classic' : 'ring';

    if (wasMobile && !this.isMobile) {
      this.dockSheet();
    }

    if (!this.isMobile) {
      // Sum visible header heights not containing this section
      const headers = document.querySelectorAll(
        '.shopify-section-group-header-group, #shopify-section-header, #shopify-section-announcement-bar'
      );
      let headerH = 0;
      headers.forEach((h) => {
        if (!h.contains(this)) {
          const rect = h.getBoundingClientRect();
          if (rect.height > 0) headerH += rect.height;
        }
      });
      if (headerH === 0) headerH = 88;
      const frameH = Math.max(380, vh - Math.round(headerH));
      this.style.setProperty('--rw-frame-h', `${frameH}px`);
    } else {
      const mvh = clamp(Number(this.dataset.mheightVh) || 109, 50, 120);
      const frameH = Math.round(this.latchedVh * (mvh / 100));
      this.style.setProperty('--rw-frame-h', `${frameH}px`);
    }

    const rect = this.stage.getBoundingClientRect();
    this.W = rect.width || vw;
    this.H = rect.height || 600;

    this.fs = this.mode === 'ring' ? 1.08 : 1;
    this.style.setProperty('--rw-fs', String(this.fs));

    let modelH;
    let hx;
    let hy;

    if (this.mode === 'ring') {
      modelH = Math.max(240, Math.round((this.H - 18 - 8) / 1.08));
      hx = 0.5 * this.W;
      hy = 18;
    } else {
      const padBottom = this.isMobile ? 16 : 22;
      modelH = Math.max(240, Math.round(this.H - padBottom - 8));
      hx = (this.isMobile ? 0.3 : 0.4) * this.W;
      hy = this.isMobile ? 16 : 22;
    }

    this.stage.style.setProperty('--rw-model-h', `${modelH}px`);
    this.stage.style.setProperty('--rw-hx', `${hx.toFixed(1)}px`);
    this.stage.style.setProperty('--rw-hy', `${hy}px`);
    this.style.setProperty('--rw-ax', `${((hx / this.W) * 100).toFixed(2)}%`);

    const approxW = Math.round(modelH * 0.5625);
    for (const b of this.bodies) {
      b.w = b.el.offsetWidth || approxW;
    }

    if (wasMobile !== this.isMobile) {
      for (const b of this.bodies) {
        const g = mod(b.a - this.target, this.N);
        b.goal = g;
        b.x = g;
        b.g = g;
        b.v = 0;
        b.trip = 0;
      }
    }

    this.renderAll();
  }

  // === 7.3 Placement Primitive ===
  put(s, x, bottom, scale, opacity, blur, z) {
    const half = (s.w * scale) / 2;
    let op = opacity;
    if (x + half < -4 || x - half > this.W + 4) {
      op = 0;
    }
    const el = s.el;
    el.style.transform = `translate3d(${x.toFixed(2)}px, ${(-bottom).toFixed(2)}px, 0) translateX(-50%) scale(${scale.toFixed(4)})`;
    el.style.opacity = op.toFixed(3);
    el.style.zIndex = String(z);
    el.style.visibility = op < 0.01 ? 'hidden' : 'visible';
    el.style.pointerEvents = op < 0.5 ? 'none' : 'auto';

    const b = Math.round(blur * 10) / 10;
    if (b !== s.lastBlur) {
      s.lastBlur = b;
      if (b <= 0.05) {
        el.style.removeProperty('filter');
      } else {
        el.style.filter = `blur(${b.toFixed(1)}px)`;
      }
    }
  }

  // === 7.4 & 7.5 Render All ===
  renderAll() {
    if (!this.W || !this.H) return;

    if (this.mode === 'ring') {
      const W = this.W;
      const H = this.H;
      const cx = 0.5 * W;
      const R = (this.isMobile ? 0.72 : 0.62) * W;
      const P = (this.isMobile ? 1.9 : 1.65) * W;
      const floor = H - 18;
      const horizon = 0.36 * H;
      this.unit = Math.max(this.isMobile ? 90 : 120, 0.3 * W);
      const step = (2 * Math.PI) / 12;
      const twoPi = 2 * Math.PI;

      for (const s of this.bodies) {
        let phi = mod((s.a - this.cur) * step, twoPi);
        if (phi > Math.PI) phi -= twoPi;
        const zDepth = R * (1 - Math.cos(phi));
        const persp = P / (P + zDepth);
        const sl = Math.abs(phi) / step;
        const scale = persp * (1 + (this.fs - 1) * clamp(1 - sl, 0, 1));
        const x = cx + R * Math.sin(phi) * persp;
        const feet = horizon + (floor - horizon) * persp;
        const bottom = H - feet;
        const blur = sl <= 1 ? 1.8 * sl : Math.min(1.8 + (sl - 1) * 2, 6.5);
        let opacity = clamp((Math.cos(phi) + 0.55) / 0.3, 0, 1);
        if (this.still && sl < 0.02) {
          opacity = 0;
        }
        const zIdx = Math.round(scale * 1000);
        this.put(s, x, bottom, scale, opacity, blur, zIdx);
      }
    } else {
      // Classic mode (7.5)
      const W = this.W;
      const ax = this.isMobile ? 0.3 : 0.4;
      const ay = this.isMobile ? 16 : 22;
      const sx = this.isMobile ? 0.32 : 0.125;
      const sy = this.isMobile ? 22 : 58;
      const sr = 0.76;
      const ex = this.isMobile ? 0.55 : 0.38;
      const d = this.isMobile ? 4 : 5;
      this.unit = Math.max(90, W * sx * 1.6);

      for (const s of this.bodies) {
        let k = s.x;
        let e = -1;

        if (s.trip !== 0) {
          const denom = Math.abs(s.goal - s.from) || 1;
          const u = clamp(Math.abs(s.x - s.from) / denom, 0, 1);
          if (s.trip > 0) {
            // Trip forward
            if (u < 0.5) {
              e = 2 * u * 1.4;
            } else {
              k = s.goal + 2 * (1 - u);
            }
          } else {
            // Trip backward
            if (u < 0.5) {
              k = s.from + 2 * u;
            } else {
              e = 2 * (1 - u) * 1.4;
            }
          }
        } else if (k < 0) {
          e = Math.min(-k, 1.4);
        }

        if (e >= 0) {
          const x = W * (ax - ex * e);
          const bottom = ay - 22 * e;
          const scale = 1 + 0.14 * e;
          const opacity = Math.max(0, 1 - 1.05 * e);
          const blur = 4 * Math.min(e, 1);
          const z = 1100;
          this.put(s, x, bottom, scale, opacity, blur, z);
        } else {
          const x = W * (ax + sx * k);
          const bottom = ay + sy * k;
          const scale = Math.pow(sr, k);
          let opacity = k <= d - 1 ? 1 - 0.13 * k : Math.max(0, 0.61 * (d - k));
          if (this.still && Math.abs(k) < 0.02) {
            opacity = 0;
          }
          const blur = Math.min(0.9 * Math.max(0, k), 3.2);
          const z = 1000 - Math.round(10 * k);
          this.put(s, x, bottom, scale, opacity, blur, z);
        }
      }
    }
  }

  // === 7.6 & 7.8 Set Still & Render Loop ===
  setStill(val) {
    if (this.still === val) return;
    this.still = val;
    this.classList.toggle('rw--still', val);
  }

  kick() {
    if (this.rafId || !this.visible || document.hidden) return;
    this.lastTime = 0;
    this.rafId = requestAnimationFrame((t) => this.tick(t));
  }

  tick(now) {
    this.rafId = null;
    if (!this.visible || document.hidden) return;

    if (this.reducedMotion) {
      this.cur = this.target;
      for (const s of this.bodies) {
        const g = mod(s.a - this.target, this.N);
        s.goal = g;
        s.x = g;
        s.g = g;
        s.v = 0;
        s.trip = 0;
      }
      this.setStill(true);
      this.renderAll();
      return;
    }

    const dt = this.lastTime ? Math.min(0.034, (now - this.lastTime) / 1000) : 1 / 60;
    this.lastTime = now;
    const subSteps = 3;
    const h = dt / subSteps;

    let settled = true;

    if (this.mode === 'ring') {
      for (let i = 0; i < subSteps; i++) {
        const acc = -this.K * (this.cur - this.target) - this.C * this.vel;
        this.vel += acc * h;
        this.cur += this.vel * h;
      }
      if (
        Math.abs(this.cur - this.target) <= 0.0005 &&
        Math.abs(this.vel) <= 0.0005 &&
        !this.dragging
      ) {
        this.cur = this.target;
        this.vel = 0;
      } else {
        settled = false;
      }
    } else {
      // Classic per-body springs
      this.cur = this.target;
      for (const s of this.bodies) {
        const newGoal = mod(s.a - this.target, this.N);
        if (Math.abs(newGoal - s.goal) > this.N / 2) {
          s.from = s.x;
          s.trip = newGoal > s.goal ? 1 : -1;
        }
        s.goal = newGoal;

        const tau = this.dragging
          ? 0.016
          : s.trip !== 0
          ? 0.1
          : 0.03 + this.lag * Math.min(s.goal, 4);
        s.g += (s.goal - s.g) * (1 - Math.exp(-dt / tau));

        for (let i = 0; i < subSteps; i++) {
          const acc = -this.K * (s.x - s.g) - this.C * s.v;
          s.v += acc * h;
          s.x += s.v * h;
        }

        if (s.trip !== 0 && Math.abs(s.x - s.goal) < 0.02) {
          s.trip = 0;
        }

        if (
          Math.abs(s.x - s.goal) <= 0.0006 &&
          Math.abs(s.v) <= 0.0006 &&
          !this.dragging
        ) {
          s.x = s.goal;
          s.g = s.goal;
          s.v = 0;
          s.trip = 0;
        } else {
          settled = false;
        }
      }
    }

    if (!settled || this.dragging) {
      this.setStill(false);
      this.renderAll();
      this.rafId = requestAnimationFrame((t) => this.tick(t));
    } else {
      this.setStill(true);
      this.renderAll();
    }
  }

  // === 8.3 & 8.4 Navigation & Index Change ===
  bodyRank(a) {
    const t = Math.round(this.target);
    let k = mod(a - t, this.N);
    if (this.mode === 'ring' && k > this.N / 2) {
      k -= this.N;
    }
    return k;
  }

  setIndex(i, silent = false) {
    const prevIdx = this.index;
    this.index = mod(i, this.n);
    this.kick();

    // Update queue body accessibility
    for (const s of this.bodies) {
      const k = this.bodyRank(s.a);
      const reach = this.mode === 'ring' ? k !== 0 && Math.abs(k) <= 2 : k > 0 && k <= 3;
      if (reach) {
        s.el.removeAttribute('aria-hidden');
        if (s.hit) {
          s.hit.tabIndex = 0;
          s.hit.removeAttribute('aria-hidden');
        }
      } else {
        s.el.setAttribute('aria-hidden', 'true');
        if (s.hit) {
          s.hit.tabIndex = -1;
          s.hit.setAttribute('aria-hidden', 'true');
        }
      }
    }

    const progress = ((this.index + 1) / this.n).toFixed(3);
    this.style.setProperty('--rw-progress', progress);

    // Toggle heroes
    this.heroes.forEach((h, idx) => {
      const active = idx === this.index;
      const was = !silent && idx === prevIdx && prevIdx !== this.index;
      h.classList.toggle('is-on', active);
      h.classList.toggle('was', was);
      h.setAttribute('aria-hidden', active ? 'false' : 'true');
      const zoomBtn = h.querySelector('[data-rw-zoom]');
      if (zoomBtn) zoomBtn.tabIndex = active ? 0 : -1;
    });

    // Update ticks
    this.ticks.forEach((t, idx) => {
      t.setAttribute('aria-current', idx === this.index ? 'true' : 'false');
      t.classList.toggle('is-past', idx < this.index);
    });

    if (silent) {
      this.restartAutoBar();
      return;
    }

    // Close popup & mobile sheet
    if (this.zoomed) this.closePopup();
    if (this.isMobile) this.dockSheet();

    // Replay light sweep
    if (!this.reducedMotion) {
      this.stage.classList.remove('is-sweep');
      void this.stage.offsetWidth;
      this.stage.classList.add('is-sweep');
    }

    // Announce in live region
    const activeHero = this.heroes[this.index];
    if (this.liveEl && activeHero) {
      this.liveEl.textContent = activeHero.dataset.label || '';
    }

    // Switch look panels & replay entrance
    this.panels.forEach((p, idx) => {
      const active = idx === this.index;
      p.hidden = !active;
      p.classList.remove('is-in');
    });
    const activePanel = this.panels[this.index];
    if (activePanel) {
      void activePanel.offsetWidth;
      activePanel.classList.add('is-in');
      const tpl = activePanel.querySelector('template[data-rw-pieces-text]');
      if (this.piecesLabelEl && tpl) {
        this.piecesLabelEl.textContent = tpl.content.textContent.trim() || '3 pieces';
        this.piecesLabelEl.classList.remove('is-swap');
        void this.piecesLabelEl.offsetWidth;
        this.piecesLabelEl.classList.add('is-swap');
      }
    }

    this.clearHot();
    this.restartAutoBar();
  }

  moveTo(T) {
    this.target = T;
    this.setStill(false);
    this.setIndex(mod(Math.round(T), this.n));
  }

  next() {
    this.moveTo(Math.round(this.target) + 1);
  }

  prev() {
    this.moveTo(Math.round(this.target) - 1);
  }

  go(i) {
    let d = mod(i - this.index, this.n);
    if (d > 3) d -= this.n;
    this.moveTo(Math.round(this.target) + d);
  }

  // === 8.5 Autoplay ===
  play(on) {
    this.playing = Boolean(on);
    this.classList.toggle('is-playing', this.playing);
    if (this.autoBtn) {
      this.autoBtn.classList.toggle('is-playing', this.playing);
      this.autoBtn.setAttribute('aria-pressed', this.playing ? 'true' : 'false');
    }
    this.restartAutoBar();
  }

  engage() {
    this.engaged = true;
    if (this.playing) {
      this.play(false);
    }
  }

  restartAutoBar() {
    if (this.autoTimer) {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }
    this.ticks.forEach((t) => t.classList.remove('is-run'));
    if (!this.playing) return;

    const curTick = this.ticks[this.index];
    if (curTick) {
      void curTick.offsetWidth;
      curTick.classList.add('is-run');
    }

    const speed = Number(this.dataset.speed) || 5000;
    this.autoTimer = setTimeout(() => {
      if (
        this.playing &&
        this.visible &&
        !this.dragging &&
        !document.hidden &&
        !this.panelHover &&
        !this.zoomed &&
        !this.engaged
      ) {
        this.next();
      } else {
        this.restartAutoBar();
      }
    }, speed);
  }

  // === 9.4 Hot Linking ===
  clearHot() {
    this.querySelectorAll('.is-hot').forEach((el) => el.classList.remove('is-hot'));
  }

  hot(n, scroll = false) {
    this.clearHot();
    if (!n) return;

    const pinScope = this.zoomed ? this.lbStage : this.heroes[this.index];
    if (pinScope) {
      const pin = pinScope.querySelector(`[data-rw-pin="${n}"]`);
      if (pin) pin.classList.add('is-hot');
    }

    const activePanel = this.panels[this.index];
    if (!activePanel) return;
    const card = activePanel.querySelector(`[data-rw-card="${n}"]`);
    if (!card) return;
    card.classList.add('is-hot');

    if (scroll) {
      this.revealCard(card);
    }
  }

  revealCard(card) {
    const activePanel = this.panels[this.index];
    if (!activePanel) return;
    const list = activePanel.querySelector('.rw__items');
    if (!list) return;
    const behavior = this.reducedMotion ? 'auto' : 'smooth';

    if (this.isMobile && list.scrollWidth > list.clientWidth + 4) {
      const listRect = list.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const left = list.scrollLeft + (cardRect.left - listRect.left) - 20;
      list.scrollTo({ left, behavior });
    } else if (list.scrollHeight > list.clientHeight + 4) {
      const top = card.offsetTop - list.offsetTop - 12;
      list.scrollTo({ top, behavior });
    } else {
      const rect = card.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight - 140) {
        window.scrollBy({ top: rect.top - 0.3 * window.innerHeight, behavior });
      }
    }
  }

  // === 11.1 View Look Popup (Lightbox) ===
  openPopup() {
    if (this.zoomed) return;
    this.engage();
    this.clearHot();

    const activeHero = this.heroes[this.index];
    if (!activeHero || !this.lbStage) return;

    if (this.lbTimer) {
      clearTimeout(this.lbTimer);
      this.lbTimer = null;
    }
    this.lbStage.innerHTML = '';

    const heroFig = activeHero.querySelector('.rw__figure');
    const heroShadow = activeHero.querySelector('.rw__shadow');
    const rectA = heroFig.getBoundingClientRect();

    const wrapper = document.createElement('div');
    wrapper.className = 'rw__lb-model';
    const footVal = activeHero.style.getPropertyValue('--rw-foot') || '0';
    wrapper.style.setProperty('--rw-foot', footVal);

    if (heroShadow) wrapper.appendChild(heroShadow.cloneNode(true));
    const figClone = heroFig.cloneNode(true);
    const zoomBtn = figClone.querySelector('[data-rw-zoom]');
    if (zoomBtn) zoomBtn.remove();

    figClone.querySelectorAll('[data-rw-pin]').forEach((pin) => {
      pin.tabIndex = 0;
    });

    this.lbStage.appendChild(wrapper);
    wrapper.appendChild(figClone);

    const stageRect = this.lbStage.getBoundingClientRect();
    const h = Math.max(160, Math.min(stageRect.height, stageRect.width / 0.5625));
    wrapper.style.setProperty('--rw-model-h', `${Math.round(h)}px`);

    const img = figClone.querySelector('img[data-model-image]');
    if (img) {
      img.setAttribute('loading', 'eager');
      img.setAttribute('sizes', `${Math.round(h * 0.5625)}px`);
      img.classList.add('is-decoded');
    }

    const word = this.lbEl.dataset.word || 'Look';
    const numStr = String(this.index + 1).padStart(2, '0');
    if (this.lbKicker) this.lbKicker.textContent = `${word} ${numStr}`;
    if (this.lbName) this.lbName.textContent = activeHero.dataset.name || '';

    this.zoomed = true;
    this.classList.add('rw--zoom');
    this.lbEl.setAttribute('aria-hidden', 'false');

    if (!this.reducedMotion && rectA.height > 0) {
      const rectB = figClone.getBoundingClientRect();
      if (rectB.height > 0) {
        const dx = rectA.left - rectB.left;
        const dy = rectA.bottom - rectB.bottom;
        const sc = rectA.height / rectB.height;
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
        void wrapper.offsetWidth;
        wrapper.style.transition = '';
        wrapper.style.transform = '';
      }
    }

    const closeBtn = this.lbEl.querySelector('[data-rw-zoom-close]');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  }

  closePopup() {
    if (!this.zoomed) return;
    this.zoomed = false;
    this.clearHot();

    const wrapper = this.lbStage ? this.lbStage.querySelector('.rw__lb-model') : null;
    const activeHero = this.heroes[this.index];
    if (!this.reducedMotion && wrapper && activeHero) {
      const heroFig = activeHero.querySelector('.rw__figure');
      const popFig = wrapper.querySelector('.rw__figure');
      if (heroFig && popFig) {
        const rectA = heroFig.getBoundingClientRect();
        const rectB = popFig.getBoundingClientRect();
        if (rectA.height > 0 && rectB.height > 0) {
          const dx = rectA.left - rectB.left;
          const dy = rectA.bottom - rectB.bottom;
          const sc = rectA.height / rectB.height;
          wrapper.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
        }
      }
    }

    const focusWasInside = this.lbEl && this.lbEl.contains(document.activeElement);
    this.classList.remove('rw--zoom');
    if (this.lbEl) this.lbEl.setAttribute('aria-hidden', 'true');

    if (this.lbTimer) clearTimeout(this.lbTimer);
    this.lbTimer = setTimeout(() => {
      if (!this.zoomed && this.lbStage) {
        this.lbStage.innerHTML = '';
      }
    }, 950);

    if (focusWasInside && this.stage) {
      this.stage.focus({ preventScroll: true });
    }
  }

  // === 10.1 & 12.3 Size Picker & Mobile Sheet ===
  syncSheetTokens(host) {
    if (!host) return;
    const cs = getComputedStyle(this);
    const tokens = [
      '--rw-panel',
      '--rw-text',
      '--rw-muted',
      '--rw-line',
      '--rw-accent',
      '--rw-on-accent',
      '--rw-btn-bg',
      '--rw-btn-fg',
      '--rw-btn-radius',
      '--rw-pill-radius',
      '--rw-bar-r',
      '--rw-thumb-radius',
      '--rw-pt-size',
      '--rw-price',
      '--rw-opt',
      '--rw-ease',
      '--rw-ease-sheet',
      '--rw-ease-spring',
    ];
    tokens.forEach((t) => {
      const v = cs.getPropertyValue(t);
      if (v) host.style.setProperty(t, v.trim());
    });
    host.style.fontFamily = cs.fontFamily;
    host.style.color = cs.color;
  }

  ensureSheetHost() {
    if (this.sheetHost) {
      this.syncSheetTokens(this.sheetHost);
      return this.sheetHost;
    }
    const host = document.createElement('div');
    host.className = 'rw-sheet-host';
    const scrim = document.createElement('button');
    scrim.type = 'button';
    scrim.className = 'rw__pick-scrim';
    scrim.setAttribute('data-rw-pick-close', '');
    scrim.tabIndex = -1;
    scrim.setAttribute('aria-hidden', 'true');
    host.appendChild(scrim);

    this.syncSheetTokens(host);

    host.addEventListener('click', (e) => this.handleDelegatedClick(e));
    host.addEventListener('change', (e) => {
      this.engage();
      if (this.openCard) {
        const picker = host.querySelector('[data-rw-picker]');
        this.updateCardOption(this.openCard, false, picker);
      }
    });
    host.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeSheet(true);
      }
    });

    document.body.appendChild(host);
    this.sheetHost = host;
    return host;
  }

  togglePicker(card) {
    if (!card || card.classList.contains('is-added') || card.classList.contains('is-loading')) {
      return;
    }
    const isPicking = card.classList.contains('is-picking');
    if (isPicking) {
      this.closeCardPicker(card);
    } else {
      this.openCardPicker(card);
    }
  }

  openCardPicker(card) {
    if (this.isMobile) {
      if (this.openCard && this.openCard !== card) {
        this.dockSheet();
      }
      const picker = card.querySelector('[data-rw-picker]');
      if (!picker) return;
      const host = this.ensureSheetHost();
      card.classList.add('is-picking');
      const addBtn = card.querySelector('[data-rw-add]');
      if (addBtn) addBtn.setAttribute('aria-expanded', 'true');
      picker.hidden = false;
      host.appendChild(picker);
      this.openCard = card;
      this.classList.add('rw--picking');
      void host.offsetWidth;
      host.classList.add('is-open');
      const checked = picker.querySelector('input[type="radio"]:checked');
      if (checked) checked.focus({ preventScroll: true });
    } else {
      const picker = card.querySelector('[data-rw-picker]');
      if (!picker) return;
      card.classList.add('is-picking');
      const addBtn = card.querySelector('[data-rw-add]');
      if (addBtn) addBtn.setAttribute('aria-expanded', 'true');
      picker.hidden = false;
      const checked = picker.querySelector('input[type="radio"]:checked');
      if (checked) checked.focus({ preventScroll: true });
      this.revealCard(card);
    }
  }

  closeCardPicker(card) {
    if (this.openCard === card) {
      this.dockSheet();
      return;
    }
    const picker = card.querySelector('[data-rw-picker]');
    if (picker) picker.hidden = true;
    card.classList.remove('is-picking');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'false');
  }

  closeSheet(returnFocus = false) {
    const card = this.openCard;
    this.dockSheet();
    if (returnFocus && card) {
      const addBtn = card.querySelector('[data-rw-add]');
      if (addBtn) addBtn.focus({ preventScroll: true });
    }
  }

  dockSheet() {
    if (!this.openCard || !this.sheetHost) return;
    const card = this.openCard;
    const picker = this.sheetHost.querySelector('[data-rw-picker]');
    if (picker) {
      picker.hidden = true;
      card.appendChild(picker);
    }
    card.classList.remove('is-picking');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'false');
    this.sheetHost.classList.remove('is-open');
    this.classList.remove('rw--picking');
    this.openCard = null;
  }

  // === 10.1 & 10.4 Confirm Single Add & Full Look Add ===
  async confirmCardAdd(card) {
    if (!card || card.classList.contains('is-added') || card.classList.contains('is-loading')) {
      return;
    }
    const picker =
      (this.openCard === card && this.sheetHost
        ? this.sheetHost.querySelector('[data-rw-picker]')
        : null) || card.querySelector('[data-rw-picker]');
    this.updateCardOption(card, false, picker);
    const variantId = Number(card.dataset.selected);
    const panel = card.closest('[data-rw-panel]');
    const msgEl = panel ? panel.querySelector('[data-rw-msg]') : null;
    if (msgEl) msgEl.textContent = '';

    if (!variantId) {
      if (msgEl) msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
      return;
    }

    card.classList.add('is-loading');
    try {
      await new Promise((r) => setTimeout(r, 260));
      await stylingBag.add([{ id: variantId, quantity: 1 }]);
      this.markCardAdded(card);
      if (panel) this.checkPanelComplete(panel);
    } catch {
      card.classList.remove('is-loading');
      if (msgEl) {
        msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
      }
    }
  }

  markCardAdded(card) {
    if (this.openCard === card) {
      this.dockSheet();
    } else {
      this.closeCardPicker(card);
    }
    card.classList.remove('is-loading', 'is-picking');
    card.classList.add('is-added');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) {
      addBtn.setAttribute('aria-label', addBtn.dataset.addedLabel || 'Added to bag');
      addBtn.removeAttribute('aria-expanded');
    }
    if (this.isMobile && !this.reducedMotion && navigator.vibrate) {
      try {
        navigator.vibrate(12);
      } catch {
        // ignore
      }
    }
  }

  checkPanelComplete(panel) {
    const cards = Array.from(panel.querySelectorAll('.rw__item[data-rw-card]'));
    if (cards.length >= 2 && cards.every((c) => c.classList.contains('is-added'))) {
      panel.classList.add('is-complete');
      const msgEl = panel.querySelector('[data-rw-msg]');
      if (msgEl) msgEl.textContent = '';
    }
  }

  async addFullLook(panel) {
    if (!panel || panel.classList.contains('is-complete')) return;
    const cta = panel.querySelector('[data-rw-all]');
    if (!cta || cta.classList.contains('is-loading')) return;

    const msgEl = panel.querySelector('[data-rw-msg]');
    if (msgEl) msgEl.textContent = '';

    const cards = Array.from(panel.querySelectorAll('.rw__item[data-rw-card]')).filter(
      (c) => !c.classList.contains('is-added')
    );

    const ready = [];
    const pending = [];

    for (const card of cards) {
      const directId = card.dataset.variantId;
      if (directId) {
        ready.push({ card, id: Number(directId) });
      } else if (card.dataset.touched === '1' && card.dataset.selected) {
        ready.push({ card, id: Number(card.dataset.selected) });
      } else {
        pending.push(card);
      }
    }

    if (ready.length > 0) {
      cta.classList.add('is-loading');
      ready.forEach((r) => r.card.classList.add('is-loading'));
      try {
        await new Promise((r) => setTimeout(r, 280));
        await stylingBag.add(ready.map((r) => ({ id: r.id, quantity: 1 })));
        ready.forEach((r) => this.markCardAdded(r.card));
      } catch {
        ready.forEach((r) => r.card.classList.remove('is-loading'));
        cta.classList.remove('is-loading');
        if (msgEl) {
          msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
        }
        return;
      }
      cta.classList.remove('is-loading');
    }

    if (pending.length > 0) {
      if (this.isMobile) {
        this.openCardPicker(pending[0]);
      } else {
        pending.forEach((c) => this.openCardPicker(c));
      }
      this.revealCard(pending[0]);
      const names = pending.map((c) => c.dataset.title || '').filter(Boolean).join(', ');
      const tpl = this.dataset.msgChoose || 'Pick a size for: [items]';
      if (msgEl) {
        msgEl.textContent = tpl.replace('[items]', names);
      }
    }

    this.checkPanelComplete(panel);
  }

  // === 9.1, 9.2, 9.3 Events & Interactions ===
  bindWindowAndObservers() {
    if (this.visObserver) this.visObserver.disconnect();
    this.visObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          this.visible = e.isIntersecting;
          if (this.visible) {
            this.kick();
            this.restartAutoBar();
          }
        }
      },
      { threshold: 0 }
    );
    this.visObserver.observe(this);

    if (!this.reducedMotion && !this.classList.contains('is-revealed')) {
      if (this.revealObserver) this.revealObserver.disconnect();
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              this.revealObserver.disconnect();
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  this.classList.add('is-revealed');
                });
              });
            }
          }
        },
        { threshold: 0, rootMargin: '0px 0px -22% 0px' }
      );
      this.revealObserver.observe(this);
    }

    if (this._onWinResize) window.removeEventListener('resize', this._onWinResize);
    this._onWinResize = () => {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.measure();
        this.kick();
      }, 120);
    };
    window.addEventListener('resize', this._onWinResize);

    if (this.stageResizeObserver) this.stageResizeObserver.disconnect();
    if (typeof ResizeObserver !== 'undefined' && this.stage) {
      let roRaf = null;
      this.stageResizeObserver = new ResizeObserver(() => {
        if (roRaf) cancelAnimationFrame(roRaf);
        roRaf = requestAnimationFrame(() => {
          roRaf = null;
          this.measure();
          this.kick();
        });
      });
      this.stageResizeObserver.observe(this.stage);
    }

    if (this._onDocVis) document.removeEventListener('visibilitychange', this._onDocVis);
    this._onDocVis = () => {
      if (!document.hidden) {
        this.kick();
        this.restartAutoBar();
      }
    };
    document.addEventListener('visibilitychange', this._onDocVis);
  }

  bindEvents() {
    this.bindWindowAndObservers();

    // 3. Panel hover & engagement
    if (this.panelEl) {
      this.panelEl.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') {
          this.panelHover = true;
        }
      });
      this.panelEl.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'mouse') {
          this.panelHover = false;
          this.restartAutoBar();
        }
      });
      this.panelEl.addEventListener('pointerover', (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('.rw__item[data-rw-card]');
        if (card) {
          this.hot(card.dataset.rwCard, false);
        }
      });
      this.panelEl.addEventListener('pointerout', (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('.rw__item[data-rw-card]');
        if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
          this.clearHot();
        }
      });
      this.panelEl.addEventListener('change', (e) => {
        this.engage();
        const card = e.target.closest('.rw__item[data-rw-card]');
        if (card) {
          this.updateCardOption(card, false);
        }
      });
    }

    // 4. Stage Pointer Drag / Swipe & Custom Cursor
    this.bindStagePointer();

    // 5. Trackpad Horizontal Wheel
    this.stage.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          if (this.wheelLocked) return;
          this.wheelAcc += e.deltaX;
          if (Math.abs(this.wheelAcc) > 45) {
            if (this.wheelAcc > 0) this.next();
            else this.prev();
            this.wheelAcc = 0;
            this.wheelLocked = true;
            setTimeout(() => {
              this.wheelLocked = false;
              this.wheelAcc = 0;
            }, 520);
          }
        }
      },
      { passive: false }
    );

    // 6. Keyboard
    this.stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      }
    });

    this.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.openCard && this.isMobile) {
          e.preventDefault();
          this.closeSheet(true);
        } else if (this.zoomed) {
          e.preventDefault();
          this.closePopup();
        }
      }
    });

    // 7. Capture-phase click suppression after drag
    this.addEventListener(
      'click',
      (e) => {
        if (performance.now() < this.suppressClickUntil) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      true
    );

    // 8. Delegated Click Router
    this.addEventListener('click', (e) => this.handleDelegatedClick(e));
  }

  bindStagePointer() {
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startT = 0;
    let abandoned = false;
    let samples = [];

    const updateCursorLoop = () => {
      this.cursorRaf = null;
      if (!this.cursorEl) return;
      const lerp = this.reducedMotion ? 1 : 0.18;
      this.cx += (this.ctx - this.cx) * lerp;
      this.cy += (this.cty - this.cy) * lerp;
      this.cursorEl.style.transform = `translate3d(${this.cx.toFixed(1)}px, ${this.cy.toFixed(1)}px, 0)`;
      if (Math.hypot(this.ctx - this.cx, this.cty - this.cy) >= 0.2) {
        this.cursorRaf = requestAnimationFrame(updateCursorLoop);
      }
    };

    this.stage.addEventListener('pointermove', (e) => {
      if (this.cursorEl && e.pointerType === 'mouse') {
        const rect = this.stage.getBoundingClientRect();
        this.ctx = e.clientX - rect.left;
        this.cty = e.clientY - rect.top;
        if (!this.cursorActive) {
          this.cursorActive = true;
          this.cx = this.ctx;
          this.cy = this.cty;
          this.cursorEl.classList.add('is-on');
        }
        if (!this.cursorRaf) {
          this.cursorRaf = requestAnimationFrame(updateCursorLoop);
        }

        if (!this.dragging) {
          const overZoom = Boolean(e.target.closest('.rw__hero.is-on [data-rw-zoom]'));
          const overLink = Boolean(e.target.closest('[data-rw-pin], .rw__model .rw__hit'));
          this.cursorEl.classList.toggle('is-view', overZoom && !overLink);
          this.cursorEl.classList.toggle('is-link', overLink);
        }
      }

      if (pointerId === null || e.pointerId !== pointerId || abandoned) return;
      if (e.pointerType === 'mouse' && e.buttons === 0) {
        finishDrag(e);
        return;
      }

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!this.dragging) {
        if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
          abandoned = true;
          pointerId = null;
          return;
        }
        if (Math.abs(dx) > 8 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
          this.dragging = true;
          this.classList.add('is-dragging');
          try {
            this.stage.setPointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        }
      }

      if (this.dragging) {
        const now = performance.now();
        samples.push({ x: e.clientX, time: now });
        if (samples.length > 6) samples.shift();
        this.target = startT - dx / (this.unit || 200);
        this.setStill(false);
        this.kick();
      }
    });

    this.stage.addEventListener('pointerleave', (e) => {
      if (this.cursorEl && e.pointerType === 'mouse') {
        this.cursorActive = false;
        this.cursorEl.classList.remove('is-on', 'is-link', 'is-view');
      }
    });

    this.stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startT = this.target;
      abandoned = false;
      samples = [{ x: e.clientX, time: performance.now() }];
    });

    const finishDrag = (e) => {
      if (pointerId === null || (e && e.pointerId !== pointerId)) return;
      const wasDragging = this.dragging;
      pointerId = null;
      this.dragging = false;
      this.classList.remove('is-dragging');

      if (!wasDragging) return;
      this.suppressClickUntil = performance.now() + 60;

      const dx = e.clientX - startX;
      const first = samples[0];
      const last = samples[samples.length - 1];
      const dt = Math.max(1, last.time - first.time);
      const vx = (last.x - first.x) / dt; // px/ms
      const sign = -1;
      const from = Math.round(startT);

      if (this.isMobile) {
        if (Math.abs(dx) > 30 || Math.abs(vx) > 0.3) {
          this.moveTo(from + sign * (dx > 0 ? 1 : -1));
        } else {
          this.moveTo(from);
        }
      } else {
        let i = Math.round(this.target + (sign * vx * 160) / (this.unit || 200));
        if (i === from && Math.abs(vx) > 0.3) {
          i = from + sign * (vx > 0 ? 1 : -1);
        }
        i = clamp(i, from - 2, from + 2);
        this.moveTo(i);
      }
    };

    this.stage.addEventListener('pointerup', finishDrag);
    this.stage.addEventListener('pointercancel', finishDrag);
  }

  handleDelegatedClick(e) {
    const t = e.target;

    // Engage check for panel click
    if (
      this.panelEl &&
      this.panelEl.contains(t) &&
      t.closest('button, a, input, select, label')
    ) {
      this.engage();
    }

    // 1. pick-close
    if (t.closest('[data-rw-pick-close]')) {
      e.preventDefault();
      this.closeSheet(true);
      return;
    }

    // 2. popup close button
    if (t.closest('[data-rw-zoom-close]')) {
      e.preventDefault();
      this.closePopup();
      return;
    }

    // 3. click on popup backdrop or popup stage (beside model)
    if (
      this.zoomed &&
      (t === this.lbEl || (t === this.lbStage && !t.closest('.rw__lb-model')))
    ) {
      e.preventDefault();
      this.closePopup();
      return;
    }

    // 4. [data-rw-zoom] opens popup
    if (t.closest('[data-rw-zoom]')) {
      e.preventDefault();
      this.openPopup();
      return;
    }

    // 5. next
    if (t.closest('[data-rw-next]')) {
      e.preventDefault();
      this.next();
      return;
    }

    // 6. prev
    if (t.closest('[data-rw-prev]')) {
      e.preventDefault();
      this.prev();
      return;
    }

    // 7. tick: go(i)
    const tickBtn = t.closest('[data-rw-tick]');
    if (tickBtn) {
      e.preventDefault();
      this.go(Number(tickBtn.dataset.rwTick));
      return;
    }

    // 8. autoplay toggle
    if (t.closest('[data-rw-auto]')) {
      e.preventDefault();
      if (!this.playing) this.engaged = false;
      this.play(!this.playing);
      return;
    }

    // 9. pin: engage, then hot(n, scroll=true)
    const pinBtn = t.closest('[data-rw-pin]');
    if (pinBtn) {
      e.preventDefault();
      this.engage();
      this.hot(pinBtn.dataset.rwPin, true);
      return;
    }

    // 10. queue body [data-rw-go]
    const goBtn = t.closest('[data-rw-go]');
    if (goBtn) {
      e.preventDefault();
      const bodyEl = goBtn.closest('[data-rw-model]');
      if (bodyEl) {
        const a = Number(bodyEl.dataset.index);
        const k = this.bodyRank(a);
        if (k !== 0 && Math.abs(k) < 6) {
          this.moveTo(Math.round(this.target) + k);
        } else if (k === 0) {
          this.openPopup();
        }
      }
      return;
    }

    // 11. size confirm
    const confirmBtn = t.closest('[data-rw-confirm]');
    if (confirmBtn) {
      e.preventDefault();
      const card = this.openCard || confirmBtn.closest('.rw__item[data-rw-card]');
      if (card) {
        card.dataset.touched = '1';
        this.confirmCardAdd(card);
      }
      return;
    }

    // 12. plus button
    const addBtn = t.closest('[data-rw-add]');
    if (addBtn) {
      e.preventDefault();
      const card = addBtn.closest('.rw__item[data-rw-card]');
      if (card) this.togglePicker(card);
      return;
    }

    // 13. "add full look"
    const allBtn = t.closest('[data-rw-all]');
    if (allBtn) {
      e.preventDefault();
      const panel = allBtn.closest('[data-rw-panel]');
      if (panel) this.addFullLook(panel);
      return;
    }
  }
}

if (typeof window !== 'undefined' && !customElements.get('runway-section')) {
  customElements.define('runway-section', RunwaySection);
}
