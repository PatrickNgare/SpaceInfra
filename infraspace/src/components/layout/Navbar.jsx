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
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={cn(
        'fixed top-0 w-full z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_24px_-4px_rgba(0,0,0,0.08)] py-3'
          : 'bg-transparent py-5'
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              'w-9 h-9 rounded flex items-center justify-center font-heading font-bold text-sm tracking-tight transition-all duration-300',
              scrolled
                ? 'bg-primary text-white'
                : 'bg-secondary text-white'
            )}>
              IS
            </div>
            <span className={cn(
              'font-heading font-bold text-xl tracking-tight transition-colors duration-300',
              scrolled ? 'text-primary' : 'text-white'
            )}>
              InfraSpace
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) => cn(
                    'relative font-medium text-sm transition-colors duration-200 py-1',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-secondary',
                    'after:scale-x-0 after:transition-transform after:duration-200 after:origin-left',
                    isActive && 'after:scale-x-100',
                    isActive
                      ? 'text-secondary'
                      : scrolled
                        ? 'text-neutral-700 hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  )}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className={cn(
              'hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              scrolled
                ? 'bg-secondary text-white hover:bg-secondary-dark'
                : 'bg-white/10 border border-white/30 text-white hover:bg-white/20'
            )}
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={cn('md:hidden text-2xl transition-colors', scrolled ? 'text-primary' : 'text-white')}
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
