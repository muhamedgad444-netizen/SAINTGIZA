import { useEffect, useRef, useState } from 'react'
import '../runway.css'
import { initBagDialog, stylingBag } from '../runway-element'
import { fetchLooksFromDb, fetchProductsFromDb } from '../lib/supabase'

const ASSET_BASE = 'https://reel-ref-try-the-look.vercel.app/assets/'
const SECTION_ID = 'Runway-template--28035983671601__the_runway_wdM8BG'

const DEFAULT_PRODUCTS = {
  'tatum-5-orbit-copy': {
    id: 'tatum-5-orbit-copy',
    name: 'Air Jordan 12 Retro',
    vendor: 'Nikey | Password: 1',
    price: '$149.00',
    priceNumber: 149,
    legend: 'Shoe size',
    image: `${ASSET_BASE}source-tatum-5-orbit-copy.webp`,
    panelW: 400,
    panelH: 400,
    sheetW: 160,
    sheetH: 160,
    url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit-copy',
    options: ['40', '41', '42', '43', '44', '45', '46'],
    variants: [
      { id: 57015167025457, a: true, o: ['40'] },
      { id: 57015167058225, a: true, o: ['41'] },
      { id: 57015167090993, a: true, o: ['42'] },
      { id: 57015167123761, a: true, o: ['43'] },
      { id: 57015167156529, a: true, o: ['44'] },
      { id: 57015167189297, a: true, o: ['45'] },
      { id: 57015167222065, a: true, o: ['46'] },
    ],
  },
  tshirt: {
    id: 'tshirt',
    name: 'Tshirt',
    vendor: 'Nike',
    price: '$199.00',
    priceNumber: 199,
    legend: 'Size',
    image: `${ASSET_BASE}source-tshirt.webp`,
    panelW: 400,
    panelH: 563,
    sheetW: 160,
    sheetH: 225,
    url: 'https://nike-makknzjs.myshopify.com/products/tshirt',
    options: ['S', 'L', 'M', 'XL'],
    variants: [
      { id: 56835911582001, a: true, o: ['S'] },
      { id: 56835911614769, a: true, o: ['L'] },
      { id: 56835911647537, a: true, o: ['M'] },
      { id: 56835911680305, a: true, o: ['XL'] },
    ],
  },
  sweatshirt: {
    id: 'sweatshirt',
    name: 'Sweatshirt',
    vendor: 'Nike',
    price: '$199.00',
    priceNumber: 199,
    legend: 'Size',
    image: `${ASSET_BASE}source-sweatshirt.webp`,
    panelW: 400,
    panelH: 581,
    sheetW: 160,
    sheetH: 232,
    url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt',
    options: ['S', 'L', 'M', 'XL'],
    variants: [
      { id: 56835806396721, a: true, o: ['S'] },
      { id: 56835806429489, a: true, o: ['L'] },
      { id: 56835806462257, a: true, o: ['M'] },
      { id: 56835806495025, a: true, o: ['XL'] },
    ],
  },
  'tatum-5-orbit': {
    id: 'tatum-5-orbit',
    name: 'Tatum 5 Orbit',
    vendor: 'Nikey | Password: 1',
    price: '$149.00',
    priceNumber: 149,
    legend: 'Shoe size',
    image: `${ASSET_BASE}source-tatum-5-orbit.webp`,
    panelW: 400,
    panelH: 400,
    sheetW: 160,
    sheetH: 160,
    url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit',
    options: ['40', '41', '42', '43', '44', '45', '46'],
    variants: [
      { id: 57015166730545, a: true, o: ['40'] },
      { id: 57015166763313, a: true, o: ['41'] },
      { id: 57015166796081, a: true, o: ['42'] },
      { id: 57015166828849, a: true, o: ['43'] },
      { id: 57015166861617, a: true, o: ['44'] },
      { id: 57015166894385, a: true, o: ['45'] },
      { id: 57015166927153, a: true, o: ['46'] },
    ],
  },
  'hoodie-black': {
    id: 'hoodie-black',
    name: 'Hoodie Black',
    vendor: 'Nike',
    price: '$199.00',
    priceNumber: 199,
    legend: 'Size',
    image: `${ASSET_BASE}source-hoodie-black.webp`,
    panelW: 400,
    panelH: 536,
    sheetW: 160,
    sheetH: 214,
    url: 'https://nike-makknzjs.myshopify.com/products/hoodie-black',
    options: ['S', 'L', 'M', 'XL'],
    variants: [
      { id: 56836251681073, a: true, o: ['S'] },
      { id: 56836251713841, a: true, o: ['L'] },
      { id: 56836251746609, a: true, o: ['M'] },
      { id: 56836251779377, a: true, o: ['XL'] },
    ],
  },
  'sweatshirt-plus': {
    id: 'sweatshirt-plus',
    name: 'Sweatshirt Plus',
    vendor: 'Nike',
    price: '$199.00',
    priceNumber: 199,
    legend: 'Size',
    image: `${ASSET_BASE}source-sweatshirt-plus.webp`,
    panelW: 400,
    panelH: 610,
    sheetW: 160,
    sheetH: 244,
    url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus',
    options: ['S', 'L', 'M', 'XL'],
    variants: [
      { id: 56836143743281, a: true, o: ['S'] },
      { id: 56836143776049, a: true, o: ['L'] },
      { id: 56836143808817, a: true, o: ['M'] },
      { id: 56836143841585, a: true, o: ['XL'] },
    ],
  },
  hoodie: {
    id: 'hoodie',
    name: 'Hoodie',
    vendor: 'Nike',
    price: '$199.00',
    priceNumber: 199,
    legend: 'Size',
    image: `${ASSET_BASE}source-hoodie.webp`,
    panelW: 400,
    panelH: 555,
    sheetW: 160,
    sheetH: 222,
    url: 'https://nike-makknzjs.myshopify.com/products/hoodie',
    options: ['S', 'L', 'M', 'XL'],
    variants: [
      { id: 56836002185521, a: true, o: ['S'] },
      { id: 56836002218289, a: true, o: ['L'] },
      { id: 56836002251057, a: true, o: ['M'] },
      { id: 56836002283825, a: true, o: ['XL'] },
    ],
  },
  'air-jordan-12-retro-copy': {
    id: 'air-jordan-12-retro-copy',
    name: 'Luka 5',
    vendor: 'Nikey | Password: 1',
    price: '$149.00',
    priceNumber: 149,
    legend: 'Shoe size',
    image: `${ASSET_BASE}source-air-jordan-12-retro-copy.webp`,
    panelW: 400,
    panelH: 400,
    sheetW: 160,
    sheetH: 160,
    url: 'https://nike-makknzjs.myshopify.com/products/air-jordan-12-retro-copy',
    options: ['40', '41', '42', '43', '44', '45', '46'],
    variants: [
      { id: 57015176364337, a: true, o: ['40'] },
      { id: 57015176397105, a: true, o: ['41'] },
      { id: 57015176429873, a: true, o: ['42'] },
      { id: 57015176462641, a: true, o: ['43'] },
      { id: 57015176495409, a: true, o: ['44'] },
      { id: 57015176528177, a: true, o: ['45'] },
      { id: 57015176560945, a: true, o: ['46'] },
    ],
  },
}

