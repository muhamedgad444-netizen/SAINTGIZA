const ASSET_BASE = 'https://reel-ref-try-the-look.vercel.app/assets/'

// Product data for SAINTGIZA + Runway Lookbook pieces (fallback & immediate initial render; hydrated from Supabase)
export const products = [
  {
    id: 'sg-essential-hoodie',
    name: 'Essential Hoodie',
    subtitle: 'Heavyweight 420gsm French Terry',
    price: 185,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-hoodie-black.webp`,
    hoverImage: `${ASSET_BASE}source-hoodie.webp`,
    detailImages: [
      `${ASSET_BASE}source-hoodie-black.webp`,
      `${ASSET_BASE}source-hoodie.webp`,
      `${ASSET_BASE}original-look-4.webp`,
      `${ASSET_BASE}original-look-2.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Cut from 420gsm French terry cotton, the Essential Hoodie features a relaxed, oversized silhouette with dropped shoulders and a raw-edge finish. Triple-stitched seams and a heavyweight zinc alloy zipper ensure lasting durability.',
    materials:
      '100% Organic Ring-Spun Cotton • 420gsm French Terry • YKK Hardware • Enzyme-Washed Finish',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Obsidian Black',
    source: 'saintgiza',
  },
  {
    id: 'sg-oversized-tee',
    name: 'Oversized Tee',
    subtitle: 'Premium 300gsm Cotton Jersey',
    price: 95,
    category: 'T-Shirts',
    image: `${ASSET_BASE}source-tshirt.webp`,
    hoverImage: `${ASSET_BASE}source-sweatshirt.webp`,
    detailImages: [
      `${ASSET_BASE}source-tshirt.webp`,
      `${ASSET_BASE}original-look-5.webp`,
      `${ASSET_BASE}original-look-6.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The Oversized Tee is crafted from 300gsm premium cotton jersey with a boxy, relaxed fit. Features reinforced collar ribbing, side-split hem, and a subtle embossed logo at the back neck.',
    materials:
      '100% Combed Cotton • 300gsm Jersey • Reinforced Shoulder Seams • Bio-Washed',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Void Black',
    source: 'saintgiza',
  },
  {
    id: 'sg-cargo-pants',
    name: 'Utility Cargo',
    subtitle: 'Ripstop Nylon Blend',
    price: 220,
    category: 'Pants',
    image: `${ASSET_BASE}model-4-640.webp`,
    hoverImage: `${ASSET_BASE}original-look-4.webp`,
    detailImages: [
      `${ASSET_BASE}original-look-4.webp`,
      `${ASSET_BASE}original-look-3.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Engineered from military-grade ripstop nylon blended with organic cotton. Features six utility pockets with concealed magnetic closures, adjustable ankle cuffs, and a relaxed tapered fit.',
    materials:
      '65% Nylon Ripstop, 35% Organic Cotton • YKK Zippers • Magnetic Closures • DWR Coating',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Shadow Black',
    source: 'saintgiza',
  },
  {
    id: 'sg-bomber-jacket',
    name: 'Flight Bomber',
    subtitle: 'Padded Nylon Shell',
    price: 340,
    category: 'Outerwear',
    image: `${ASSET_BASE}source-sweatshirt-plus.webp`,
    hoverImage: `${ASSET_BASE}original-look-1.webp`,
    detailImages: [
      `${ASSET_BASE}source-sweatshirt-plus.webp`,
      `${ASSET_BASE}original-look-1.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The Flight Bomber draws from military heritage with a modern oversized cut. Padded nylon shell with satin lining, ribbed collar, cuffs and hem. Features interior chest pocket and dual-entry hand pockets.',
    materials:
      '100% Nylon Shell • Polyester Padding • Satin Lining • Rib-Knit Trims • Metal Hardware',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Olive Drab',
    source: 'saintgiza',
  },
  {
    id: 'sg-cloud-hoodie',
    name: 'Cloud Hoodie',
    subtitle: 'Ultra-Soft 380gsm Fleece',
    price: 195,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-hoodie.webp`,
    hoverImage: `${ASSET_BASE}source-sweatshirt.webp`,
    detailImages: [
      `${ASSET_BASE}source-hoodie.webp`,
      `${ASSET_BASE}original-look-2.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The Cloud Hoodie features our proprietary 380gsm ultra-soft fleece with a brushed interior. Relaxed fit with raglan sleeves, kangaroo pocket, and a triple-layer hood construction.',
    materials:
      '80% Cotton, 20% Polyester • 380gsm Brushed Fleece • Triple-Layer Hood • Enzyme Washed',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Bone White',
    source: 'saintgiza',
  },
  {
    id: 'sg-archive-tee',
    name: 'Archive Tee',
    subtitle: 'Vintage-Washed Cotton',
    price: 85,
    category: 'T-Shirts',
    image: `${ASSET_BASE}source-sweatshirt.webp`,
    hoverImage: `${ASSET_BASE}source-tshirt.webp`,
    detailImages: [
      `${ASSET_BASE}source-sweatshirt.webp`,
      `${ASSET_BASE}original-look-3.webp`,
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Part of the Archive collection, this tee features a vintage sun-faded wash on heavyweight cotton. Relaxed box fit with reinforced seams and a subtle tonal chest print.',
    materials:
      '100% Heavyweight Cotton • 280gsm • Vintage Wash • Tonal Screen Print',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days. Express delivery 2-3 business days.',
    color: 'Washed Black',
    source: 'saintgiza',
  },
  {
    id: 'tatum-5-orbit-copy',
    name: 'Air Jordan 12 Retro',
    subtitle: 'Nikey | Password: 1',
    price: 149,
    category: 'Footwear',
    image: `${ASSET_BASE}source-tatum-5-orbit-copy.webp`,
    hoverImage: `${ASSET_BASE}source-tatum-5-orbit-copy.webp`,
    detailImages: [
      `${ASSET_BASE}source-tatum-5-orbit-copy.webp`,
      `${ASSET_BASE}original-look-1.webp`,
    ],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    description:
      'Runway Lookbook low-top sneaker in light grey and cream with dark-brown swoosh and pink accents.',
    materials:
      'Full-grain leather & suede upper • Rubber cupsole • Cushioned midsole',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Cream / Dark Brown',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit-copy',
  },
  {
    id: 'tatum-5-orbit',
    name: 'Tatum 5 Orbit',
    subtitle: 'Nikey | Password: 1',
    price: 149,
    category: 'Footwear',
    image: `${ASSET_BASE}source-tatum-5-orbit.webp`,
    hoverImage: `${ASSET_BASE}source-tatum-5-orbit.webp`,
    detailImages: [
      `${ASSET_BASE}source-tatum-5-orbit.webp`,
      `${ASSET_BASE}original-look-5.webp`,
    ],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    description:
      'Runway Lookbook court sneaker in white leather with black collar, grey elephant print and red accents.',
    materials:
      'Tumbled leather upper • Elephant-print overlays • Visible Air unit',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'White / Cement Grey',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit',
  },
  {
    id: 'air-jordan-12-retro-copy',
    name: 'Luka 5',
    subtitle: 'Nikey | Password: 1',
    price: 149,
    category: 'Footwear',
    image: `${ASSET_BASE}source-air-jordan-12-retro-copy.webp`,
    hoverImage: `${ASSET_BASE}source-air-jordan-12-retro-copy.webp`,
    detailImages: [
      `${ASSET_BASE}source-air-jordan-12-retro-copy.webp`,
      `${ASSET_BASE}original-look-2.webp`,
    ],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    description:
      'Runway Lookbook sleek black low-top leather sneaker contrasted with a clean white midsole.',
    materials:
      'Smooth leather upper • Contrast white cupsole • Low-profile collar',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Black / White',
    source: 'runway',
    externalUrl:
      'https://nike-makknzjs.myshopify.com/products/air-jordan-12-retro-copy',
  },
  {
    id: 'tshirt',
    name: 'Tshirt',
    subtitle: 'Nike',
    price: 199,
    category: 'T-Shirts',
    image: `${ASSET_BASE}source-tshirt.webp`,
    hoverImage: `${ASSET_BASE}source-tshirt.webp`,
    detailImages: [
      `${ASSET_BASE}source-tshirt.webp`,
      `${ASSET_BASE}original-look-5.webp`,
    ],
    sizes: ['S', 'L', 'M', 'XL'],
    description:
      'Runway Lookbook black jersey tee with contrast pink rib collar and white gothic Reign graphic.',
    materials:
      '100% Heavyweight Cotton Jersey • Contrast Rib Collar • Screen-Printed Graphic',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Black / Pink',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/tshirt',
  },
  {
    id: 'sweatshirt',
    name: 'Sweatshirt',
    subtitle: 'Nike',
    price: 199,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-sweatshirt.webp`,
    hoverImage: `${ASSET_BASE}source-sweatshirt.webp`,
    detailImages: [
      `${ASSET_BASE}source-sweatshirt.webp`,
      `${ASSET_BASE}original-look-3.webp`,
    ],
    sizes: ['S', 'L', 'M', 'XL'],
    description:
      'Runway Lookbook beige crew-neck sweatshirt with minimal chest insignia and relaxed drop shoulders.',
    materials: '100% Loopback Cotton Terry • Ribbed Crewneck, Cuffs & Hem',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Sand Beige',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/sweatshirt',
  },
  {
    id: 'sweatshirt-plus',
    name: 'Sweatshirt Plus',
    subtitle: 'Nike',
    price: 199,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-sweatshirt-plus.webp`,
    hoverImage: `${ASSET_BASE}source-sweatshirt-plus.webp`,
    detailImages: [
      `${ASSET_BASE}source-sweatshirt-plus.webp`,
      `${ASSET_BASE}original-look-4.webp`,
    ],
    sizes: ['S', 'L', 'M', 'XL'],
    description:
      'Runway Lookbook bottle-green heavyweight hoodie with cream varsity VERDO ORIGINAL arch lettering.',
    materials: '420gsm Brushed Fleece • Double-Lined Hood • Varsity Chest Print',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Bottle Green',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus',
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    subtitle: 'Nike',
    price: 199,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-hoodie.webp`,
    hoverImage: `${ASSET_BASE}source-hoodie.webp`,
    detailImages: [
      `${ASSET_BASE}source-hoodie.webp`,
      `${ASSET_BASE}original-look-2.webp`,
    ],
    sizes: ['S', 'L', 'M', 'XL'],
    description:
      'Runway Lookbook heather-grey oversized hoodie with bold statement front graphic.',
    materials: '400gsm Heather Cotton Fleece • Kangaroo Pocket • Relaxed Fit',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Heather Grey',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/hoodie',
  },
  {
    id: 'hoodie-black',
    name: 'Hoodie Black',
    subtitle: 'Nike',
    price: 199,
    category: 'Hoodies',
    image: `${ASSET_BASE}source-hoodie-black.webp`,
    hoverImage: `${ASSET_BASE}source-hoodie-black.webp`,
    detailImages: [
      `${ASSET_BASE}source-hoodie-black.webp`,
      `${ASSET_BASE}original-look-6.webp`,
    ],
    sizes: ['S', 'L', 'M', 'XL'],
    description:
      'Runway Lookbook black pullover hoodie featuring a tonal grey star emblem across the chest.',
    materials:
      '420gsm Organic Cotton Fleece • Tonal Graphic Print • Ribbed Trims',
    shipping:
      'Free worldwide shipping on orders over $250. Standard delivery 5-7 business days.',
    color: 'Jet Black',
    source: 'runway',
    externalUrl: 'https://nike-makknzjs.myshopify.com/products/hoodie-black',
  },
]

export const collections = [
  { name: 'TRY THE LOOK', season: 'RUNWAY 01–06', count: 8, path: '/collections' },
  { name: 'ESSENTIALS', season: 'SS26', count: 6, path: '/collections' },
  { name: 'ARCHIVE', season: 'AW25', count: 14, path: '/collections' },
]
