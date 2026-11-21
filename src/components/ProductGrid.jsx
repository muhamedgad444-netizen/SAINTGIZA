import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { useCart } from '../context/CartContext'

const categories = ['All', 'T-Shirts', 'Hoodies', 'Footwear', 'Pants', 'Outerwear']

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { catalog } = useCart()

  const filtered =
    activeCategory === 'All'
      ? catalog
      : catalog.filter((p) => p.category === activeCategory)

  return (
    <section className="px-6 md:px-12 py-24 bg-background" id="product-grid">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-2"
          >
            New Arrivals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-[0.1em] uppercase"
          >
            The Edit
          </motion.h2>
        </div>
        <Link
          to="/collections"
          className="link-hover text-[11px] tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors uppercase self-start md:self-end"
        >
          Try the Look — Collections ({catalog.length})
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="mb-12 border-b border-foreground/10 pb-6">
        <div className="flex items-center gap-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`text-[11px] tracking-[0.2em] uppercase whitespace-nowrap pb-2 border-b-[1.5px] transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-foreground border-foreground font-medium'
                  : 'text-sg-gray-500 border-transparent hover:text-foreground/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Cards for Horizontal Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-32 gap-y-24 mt-20 max-w-7xl mx-auto">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
