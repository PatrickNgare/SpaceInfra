import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative pt-44 pb-28 bg-primary-dark overflow-hidden noise">

      {/* Layered ambient glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary-light/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Left accent bar */}
      <div className="absolute left-10 top-32 bottom-10 w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent pointer-events-none hidden lg:block" />

      {/* Right side ghost watermark */}
      <div className="absolute right-10 bottom-0 font-heading font-bold text-[120px] leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter hidden lg:block">
        InfraSpace
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 text-center text-white">

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-balance"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-white/50 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-secondary/60 to-transparent origin-center"
        />

        {children}
      </div>
    </section>
  )
}
