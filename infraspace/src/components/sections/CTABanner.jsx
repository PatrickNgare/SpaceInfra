import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import { PHONE_DISPLAY, PHONE_HREF } from '@/utils/contact'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '15+',  label: 'Years Experience' },
  { value: '150+', label: 'Happy Clients' },
]

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden noise">
      {/* Full-bleed image background */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/masaimara6.jpeg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay — heavier so text is always legible */}
      <div className="absolute inset-0 bg-primary-dark/93" />
      {/* Grid texture */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Orange glow — top-left */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Blue glow — bottom-right */}
      <div className="absolute -bottom-16 right-0 w-96 h-96 bg-primary/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Ghost IS watermark */}
      <div className="absolute right-6 bottom-0 font-heading font-bold text-[160px] leading-none text-white/[0.03] select-none pointer-events-none tracking-tight">
        IS
      </div>

      {/* Orange top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow pill */}
            <div className="mb-7">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Ready to Build?
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight text-balance mb-5">
              Let&rsquo;s Build Your<br />
              <span className="text-gradient-orange">Dream Project.</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-10">
              Free consultation, transparent pricing, no surprises.
              Talk to our team and get a detailed quote within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group btn-primary-lg"
              >
                Get a Free Quote
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 text-base font-medium hover:border-white/40 hover:bg-white/6 hover:-translate-y-px transition-all duration-200"
              >
                <FaPhone size={13} className="text-secondary" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          {/* Right — floating glass stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="glass-card-dark p-10 relative">
              {/* Inner orange accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

              <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-8">
                Our Track Record
              </p>

              <div className="space-y-6">
                {stats.map(({ value, label }, i) => (
                  <div key={label} className={`flex items-center justify-between ${i < stats.length - 1 ? 'pb-6 border-b border-white/8' : ''}`}>
                    <span className="text-white/60 text-sm">{label}</span>
                    <span className="font-heading font-bold text-3xl text-secondary">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-secondary text-sm">IS</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">InfraSpace</p>
                    <p className="text-white/35 text-xs">NCA Registered · ISO 9001</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
