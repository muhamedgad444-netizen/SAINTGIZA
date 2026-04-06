import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'T-Shirts', 'Hoodies', 'Pants', 'Outerwear']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-24"
    >
      {/* Header */}
      <div className="px-6 md:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-2"
        >
          Browse
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-[0.1em] uppercase"
        >
          Shop
        </motion.h1>
      </div>

      {/* Filter Bar */}
      <div className="px-6 md:px-12 mb-12 border-b border-foreground/5 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6 overflow-x-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`text-[11px] tracking-[0.2em] uppercase whitespace-nowrap pb-2 border-b-[1.5px] transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-foreground border-sg-white'
                  : 'text-sg-gray-500 border-transparent hover:text-foreground/70'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-[10px] tracking-wider text-sg-gray-500 ml-auto hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </span>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-12 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 xl:grid-cols-2 gap-x-32 gap-y-24"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-sg-gray-500 text-sm tracking-wider">No products found in this category.</p>
          </div>
        )}
      </div>
    </motion.main>
  )
}
