import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import RunwaySectionComponent from '../components/RunwaySection'
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
      <section id="collections-runway" className="bg-background text-foreground transition-colors duration-300">
        <RunwaySectionComponent />
      </section>
      <CollectionsBanner />
    </motion.main>
  )
}
