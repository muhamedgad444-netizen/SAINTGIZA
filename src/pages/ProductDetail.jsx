import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

/* ─────────────────────────────────────────────
   ACCORDION — Brutalist collapsible section
   ───────────────────────────────────────────── */
function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-foreground/20">
      <button
        className="w-full flex items-center justify-between py-4 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-[13px] tracking-[0.08em] uppercase text-foreground font-normal">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-foreground text-xl leading-none select-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[13px] leading-[1.8] text-foreground/70 font-light">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PRODUCT DETAIL PAGE
   ───────────────────────────────────────────── */
export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart, catalog } = useCart()
  const product = catalog.find((p) => p.id === id) || products.find((p) => p.id === id)
  
  const [selectedSize, setSelectedSize] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  const scrollContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  // IMAGE A (flat-lay jacket): visible at scroll 0, gone by 0.5
  const imageAOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0])
  const imageAScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.88])
  const imageAY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-12%'])

  // IMAGE B (model wearing jacket): invisible at scroll 0, fully visible by 0.5
  const imageBOpacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 1])
  const imageBScale = useTransform(scrollYProgress, [0.3, 0.6], [1.05, 1])
  const imageBY = useTransform(scrollYProgress, [0.3, 0.6], ['8%', '0%'])

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <h1 className="text-2xl tracking-[0.2em] uppercase mb-4">Product Not Found</h1>
        <Link to="/collections" className="text-sm underline underline-offset-4">Return to Collections</Link>
      </div>
    )
  }

  // Pre-compute scroll-driven opacity so it is never called inside JSX (Rules of Hooks)
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const handleAddToCart = () => {
    if (!selectedSize) return
    addToCart(product, selectedSize)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background text-foreground font-sans relative"
      id="product-detail-brutalist"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THREE-COLUMN GRID
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        ref={scrollContainerRef}
        className="pt-[72px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] min-h-[250vh]"
      >

        {/* LEFT COLUMN — Sticky Product Info */}
        <div className="hidden lg:block border-r border-foreground/20">
          <div className="sticky top-[60px] h-[calc(100vh-60px)] flex flex-col justify-center px-8 xl:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[28px] xl:text-[34px] font-normal tracking-[0.06em] uppercase leading-[1.15] mb-10 text-foreground"
            >
              {product.name}
            </motion.h1>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="space-y-3 mb-12"
            >
              {product.materials?.split('•').map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-[5px] h-[5px] rounded-full bg-foreground mt-[7px] shrink-0" />
                  <span className="text-[13px] tracking-[0.02em] text-foreground/70 font-light leading-[1.6]">
                    {feature.trim()}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[13px] leading-[2] text-foreground/70 font-light tracking-[0.01em]">
                {product.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-12 pt-6 border-t border-foreground/20"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">Price</span>
              <p className="text-[26px] font-normal tracking-wider mt-1 text-foreground">${product.price}</p>
            </motion.div>
          </div>
        </div>

        {/* CENTER COLUMN — Scroll-Driven Image Crossfade */}
        <div className="relative border-r border-foreground/20 lg:border-r">
          <div className="sticky top-[60px] h-[calc(100vh-60px)] flex items-center justify-center overflow-hidden bg-background">
            <motion.div
              style={{ opacity: imageAOpacity, scale: imageAScale, y: imageAY }}
              className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 z-20 pointer-events-none"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>

            <motion.div
              style={{ opacity: imageBOpacity, scale: imageBScale, y: imageBY }}
              className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 z-10 pointer-events-none"
            >
              <img
                src={product.hoverImage || product.detailImages?.[1] || product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>

            <motion.div
              style={{ opacity: scrollIndicatorOpacity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[1px] h-6 bg-foreground/30"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN — Sticky Call-to-Actions */}
        <div className="lg:block">
          <div className="sticky top-[60px] h-auto lg:h-[calc(100vh-60px)] flex flex-col justify-center px-6 lg:px-8 xl:px-12 py-8 lg:py-0">
            <div className="lg:hidden mb-8">
              <h1 className="text-[24px] font-normal tracking-[0.06em] uppercase leading-[1.15] mb-3 text-foreground">
                {product.name}
              </h1>
              <p className="text-[22px] font-normal tracking-wider text-foreground">${product.price}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 block mb-2">Color</span>
              <span className="text-[13px] tracking-[0.05em] text-foreground">{product.color || 'Standard Variant'}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">Size</span>
                <button className="text-[11px] tracking-[0.1em] text-foreground/50 hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/30 border-none bg-transparent">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-[52px] h-[52px] flex items-center justify-center
                      text-[12px] font-medium tracking-[0.1em] uppercase
                      border transition-all duration-200 rounded-none
                      ${selectedSize === size
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground border-foreground/30 hover:bg-foreground/5'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {!selectedSize && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[11px] text-foreground/50 mt-2 tracking-wider"
                  >
                    Please select a size
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`
                  w-full py-[18px] text-[12px] font-medium tracking-[0.25em] uppercase
                  transition-all duration-300 rounded-none border
                  ${addedToCart
                    ? 'bg-foreground/80 text-background border-foreground/80'
                    : selectedSize
                      ? 'bg-foreground text-background border-foreground hover:bg-foreground/90 active:scale-[0.99]'
                      : 'bg-foreground/10 text-foreground/40 border-foreground/20 cursor-not-allowed'
                  }
                `}
              >
                {addedToCart ? '✓ ADDED TO CART' : 'ADD TO CART'}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Accordion title="Product Details">
                {product.description}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping || 'Free worldwide shipping on all orders over $250. Standard delivery takes 5–7 business days. Express shipping available at checkout.'}
              </Accordion>
              <div className="border-t border-foreground/20" />
            </motion.div>
            
            {/* Mobile details */}
            <div className="lg:hidden mt-10 pt-8 border-t border-foreground/20">
              <h2 className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 mb-4">About</h2>
              <p className="text-[13px] leading-[2] text-foreground/70 font-light">
                {product.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}
