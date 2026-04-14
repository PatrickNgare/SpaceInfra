import { Link, NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import { useEffect } from 'react'

export default function MobileMenu({ links, isOpen, onClose }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Panel */}
      <div className="relative ml-auto w-72 bg-white h-full flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <span className="font-heading font-bold text-primary text-lg">Menu</span>
          <button onClick={onClose} className="text-neutral-800 hover:text-primary transition-colors" aria-label="Close menu">
            <HiX size={24} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-6 space-y-1">
          {links.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-neutral-800 hover:bg-neutral-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 py-6 border-t border-neutral-100">
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full text-center bg-secondary text-white px-5 py-3 rounded-md font-semibold hover:bg-secondary-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
