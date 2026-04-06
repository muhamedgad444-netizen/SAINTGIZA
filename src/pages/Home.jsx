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

      {/* Brand Statement */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-foreground/5" id="brand-statement">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.5em] text-sg-gray-500 uppercase mb-8"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-wide text-foreground/90"
          >
            We believe in the{' '}
            <span className="font-bold italic text-foreground">quiet power</span>{' '}
            of precision. Every stitch, every cut, every fabric choice is a deliberate act of{' '}
            <span className="font-bold italic text-foreground">intention</span>.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-[1px] bg-foreground/20 mx-auto mt-10"
          />
        </div>
      </section>

      <ProductGrid />
      <CollectionsBanner />

      {/* Full-Width Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden" id="lookbook-banner">
        <motion.img
          src="/images/hoodie-1-hover.png"
          alt="SAINTGIZA Lookbook"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[10px] tracking-[0.5em] text-foreground/50 uppercase mb-4">
              Lookbook
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase mb-8">
              SS26
            </h2>
            <a
              href="#"
              className="inline-block px-8 py-3 border border-sg-white/30 text-[11px] font-medium tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
            >
              View Lookbook
            </a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
