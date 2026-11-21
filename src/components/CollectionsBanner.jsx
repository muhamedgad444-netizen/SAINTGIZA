import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collections } from '../data/products'

export default function CollectionsBanner() {
  return (
    <section className="px-6 md:px-12 py-24 bg-background" id="collections-banner">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-2">
          Curated
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[0.1em] uppercase mb-16">
          Collections
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-foreground/10 border border-foreground/10">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Link
              to={collection.path || '/collections'}
              className="group block bg-background p-8 md:p-12 hover:bg-foreground/5 transition-colors duration-500"
              id={`collection-${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start justify-between mb-16 md:mb-24">
                <span className="text-[10px] tracking-[0.3em] text-sg-gray-500 uppercase">
                  {collection.season}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-sg-gray-500">
                  {collection.count} pieces
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase group-hover:text-sg-accent transition-colors duration-500">
                {collection.name}
              </h3>
              <div className="mt-6 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.2em] text-foreground/60 uppercase">Explore</span>
                <svg className="w-4 h-4 text-foreground/60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
