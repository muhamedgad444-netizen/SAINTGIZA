import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductGrid() {
  return (
    <section className="px-6 md:px-12 py-24 bg-background" id="product-grid">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-16">
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
          to="/shop"
          className="link-hover text-[11px] tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors uppercase hidden md:block"
        >
          View All
        </Link>
      </div>

      {/* Stacked Cards for Horizontal Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-32 gap-y-24 mt-20 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
