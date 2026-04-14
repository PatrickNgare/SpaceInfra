import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import { cn } from '@/utils/cn'

const navLinks = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  { label: 'Services',  path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog',      path: '/blog' },
  { label: 'Contact',   path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 60
      setScrolled(prev => prev === next ? prev : next)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={cn(
        'fixed top-0 w-full z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/88 backdrop-blur-2xl border-b border-neutral-200/60 shadow-sm shadow-black/[0.04] py-3'
          : 'bg-transparent py-5'
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              'w-9 h-9 flex items-center justify-center font-heading font-bold text-sm tracking-tight transition-all duration-300',
              scrolled
                ? 'bg-primary text-white rounded-lg'
                : 'bg-secondary text-white rounded-lg'
            )}>
              IS
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                'font-heading font-bold text-lg tracking-tight transition-colors duration-300 leading-tight',
                scrolled ? 'text-primary' : 'text-white'
              )}>
                InfraSpace
              </span>
              <span className={cn(
                'text-[9px] uppercase tracking-[0.2em] font-medium transition-colors duration-300',
                scrolled ? 'text-neutral-400' : 'text-white/40'
              )}>
                Construction
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) => cn(
                    'relative font-medium text-sm transition-colors duration-200 px-3.5 py-2 rounded-lg',
                    'after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-secondary after:rounded-full',
                    'after:scale-x-0 after:transition-transform after:duration-200 after:origin-left',
                    isActive && 'after:scale-x-100',
                    isActive
                      ? 'text-secondary'
                      : scrolled
                        ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                        : 'text-white/75 hover:text-white hover:bg-white/8'
                  )}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link
            to="/contact"
            className={cn(
              'hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200',
              scrolled
                ? 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-md hover:shadow-secondary/20 hover:-translate-y-px'
                : 'bg-white/12 border border-white/25 text-white hover:bg-white/20 hover:border-white/40'
            )}
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden text-2xl transition-colors p-1 rounded-lg',
              scrolled ? 'text-primary hover:bg-neutral-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      <MobileMenu links={navLinks} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
