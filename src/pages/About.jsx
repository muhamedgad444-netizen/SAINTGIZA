import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pt-24"
    >
      {/* Header */}
      <div className="px-6 md:px-12 py-16 md:py-24 border-b border-foreground/5">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-2"
        >
          Est. 2024
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] uppercase max-w-3xl"
        >
          The Pursuit of Quiet Luxury
        </motion.h1>
      </div>

      {/* Content Grid */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/hero.png"
              alt="SAINTGIZA Studio"
              className="w-full aspect-[3/4] object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[10px] tracking-[0.4em] text-sg-gray-500 uppercase mb-8">
              Our Story
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 mb-6">
              SAINTGIZA was born from the conviction that streetwear deserves the same reverence as haute couture. Every piece in our collection is a meditation on form, function, and the raw beauty of simplicity.
            </p>
            <p className="text-sm leading-relaxed text-sg-gray-500 mb-6">
              We source only the finest materials — from Japanese organic cotton to Italian hardware — and produce exclusively in small batches. Our garments are not fast fashion. They are slow, deliberate, and built to endure.
            </p>
            <p className="text-sm leading-relaxed text-sg-gray-500 mb-10">
              Based between Cairo and Tokyo, SAINTGIZA draws from the ancient precision of the Giza pyramids and the minimalist discipline of Japanese design philosophy. The result is clothing that feels both timeless and unmistakably modern.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/5">
              {[
                { number: '420', label: 'GSM Fabrics' },
                { number: '100%', label: 'Organic Cotton' },
                { number: '48', label: 'Hour Drops' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold tracking-wider text-foreground">
                    {stat.number}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] text-sg-gray-500 uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width statement */}
      <div className="px-6 md:px-12 py-24 border-t border-foreground/5">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-center max-w-4xl mx-auto text-foreground/90"
        >
          "Wear nothing that does not{' '}
          <span className="italic font-bold text-foreground">speak for itself</span>."
        </motion.p>
      </div>
    </motion.main>
  )
}
