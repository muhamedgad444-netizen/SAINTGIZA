import { useEffect, useRef, useState } from 'react'
import '../runway.css'
import { initBagDialog, stylingBag } from '../runway-element'
import { fetchLooksFromDb, fetchProductsFromDb } from '../lib/supabase'

const ASSET_BASE = 'https://reel-ref-try-the-look.vercel.app/assets/'
const SECTION_ID = 'Runway-template--28035983671601__the_runway_wdM8BG'

function createVariants(baseId, options) {
  return options.map((opt, i) => ({
    id: baseId + i,
    a: true,
    o: [opt],
  }))
}

const DEFAULT_PRODUCTS = {
  'sg-charcoal-knit': {
    id: 'sg-charcoal-knit',
    name: 'Charcoal Ribbed Knit',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$210.00',
    priceNumber: 210,
    legend: 'Size',
    image: '/showroom/m1-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-charcoal-knit',
    options: ['S', 'M', 'L', 'XL'],
    variants: createVariants(10100, ['S', 'M', 'L', 'XL']),
  },
  'sg-classic-denim': {
    id: 'sg-classic-denim',
    name: 'Relaxed Wide Denim',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$195.00',
    priceNumber: 195,
    legend: 'Waist',
    image: '/showroom/m1-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-classic-denim',
    options: ['30', '32', '34', '36'],
    variants: createVariants(10200, ['30', '32', '34', '36']),
  },
  'sg-retro-runner-grey': {
    id: 'sg-retro-runner-grey',
    name: 'Minimal Runner — Cement',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$185.00',
    priceNumber: 185,
    legend: 'Shoe size',
    image: '/showroom/m1-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-retro-runner-grey',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(10300, ['40', '41', '42', '43', '44', '45']),
  },

  'sg-oversized-tee-white': {
    id: 'sg-oversized-tee-white',
    name: 'Heavyweight Minimal Tee',
    vendor: 'SAINTGIZA ESSENTIALS',
    price: '$95.00',
    priceNumber: 95,
    legend: 'Size',
    image: '/showroom/m5-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-oversized-tee-white',
    options: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: createVariants(20100, ['S', 'M', 'L', 'XL', 'XXL']),
  },
  'sg-relaxed-faded-denim': {
    id: 'sg-relaxed-faded-denim',
    name: 'Vintage Fade Denim',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$210.00',
    priceNumber: 210,
    legend: 'Waist',
    image: '/showroom/m5-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-relaxed-faded-denim',
    options: ['30', '32', '34', '36'],
    variants: createVariants(20200, ['30', '32', '34', '36']),
  },
  'sg-court-sneaker-bone': {
    id: 'sg-court-sneaker-bone',
    name: 'Toe-Cap Court Sneaker',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$165.00',
    priceNumber: 165,
    legend: 'Shoe size',
    image: '/showroom/m5-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-court-sneaker-bone',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(20300, ['40', '41', '42', '43', '44', '45']),
  },

  'sg-olive-raglan-knit': {
    id: 'sg-olive-raglan-knit',
    name: 'Olive Raglan Heavy Knit',
    vendor: 'SAINTGIZA ARCHIVE',
    price: '$225.00',
    priceNumber: 225,
    legend: 'Size',
    image: '/showroom/m4-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-olive-raglan-knit',
    options: ['S', 'M', 'L', 'XL'],
    variants: createVariants(30100, ['S', 'M', 'L', 'XL']),
  },
  'sg-corduroy-trousers': {
    id: 'sg-corduroy-trousers',
    name: 'Pleated Corduroy Trouser',
    vendor: 'SAINTGIZA ARCHIVE',
    price: '$195.00',
    priceNumber: 195,
    legend: 'Waist',
    image: '/showroom/m4-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-corduroy-trousers',
    options: ['30', '32', '34', '36'],
    variants: createVariants(30200, ['30', '32', '34', '36']),
  },
  'sg-field-trail-boot': {
    id: 'sg-field-trail-boot',
    name: 'Field Low Trail Boot',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$240.00',
    priceNumber: 240,
    legend: 'Shoe size',
    image: '/showroom/m4-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-field-trail-boot',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(30300, ['40', '41', '42', '43', '44', '45']),
  },

  'sg-boxy-black-tee': {
    id: 'sg-boxy-black-tee',
    name: 'Boxy Heavyweight Tee',
    vendor: 'SAINTGIZA ESSENTIALS',
    price: '$95.00',
    priceNumber: 95,
    legend: 'Size',
    image: '/showroom/m6-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-boxy-black-tee',
    options: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: createVariants(40100, ['S', 'M', 'L', 'XL', 'XXL']),
  },
  'sg-light-wash-denim': {
    id: 'sg-light-wash-denim',
    name: 'Light Wash Baggy Denim',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$195.00',
    priceNumber: 195,
    legend: 'Waist',
    image: '/showroom/m6-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-light-wash-denim',
    options: ['30', '32', '34', '36'],
    variants: createVariants(40200, ['30', '32', '34', '36']),
  },
  'sg-court-white': {
    id: 'sg-court-white',
    name: 'Court Low — Triple White',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$165.00',
    priceNumber: 165,
    legend: 'Shoe size',
    image: '/showroom/m6-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-court-white',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(40300, ['40', '41', '42', '43', '44', '45']),
  },

  'sg-burgundy-ribbed-knit': {
    id: 'sg-burgundy-ribbed-knit',
    name: 'Burgundy Heavy Ribbed Knit',
    vendor: 'SAINTGIZA ARCHIVE',
    price: '$225.00',
    priceNumber: 225,
    legend: 'Size',
    image: '/showroom/m3-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-burgundy-ribbed-knit',
    options: ['S', 'M', 'L', 'XL'],
    variants: createVariants(50100, ['S', 'M', 'L', 'XL']),
  },
  'sg-charcoal-denim': {
    id: 'sg-charcoal-denim',
    name: 'Washed Charcoal Denim',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$205.00',
    priceNumber: 205,
    legend: 'Waist',
    image: '/showroom/m3-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-charcoal-denim',
    options: ['30', '32', '34', '36'],
    variants: createVariants(50200, ['30', '32', '34', '36']),
  },
  'sg-derby-black': {
    id: 'sg-derby-black',
    name: 'Minimal Leather Derby',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$260.00',
    priceNumber: 260,
    legend: 'Shoe size',
    image: '/showroom/m3-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-derby-black',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(50300, ['40', '41', '42', '43', '44', '45']),
  },

  'sg-grey-crewneck': {
    id: 'sg-grey-crewneck',
    name: 'French Terry Crewneck',
    vendor: 'SAINTGIZA ESSENTIALS',
    price: '$175.00',
    priceNumber: 175,
    legend: 'Size',
    image: '/showroom/m2-top.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-grey-crewneck',
    options: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: createVariants(60100, ['S', 'M', 'L', 'XL', 'XXL']),
  },
  'sg-vintage-denim': {
    id: 'sg-vintage-denim',
    name: 'Relaxed Vintage Denim',
    vendor: 'SAINTGIZA RUNWAY',
    price: '$195.00',
    priceNumber: 195,
    legend: 'Waist',
    image: '/showroom/m2-pants.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-vintage-denim',
    options: ['30', '32', '34', '36'],
    variants: createVariants(60200, ['30', '32', '34', '36']),
  },
  'sg-court-sneaker-black': {
    id: 'sg-court-sneaker-black',
    name: 'Retro Court Sneaker',
    vendor: 'SAINTGIZA FOOTWEAR',
    price: '$165.00',
    priceNumber: 165,
    legend: 'Shoe size',
    image: '/showroom/m2-shoes.webp',
    panelW: 400,
    panelH: 500,
    sheetW: 160,
    sheetH: 200,
    url: '/product/sg-court-sneaker-black',
    options: ['40', '41', '42', '43', '44', '45'],
    variants: createVariants(60300, ['40', '41', '42', '43', '44', '45']),
  },
}

