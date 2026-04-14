import { Link, NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ links, isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 36 }}
            className="relative ml-auto w-72 bg-white h-full flex flex-col shadow-2xl"
          >
            {/* Orange top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary to-secondary-light" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 mt-0.5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-secondary rounded-md flex items-center justify-center font-heading font-bold text-[11px] text-white">IS</div>
                <span className="font-heading font-bold text-primary text-base tracking-tight">InfraSpace</span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
              {links.map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.3 }}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                        isActive
                          ? 'bg-secondary text-white shadow-sm shadow-secondary/20'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        <FiArrowRight
                          size={13}
                          className={`transition-all duration-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'}`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="px-5 py-6 border-t border-neutral-100"
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-3.5 rounded-xl font-semibold text-sm hover:bg-secondary-dark transition-colors shadow-md shadow-secondary/20"
              >
                Get a Free Quote
                <FiArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
