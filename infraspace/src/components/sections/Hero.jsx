import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PHONE_DISPLAY, PHONE_HREF } from '@/utils/contact'

const SLIDES = [
  {
    image: '/assets/images/masaimara2.jpeg',
    eyebrow: 'Nashulai Safari Lodge — Masai Mara',
    heading1: 'Building Your',
    heading2: 'Vision.',
    sub: 'One Brick at a Time.',
  },
  {
    image: '/assets/images/masaimara4.jpeg',
    eyebrow: 'Premium Construction Across Kenya',
    heading1: 'Crafted With',
    heading2: 'Precision.',
    sub: 'From Foundation to Finish.',
  },
  {
    image: '/assets/images/nanyuki1.jpeg',
    eyebrow: 'Nanyuki Extension — Laikipia County',
    heading1: 'Spaces That',
    heading2: 'Inspire.',
    sub: 'Every Detail, Perfectly Executed.',
  },
  {
    image: '/assets/images/nanyuki3.jpeg',
    eyebrow: '200+ Projects Delivered Since 2009',
    heading1: 'Excellence in',
    heading2: 'Every Build.',
    sub: 'Trusted by 150+ Kenyan Families.',
  },
]

const INTERVAL = 6000

const badges = [
  { label: 'NCA Registered' },
  { label: '15+ Years Experience' },
  { label: '200+ Projects Completed' },
  { label: '150+ Happy Clients' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(i => (i + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background carousel ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Vertical accent line */}
      <div className="absolute top-0 bottom-0 right-[28%] w-px bg-gradient-to-b from-transparent via-secondary/25 to-transparent pointer-events-none hidden lg:block" />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-0">
        <div className="max-w-2xl">

          {/* Eyebrow — animates with each slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`eyebrow-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-10 h-px bg-secondary flex-shrink-0" />
              <span className="text-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                {slide.eyebrow}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55 }}
              className="font-heading font-bold leading-[1.05] text-white mb-6"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl">{slide.heading1}</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-secondary">{slide.heading2}</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-white/40 font-light mt-2">
                {slide.sub}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Subtext — static */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/70 text-lg leading-relaxed max-w-lg mb-10"
          >
            Premium residential and commercial construction across Kenya.
            Quality you can see, craftsmanship you can feel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-secondary text-white px-8 py-4 font-semibold text-base hover:bg-secondary-dark transition-all duration-200"
            >
              Get a Free Quote
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-medium text-base hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaShieldAlt size={11} className="text-secondary flex-shrink-0" />
                <span className="text-white/50 text-xs">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Slide controls ── */}
      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <FaChevronRight size={14} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-secondary'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <motion.div
            key={current}
            className="h-full bg-secondary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          />
        </div>
      )}

      {/* Phone — bottom right */}
      <motion.a
        href={PHONE_HREF}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 right-6 md:right-12 hidden md:flex items-center gap-2 text-white/40 hover:text-secondary transition-colors text-sm z-20"
      >
        {PHONE_DISPLAY}
        <span className="w-6 h-px bg-white/20" />
      </motion.a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
        <div className="w-px h-10 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
        <span className="text-white/25 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  )
}