const DEFAULT_LOOKS = [
  {
    index: 0,
    num: '01',
    key: 'bndthK',
    name: 'The City Edit',
    src640: '/models/model-1-640.webp',
    src1080: '/models/model-1-640.webp',
    pins: [
      { n: 1, tip: 'Charcoal Ribbed Knit', left: '48%', top: '28%' },
      { n: 2, tip: 'Relaxed Wide Denim', left: '48%', top: '62%' },
      { n: 3, tip: 'Minimal Runner — Cement', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-charcoal-knit', tag: 'Knitwear' },
      { id: 'sg-classic-denim', tag: null },
      { id: 'sg-retro-runner-grey', tag: 'Footwear' },
    ],
  },
  {
    index: 1,
    num: '02',
    key: 'XckgG6',
    name: 'Gallery Opening',
    src640: '/models/model-5-640.webp',
    src1080: '/models/model-5-640.webp',
    pins: [
      { n: 1, tip: 'Heavyweight Minimal Tee', left: '50%', top: '28%' },
      { n: 2, tip: 'Vintage Fade Denim', left: '48%', top: '62%' },
      { n: 3, tip: 'Toe-Cap Court Sneaker', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-oversized-tee-white', tag: 'Essential' },
      { id: 'sg-relaxed-faded-denim', tag: null },
      { id: 'sg-court-sneaker-bone', tag: 'Footwear' },
    ],
  },
  {
    index: 2,
    num: '03',
    key: 'rLfAhC',
    name: 'Grounded Palette',
    src640: '/models/model-4-640.webp',
    src1080: '/models/model-4-640.webp',
    pins: [
      { n: 1, tip: 'Olive Raglan Heavy Knit', left: '50%', top: '28%' },
      { n: 2, tip: 'Pleated Corduroy Trouser', left: '48%', top: '62%' },
      { n: 3, tip: 'Field Low Trail Boot', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-olive-raglan-knit', tag: 'Archive' },
      { id: 'sg-corduroy-trousers', tag: null },
      { id: 'sg-field-trail-boot', tag: 'Footwear' },
    ],
  },
  {
    index: 3,
    num: '04',
    key: 'FKg67q',
    name: 'Studio Day',
    src640: '/models/model-6-640.webp',
    src1080: '/models/model-6-640.webp',
    pins: [
      { n: 1, tip: 'Boxy Heavyweight Tee', left: '50%', top: '28%' },
      { n: 2, tip: 'Light Wash Baggy Denim', left: '48%', top: '62%' },
      { n: 3, tip: 'Court Low — Triple White', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-boxy-black-tee', tag: 'Obsidian' },
      { id: 'sg-light-wash-denim', tag: null },
      { id: 'sg-court-white', tag: 'Footwear' },
    ],
  },
  {
    index: 4,
    num: '05',
    key: '8KREEE',
    name: 'Tailored Perspective',
    src640: '/models/model-3-640.webp',
    src1080: '/models/model-3-640.webp',
    pins: [
      { n: 1, tip: 'Burgundy Heavy Ribbed Knit', left: '50%', top: '28%' },
      { n: 2, tip: 'Washed Charcoal Denim', left: '48%', top: '62%' },
      { n: 3, tip: 'Minimal Leather Derby', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-burgundy-ribbed-knit', tag: 'Knitwear' },
      { id: 'sg-charcoal-denim', tag: null },
      { id: 'sg-derby-black', tag: 'Footwear' },
    ],
  },
  {
    index: 5,
    num: '06',
    key: 'N3bfm9',
    name: 'Minimalist Uniform',
    src640: '/models/model-2-640.webp',
    src1080: '/models/model-2-640.webp',
    pins: [
      { n: 1, tip: 'French Terry Crewneck', left: '50%', top: '28%' },
      { n: 2, tip: 'Relaxed Vintage Denim', left: '48%', top: '62%' },
      { n: 3, tip: 'Retro Court Sneaker', left: '48%', top: '94%' },
    ],
    pieces: [
      { id: 'sg-grey-crewneck', tag: 'Core' },
      { id: 'sg-vintage-denim', tag: null },
      { id: 'sg-court-sneaker-black', tag: 'Footwear' },
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
      src1080: dbLook.image || defLook.src1080,
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