const DEFAULT_LOOKS = [
  {
    index: 0,
    num: '01',
    key: 'bndthK',
    name: 'The City Edit',
    src640: `${ASSET_BASE}model-1-640.webp`,
    src1080: `${ASSET_BASE}original-look-1.webp`,
    pins: [
      { n: 1, tip: 'Air Jordan 12 Retro', left: '47%', top: '27%' },
      { n: 2, tip: 'Tshirt', left: '48%', top: '58%' },
      { n: 3, tip: 'Sweatshirt', left: '45%', top: '96%' },
    ],
    pieces: [
      { id: 'tatum-5-orbit-copy', tag: null },
      { id: 'tshirt', tag: null },
      { id: 'sweatshirt', tag: null },
    ],
  },
  {
    index: 1,
    num: '02',
    key: 'XckgG6',
    name: 'Gallery Opening',
    src640: `${ASSET_BASE}model-5-640.webp`,
    src1080: `${ASSET_BASE}original-look-5.webp`,
    pins: [
      { n: 1, tip: 'Tatum 5 Orbit', left: '50%', top: '28%' },
      { n: 2, tip: 'Hoodie Black', left: '48%', top: '58%' },
      { n: 3, tip: 'Tshirt', left: '45%', top: '88%' },
    ],
    pieces: [
      { id: 'tatum-5-orbit', tag: null },
      { id: 'hoodie-black', tag: 'New' },
      { id: 'tshirt', tag: null },
    ],
  },
  {
    index: 2,
    num: '03',
    key: 'rLfAhC',
    name: 'Gallery Opening',
    src640: `${ASSET_BASE}model-4-640.webp`,
    src1080: `${ASSET_BASE}original-look-4.webp`,
    pins: [
      { n: 1, tip: 'Sweatshirt Plus', left: '50%', top: '28%' },
      { n: 2, tip: 'Tatum 5 Orbit', left: '48%', top: '58%' },
      { n: 3, tip: 'Tshirt', left: '45%', top: '88%' },
    ],
    pieces: [
      { id: 'sweatshirt-plus', tag: null },
      { id: 'tatum-5-orbit', tag: 'New' },
      { id: 'tshirt', tag: null },
    ],
  },
  {
    index: 3,
    num: '04',
    key: 'FKg67q',
    name: 'Studio Day',
    src640: `${ASSET_BASE}model-6-640.webp`,
    src1080: `${ASSET_BASE}original-look-6.webp`,
    pins: [
      { n: 1, tip: 'Hoodie Black', left: '50%', top: '28%' },
      { n: 2, tip: 'Air Jordan 12 Retro', left: '48%', top: '58%' },
      { n: 3, tip: 'Tshirt', left: '45%', top: '88%' },
    ],
    pieces: [
      { id: 'hoodie-black', tag: null },
      { id: 'tatum-5-orbit-copy', tag: null },
      { id: 'tshirt', tag: null },
    ],
  },
  {
    index: 4,
    num: '05',
    key: '8KREEE',
    name: 'Studio Day',
    src640: `${ASSET_BASE}model-3-640.webp`,
    src1080: `${ASSET_BASE}original-look-3.webp`,
    pins: [
      { n: 1, tip: 'Sweatshirt', left: '50%', top: '28%' },
      { n: 2, tip: 'Tatum 5 Orbit', left: '48%', top: '58%' },
      { n: 3, tip: 'Tshirt', left: '45%', top: '88%' },
    ],
    pieces: [
      { id: 'sweatshirt', tag: null },
      { id: 'tatum-5-orbit', tag: null },
      { id: 'tshirt', tag: null },
    ],
  },
  {
    index: 5,
    num: '06',
    key: 'N3bfm9',
    name: 'Studio Day',
    src640: `${ASSET_BASE}model-2-640.webp`,
    src1080: `${ASSET_BASE}original-look-2.webp`,
    pins: [
      { n: 1, tip: 'Hoodie', left: '50%', top: '28%' },
      { n: 2, tip: 'Luka 5', left: '48%', top: '58%' },
      { n: 3, tip: 'Tshirt', left: '45%', top: '88%' },
    ],
    pieces: [
      { id: 'hoodie', tag: null },
      { id: 'air-jordan-12-retro-copy', tag: null },
      { id: 'tshirt', tag: null },
    ],
  },
]

