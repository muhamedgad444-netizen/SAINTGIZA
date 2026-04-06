import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collections } from '../data/products'

export default function Collections() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-24"
    >
      {/* Header */}
      <div className="px-6 md:px-12 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-2"
        >
          Curated
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-[0.1em] uppercase"
        >
          Collections
        </motion.h1>
      </div>

      {/* Collection Cards */}
      <div className="px-6 md:px-12 pb-24 space-y-[1px]">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <Link
              to="/shop"
              className="group block bg-sg-gray-100/50 hover:bg-sg-gray-100 transition-colors duration-500 p-8 md:p-16"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-sg-gray-500 uppercase block mb-4">
                    {collection.season} — {collection.count} Pieces
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase group-hover:text-sg-accent transition-colors duration-500">
                    {collection.name}
                  </h2>
                </div>
                <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[11px] tracking-[0.2em] uppercase">Explore</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.main>
  )
}
