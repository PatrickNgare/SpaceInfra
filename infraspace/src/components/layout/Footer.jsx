import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from '@/utils/contact'

const quickLinks = [
  { label: 'Home',         path: '/' },
  { label: 'About Us',     path: '/about' },
  { label: 'Services',     path: '/services' },
  { label: 'Portfolio',    path: '/portfolio' },
  { label: 'Blog',         path: '/blog' },
  { label: 'Contact',      path: '/contact' },
]

const services = [
  { label: 'Residential Construction', path: '/services/residential' },
  { label: 'Commercial Construction',  path: '/services/commercial' },
  { label: 'Renovation & Remodelling', path: '/services/renovation' },
  { label: 'Landscaping & Outdoor',    path: '/services/landscaping' },
]

const socials = [
  { icon: FaFacebook,  label: 'Facebook',  href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaLinkedin,  label: 'LinkedIn',  href: '#' },
  { icon: FaWhatsapp,  label: 'WhatsApp',  href: whatsappHref() },
]

export default function Footer() {
  return (
    <footer className="bg-[#090f1a] text-neutral-100 relative overflow-hidden noise">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot texture */}
      <div className="absolute inset-0 dot-overlay opacity-60 pointer-events-none" />

      {/* Orange accent top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />

      <div className="relative container mx-auto px-4 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6 w-fit">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center font-heading font-bold text-sm text-white shadow-lg shadow-secondary/25">
                IS
              </div>
              <div className="leading-none">
                <span className="block font-heading font-bold text-lg text-white tracking-tight">InfraSpace</span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-neutral-600 mt-0.5">Construction</span>
              </div>
            </Link>

            <p className="text-neutral-500 text-sm leading-relaxed mb-7">
              Building quality homes and commercial spaces across Kenya since 2009.
              Excellence in every brick, from foundation to finish.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 text-neutral-500 hover:border-secondary/60 hover:text-secondary hover:bg-secondary/8 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 text-neutral-500 hover:text-secondary text-sm transition-colors duration-200"
                  >
                    <FiArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.2em] mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 text-neutral-500 hover:text-secondary text-sm transition-colors duration-200"
                  >
                    <FiArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.2em] mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FiMapPin className="text-secondary" size={13} />
                </span>
                <span className="text-neutral-500 text-sm pt-1.5">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <FiPhone className="text-secondary" size={13} />
                </span>
                <a href={PHONE_HREF} className="text-neutral-500 hover:text-secondary text-sm transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <FiMail className="text-secondary" size={13} />
                </span>
                <a href="mailto:patrickngare@gmail.com" className="text-neutral-500 hover:text-secondary text-sm transition-colors">
                  patrickngare@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-7 pt-5 border-t border-white/[0.06]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 mb-2">Business Hours</p>
              <p className="text-neutral-500 text-xs">Mon – Fri &nbsp;8:00 AM – 6:00 PM</p>
              <p className="text-neutral-500 text-xs mt-1">Saturday &nbsp;9:00 AM – 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-600">
          <p>&copy; {new Date().getFullYear()} InfraSpace. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <p>Built by <a href="mailto:patrickngare@gmail.com" className="text-neutral-500 hover:text-secondary transition-colors">CROPGRAZE VENTURES</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
