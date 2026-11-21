import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background" id="hero-section">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <video
          src="/video/Screen Recording 2026-04-06 045430.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-sg-black/60 via-transparent to-sg-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-sg-black/40 via-transparent to-sg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 px-6">
        {/* Season Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] text-sg-white/60 mb-4 uppercase"
        >
          Spring / Summer 2026
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-center mb-3 uppercase text-sg-white"
        >
          Essentials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm md:text-base font-light tracking-[0.2em] text-sg-white/70 mb-10 text-center max-w-md"
        >
          Elevated basics for the modern silhouette
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Link
            to="/collections"
            id="hero-cta"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-sg-white/30 text-[11px] font-medium tracking-[0.3em] text-sg-white uppercase overflow-hidden transition-all duration-500 hover:border-sg-white"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-sg-black">
              Explore Collections
            </span>
            <svg
              className="relative z-10 w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-sg-black"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <span className="absolute inset-0 bg-sg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] text-sg-white/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-sg-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