const INLINE_TOKENS =
  '--rw-hf:var(--font-heading--family, inherit);--rw-hw:400;--rw-h-d:46px;--rw-h-m:24px;--rw-sub-d:12px;--rw-sub-m:12px;--rw-eyebrow-d:11px;--rw-eyebrow-m:10px;--rw-label-d:10px;--rw-label-m:9px;--rw-chip-d:17px;--rw-chip-m:18px;--rw-ph-d:18px;--rw-ph-m:16px;--rw-pt-size-d:13px;--rw-pt-size-m:12px;--rw-price-d:12px;--rw-price-m:12px;--rw-opt-d:11px;--rw-opt-m:11px;--rw-total-d:16px;--rw-total-m:16px;--rw-thumb-d:82px;--rw-thumb-m:62px;--rw-tag-top:18px;--rw-tag-left:0px;--rw-thumb-radius:0px;--rw-morph:900ms;--rw-bar-r:20px;--rw-panel-w:336px;--rw-panel-pad-d:28px;--rw-radius:0px;--rw-max:none;--rw-speed:5s;--rw-ax:40%;--rw-btn-radius:0px;--rw-pill-radius:30px;--rw-add-radius:20px;'

function mergeSupabaseIntoRunway(dbLooks, dbProducts) {
  const productsMap = { ...DEFAULT_PRODUCTS }

  if (Array.isArray(dbProducts)) {
    dbProducts.forEach((dbProd) => {
      const base = productsMap[dbProd.id]
      const numericPrice = Number(dbProd.price) || (base ? base.priceNumber : 199)
      const options =
        Array.isArray(dbProd.sizes) && dbProd.sizes.length > 0
          ? dbProd.sizes
          : base?.options || ['S', 'M', 'L', 'XL']

      productsMap[dbProd.id] = {
        ...(base || {
          panelW: 400,
          panelH: 500,
          sheetW: 160,
          sheetH: 200,
          legend: dbProd.category === 'Footwear' ? 'Shoe size' : 'Size',
          variants: options.map((opt, idx) => ({
            id: 900000000000 + idx,
            a: true,
            o: [opt],
          })),
        }),
        id: dbProd.id,
        name: dbProd.name || base?.name,
        vendor: dbProd.subtitle || base?.vendor || 'SAINTGIZA',
        price: `$${numericPrice.toFixed(2)}`,
        priceNumber: numericPrice,
        image: dbProd.image || base?.image,
        url: dbProd.externalUrl || base?.url || `/product/${dbProd.id}`,
        options,
      }
    })
  }

  const looksList = DEFAULT_LOOKS.map((defLook, idx) => {
    const dbLook = Array.isArray(dbLooks)
      ? dbLooks.find((l) => l.position === idx + 1) || dbLooks[idx]
      : null
    if (!dbLook) return defLook

    const pieceIds =
      Array.isArray(dbLook.productIds) && dbLook.productIds.length > 0
        ? dbLook.productIds.filter((pid) => Boolean(productsMap[pid]))
        : defLook.pieces.map((p) => p.id)

    const pieces = pieceIds.map((pid, pIdx) => ({
      id: pid,
      tag: defLook.pieces[pIdx]?.tag || null,
    }))

    const pins = defLook.pins.map((pin, pIdx) => {
      const pieceId = pieces[pIdx]?.id
      const prod = pieceId ? productsMap[pieceId] : null
      return {
        ...pin,
        tip: prod ? prod.name : pin.tip,
      }
    })

    return {
      ...defLook,
      name: dbLook.name || defLook.name,
      src640: dbLook.image || defLook.src640,
      pieces,
      pins,
    }
  })

  return { looks: looksList, products: productsMap }
}

