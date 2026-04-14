import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 15,  suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 50,  suffix: '+', label: 'Expert Team Members' },
]

function CountUp({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="font-heading font-bold text-5xl md:text-6xl text-secondary leading-none tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="relative bg-primary-dark py-16 overflow-hidden">
      <div className="absolute inset-0 dot-overlay pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                'text-center px-6 py-8',
                i < stats.length - 1 ? 'border-r border-white/10' : '',
                i >= 2 ? 'border-t border-white/10 md:border-t-0' : '',
              ].join(' ')}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <div className="w-8 h-0.5 bg-secondary/30 mx-auto my-3" />
              <p className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
