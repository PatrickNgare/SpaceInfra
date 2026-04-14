import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Left accent line */}
      <div className="absolute left-10 top-28 bottom-8 w-px bg-gradient-to-b from-secondary/0 via-secondary/30 to-secondary/0 pointer-events-none hidden lg:block" />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 text-center text-white">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-5"
          >
            <span className="w-6 h-px bg-secondary" />
            <span className="text-secondary font-semibold text-xs uppercase tracking-[0.18em]">{eyebrow}</span>
            <span className="w-6 h-px bg-secondary" />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/55 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  )
}