function buildRunwayHTML(looks = DEFAULT_LOOKS, products = DEFAULT_PRODUCTS) {
  const modelsHTML = looks
    .map(
      (look, i) => `
      <div class="rw__model" data-rw-model data-index="${i}" aria-hidden="true">
        <span class="rw__shadow"></span>
        <div class="rw__figure" style="--rw-ar: 0.5625">
          <div class="rw__art">
            <img
              src="${look.src640}"
              srcset="${look.src640} 640w, ${look.src1080} 1080w"
              sizes="(min-width: 1800px) 620px, (min-width: 750px) 480px, 340px"
              loading="eager"
              decoding="async"
              width="1100"
              height="1956"
              draggable="false"
              data-model-image
              alt="${look.name}"
            />
            <button
              type="button"
              class="rw__hit"
              data-rw-go="${i}"
              aria-label="Look ${i + 1}: ${look.name}"
              tabindex="-1"
            ></button>
          </div>
        </div>
      </div>`
    )
    .join('')

  const heroesHTML = looks
    .map((look, i) => {
      const pinsHTML = look.pins
        .map(
          (p) => `
          <button
            type="button"
            class="rw__pin"
            data-rw-pin="${p.n}"
            data-tip="${p.tip}"
            style="left:${p.left}; top:${p.top}; --pi:${p.n}"
            aria-label="${p.n}: ${p.tip}"
            tabindex="-1"
          >
            <span class="rw__pin-dot">${p.n}</span>
          </button>`
        )
        .join('')

      return `
      <div
        class="rw__hero${i === 0 ? ' is-on' : ''}"
        data-rw-hero
        data-index="${i}"
        data-name="${look.name}"
        data-label="Look ${i + 1}: ${look.name}"
        data-probe="${look.src640}"
        aria-hidden="${i === 0 ? 'false' : 'true'}"
      >
        <div class="rw__morph">
          <span class="rw__shadow"></span>
          <div class="rw__figure" style="--rw-ar: 0.5625">
            <div class="rw__art">
              <img
                src="${look.src640}"
                srcset="${look.src640} 640w, ${look.src1080} 1080w"
                sizes="(min-width: 1800px) 620px, (min-width: 750px) 480px, 340px"
                loading="eager"
                decoding="async"
                width="1100"
                height="1956"
                draggable="false"
                data-model-image
                alt="${look.name}"
              />
              <button
                type="button"
                class="rw__zoom"
                data-rw-zoom
                aria-label="View look: ${look.name}"
                tabindex="${i === 0 ? '0' : '-1'}"
              ></button>
              <div class="rw__pins">${pinsHTML}</div>
            </div>
          </div>
        </div>
      </div>`
    })
    .join('')

  const ticksHTML = looks
    .map(
      (look, i) => `
      <button
        type="button"
        class="rw__tick"
        data-rw-tick="${i}"
        aria-current="${i === 0 ? 'true' : 'false'}"
        aria-label="Look ${i + 1}: ${look.name}"
      >
        <span class="rw__tick-bar"></span>
        <span class="rw__tick-label">${look.num}<span class="rw__tick-name">&nbsp;&nbsp;${look.name}</span></span>
      </button>`
    )
    .join('')

  const panelsHTML = looks
    .map((look, i) => {
      let rawSum = 0
      const itemsHTML = look.pieces
        .map((piece, idx) => {
          const n = idx + 1
          const prod = products[piece.id] || DEFAULT_PRODUCTS[piece.id]
          rawSum += prod.priceNumber || 0
          const pickerId = `Picker-${SECTION_ID}-look_${look.key}-${n}`
          const radioName = `Opt-${SECTION_ID}-look_${look.key}-${n}-1`
          const pillsHTML = prod.options
            .map(
              (opt, oIdx) => `
              <label class="rw__pill">
                <input
                  type="radio"
                  name="${radioName}"
                  value="${opt}"
                  data-rw-option="0"
                  ${oIdx === 0 ? 'checked' : ''}
                />
                <span class="rw__pill-label">${opt}</span>
              </label>`
            )
            .join('')

          return `
          <li class="rw__item" data-rw-card="${n}" style="--i:${n}" data-title="${prod.name}">
            ${piece.tag ? `<span class="rw__tag"><span class="rw__tag-text">${piece.tag}</span></span>` : ''}
            <a
              class="rw__media"
              href="/product/${prod.id}"
              tabindex="-1"
              aria-hidden="true"
            >
              <img
                src="${prod.image}"
                loading="lazy"
                decoding="async"
                alt=""
                width="${prod.panelW}"
                height="${prod.panelH}"
              />
              <span class="rw__num">${n}</span>
            </a>
            <div class="rw__info">
              <span class="rw__type">${prod.vendor}</span>
              <a
                class="rw__name"
                href="/product/${prod.id}"
              >${prod.name}</a>
              <span class="rw__price"><span>${prod.price}</span></span>
            </div>
            <button
              type="button"
              class="rw__add"
              data-rw-add
              aria-expanded="false"
              aria-controls="${pickerId}"
              aria-label="Add to bag: ${prod.name}"
              data-added-label="Added to bag: ${prod.name}"
            >
              <svg class="rw__add-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round">
                <path d="M12 4v16M4 12h16" />
              </svg>
              <svg class="rw__add-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 12.5l5 5L19.5 7" />
              </svg>
              <svg class="rw__add-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M12 3a9 9 0 1 1-9 9" />
              </svg>
            </button>
            <div class="rw__picker" id="${pickerId}" data-rw-picker hidden>
              <div class="rw__picker-head">
                <div class="rw__picker-thumb">
                  <img
                    src="${prod.image}"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="${prod.sheetW}"
                    height="${prod.sheetH}"
                  />
                </div>
                <div class="rw__picker-meta">
                  <span class="rw__picker-title">${prod.name}</span>
                  <span class="rw__picker-price">${prod.price}</span>
                </div>
                <button type="button" class="rw__picker-close" data-rw-pick-close aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </button>
              </div>
              <fieldset class="rw__opt">
                <legend class="rw__opt-name">${prod.legend}</legend>
                <div class="rw__opt-values">${pillsHTML}</div>
              </fieldset>
              <button type="button" class="rw__confirm" data-rw-confirm>
                <span data-rw-confirm-label data-add="Add to bag">Add to bag</span>
                <span class="rw__sr"> — ${prod.name}</span>
              </button>
              <script type="application/json" data-rw-variants>${JSON.stringify(prod.variants)}</script>
            </div>
          </li>`
        })
        .join('')

      const origPrice = rawSum > 0 ? `$${rawSum.toFixed(2)}` : '$547.00'
      const bundlePrice = rawSum > 0 ? `$${(rawSum * 0.9).toFixed(2)}` : '$492.30'
      const pieceCountLabel = `${look.pieces.length} pieces`

      return `
      <div
        class="rw__look-panel${i === 0 ? ' is-in' : ''}"
        data-rw-panel="${i}"
        ${i === 0 ? '' : 'hidden'}
      >
        <div class="rw__mhead">
          <span class="rw__mhead-title">${look.name}</span>
          <span class="rw__label">${pieceCountLabel}</span>
        </div>
        <ul class="rw__items" role="list">${itemsHTML}</ul>
        <div class="rw__bundle has-rule">
          <p class="rw__msg" data-rw-msg role="status" aria-live="polite"></p>
          <div class="rw__bundle-row">
            <div class="rw__bundle-copy">
              <span class="rw__bundle-title">Complete the look</span>
              <span class="rw__bundle-note">Bundle all ${look.pieces.length} and save 10%</span>
            </div>
            <div class="rw__bundle-price">
              <s>${origPrice}</s>
              <strong>${bundlePrice}</strong>
            </div>
          </div>
          <button type="button" class="rw__cta" data-rw-all>
            <span class="rw__cta-add">Add full look to bag</span>
            <span class="rw__cta-m">Add full look — ${bundlePrice}</span>
            <span class="rw__cta-done">Full look in your bag</span>
            <svg class="rw__cta-arrow" width="22" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 7h24M19 1l6 6-6 6" />
            </svg>
            <svg class="rw__cta-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M12 3a9 9 0 1 1-9 9" />
            </svg>
          </button>
        </div>
        <template data-rw-pieces-text>${pieceCountLabel}</template>
      </div>`
    })
    .join('')

  return `
    <runway-section
      id="${SECTION_ID}"
      class="rw rw--add-icon rw--popup rw--list has-dividers has-border"
      data-feel="balanced"
      data-blur="true"
      data-mblur="true"
      data-style="ring"
      data-mstyle="classic"
      data-fit="true"
      data-height-mode="original"
      data-height-vh="100"
      data-mheight-mode="custom"
      data-mheight-vh="109"
      data-reflect="false"
      data-autoplay="true"
      data-speed="5000"
      data-after-add="stay"
      data-bundle-code=""
      data-msg-choose="Pick a size for: [items]"
      data-msg-error="Couldn’t add to bag. Please try again."
      data-msg-soldout="Sold out"
      style="${INLINE_TOKENS}"
    >
      <div class="rw__sticky">
        <div class="rw__grid">
          <div class="rw__left">
            <div class="rw__head">
              <div class="rw__intro">
                <h2 class="rw__title">Try the Look.</h2>
                <p class="rw__sub">Six looks, styled head to toe. Tap a pin to see the piece.</p>
              </div>
              <button type="button" id="open-bag" class="rw__bag-trigger" aria-label="Open styling bag">
                <svg width="22" height="24" viewBox="0 0 24 26" fill="none" stroke="currentColor" stroke-width="1.3">
                  <path d="M4 8h16l1 16H3L4 8zM8 8V6a4 4 0 0 1 8 0v2" />
                </svg>
                <span data-cart-count>0</span>
              </button>
              <span class="rw__sr" aria-live="polite" aria-atomic="true" data-rw-live></span>
            </div>

            <div
              class="rw__stage"
              data-rw-stage
              tabindex="0"
              role="region"
              aria-roledescription="carousel"
              aria-label="Try the Look. — use arrow keys or swipe to change look"
            >
              <div class="rw__actors" data-rw-actors>${modelsHTML}</div>
              <div class="rw__heroes" data-rw-heroes>${heroesHTML}</div>
              <span class="rw__sweep"></span>
              <span class="rw__cursor" data-rw-cursor>
                <span class="rw__cursor-in">
                  <span class="rw__cursor-label rw__cursor-drag">Drag</span>
                  <span class="rw__cursor-label rw__cursor-view">View</span>
                </span>
              </span>
              <span class="rw__walk"><span class="rw__walk-line"></span></span>
            </div>

            <div class="rw__controls">
              <button type="button" class="rw__icon" data-rw-prev aria-label="Previous look">
                <svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M25 7H1M7 1L1 7l6 6" />
                </svg>
              </button>
              <div class="rw__ticks">${ticksHTML}</div>
              <button type="button" class="rw__icon rw__auto" data-rw-auto aria-pressed="false" aria-label="Autoplay">
                <svg class="rw__auto-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4.5v15l12.5-7.5z" />
                </svg>
                <svg class="rw__auto-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 4.5h3.5v15H6.5zM14 4.5h3.5v15H14z" />
                </svg>
              </button>
              <button type="button" class="rw__icon" data-rw-next aria-label="Next look">
                <svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 7h24M19 1l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div class="rw__lb" data-rw-lb data-word="Look" role="region" aria-label="View look" aria-hidden="true">
              <div class="rw__lb-stage" data-rw-lb-stage></div>
              <div class="rw__lb-top">
                <p class="rw__lb-cap">
                  <span class="rw__lb-kicker" data-rw-lb-kicker></span>
                  <span class="rw__lb-name" data-rw-lb-name></span>
                </p>
                <button type="button" class="rw__lb-close" data-rw-zoom-close aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </button>
              </div>
              <p class="rw__lb-hint">Tap a dot to shop the piece</p>
            </div>
          </div>

          <div class="rw__panel has-rule">
            <div class="rw__panel-inner">
              <div class="rw__panel-head">
                <h3 class="rw__panel-title">In this look</h3>
                <span class="rw__label" data-rw-pieces>3 pieces</span>
              </div>
              ${panelsHTML}
            </div>
          </div>
        </div>
      </div>
    </runway-section>

    <dialog id="bag-dialog">
      <div class="bag-heading">
        <h2>Your styling bag</h2>
        <button type="button" id="close-bag" aria-label="Close styling bag">×</button>
      </div>
      <p class="bag-note">
        A local outfit shortlist. No payment or order is collected here. Open a piece on the original demo to continue.
      </p>
      <div id="bag-items"></div>
      <p id="bag-total"></p>
      <div class="bag-actions">
        <button type="button" id="export-bag">Download outfit shortlist</button>
        <a href="/checkout" id="checkout-bag">Proceed to Checkout →</a>
      </div>
    </dialog>

    <div id="bag-status" role="status" aria-live="polite"></div>
  `
}

const INITIAL_MARKUP = buildRunwayHTML(DEFAULT_LOOKS, DEFAULT_PRODUCTS)

export default function RunwaySectionComponent() {
  const containerRef = useRef(null)
  const [markup, setMarkup] = useState(INITIAL_MARKUP)
  const [dataRevision, setDataRevision] = useState(0)

  useEffect(() => {
    let alive = true
    Promise.all([fetchLooksFromDb(), fetchProductsFromDb()])
      .then(([dbLooks, dbProducts]) => {
        if (!alive) return
        if ((dbLooks && dbLooks.length > 0) || (dbProducts && dbProducts.length > 0)) {
          const merged = mergeSupabaseIntoRunway(dbLooks, dbProducts)
          stylingBag.registerProducts(merged.products)
          setMarkup(buildRunwayHTML(merged.looks, merged.products))
          setDataRevision((r) => r + 1)
        }
      })
      .catch(() => {
        // Fallback looks & products remain active
      })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    initBagDialog()
  }, [dataRevision])

  return (
    <div
      key={dataRevision}
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
