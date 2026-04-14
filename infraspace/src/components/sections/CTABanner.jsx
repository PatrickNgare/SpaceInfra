import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { PHONE_DISPLAY, PHONE_HREF } from '@/utils/contact'

export default function CTABanner() {
  return (
    <section className="relative bg-primary-dark py-24 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Orange top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

      {/* Ambient orange glow — right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Ghost brand letters */}
      <div className="absolute right-8 bottom-0 font-heading font-bold text-[180px] leading-none text-white/[0.025] select-none pointer-events-none tracking-tight">
        IS
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-6 h-px bg-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-[0.18em]">
              Ready to Build?
            </span>
            <span className="w-6 h-px bg-secondary" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Let&rsquo;s Build Your Dream
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Contact us today for a free consultation and detailed quote.
            No obligation — just an honest conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-secondary text-white px-9 py-4 font-bold text-base hover:bg-secondary-dark transition-all duration-200"
            >
              Get a Free Quote
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border border-white/20 text-white px-9 py-4 font-medium text-base hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
