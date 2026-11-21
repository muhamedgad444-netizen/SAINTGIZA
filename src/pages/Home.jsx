import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import CollectionsBanner from '../components/CollectionsBanner'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <CollectionsBanner />
      <ProductGrid />
    </motion.main>
  )
}
