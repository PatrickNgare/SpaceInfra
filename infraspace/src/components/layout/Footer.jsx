import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from '@/utils/contact'

const quickLinks = [
  { label: 'Home',         path: '/' },
  { label: 'About Us',     path: '/about' },
  { label: 'Services',     path: '/services' },
  { label: 'Portfolio',    path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog',         path: '/blog' },
  { label: 'Contact',      path: '/contact' },
]

const services = [
  { label: 'Residential Construction', path: '/services/residential' },
  { label: 'Commercial Construction',  path: '/services/commercial' },
  { label: 'Renovation & Remodelling', path: '/services/renovation' },
  { label: 'Landscaping & Outdoor',    path: '/services/landscaping' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 relative overflow-hidden">
      {/* Orange accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-overlay opacity-40 pointer-events-none" />

      <div className="relative container mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-secondary rounded flex items-center justify-center font-heading font-bold text-sm text-white">
                IS
              </div>
              <h3 className="font-heading font-bold text-xl text-white tracking-tight">InfraSpace</h3>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Building quality homes and commercial spaces across Nairobi and Kenya.
              Excellence in every brick, from foundation to finish.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook"  className="w-8 h-8 flex items-center justify-center rounded border border-neutral-700 text-neutral-500 hover:border-secondary hover:text-secondary transition-all"><FaFacebook size={14} /></a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded border border-neutral-700 text-neutral-500 hover:border-secondary hover:text-secondary transition-all"><FaInstagram size={14} /></a>
              <a href="#" aria-label="LinkedIn"  className="w-8 h-8 flex items-center justify-center rounded border border-neutral-700 text-neutral-500 hover:border-secondary hover:text-secondary transition-all"><FaLinkedin size={14} /></a>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-8 h-8 flex items-center justify-center rounded border border-neutral-700 text-neutral-500 hover:border-secondary hover:text-secondary transition-all"><FaWhatsapp size={14} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-neutral-500 hover:text-secondary text-sm transition-colors inline-flex items-center gap-2 group">
                    <span className="w-3 h-px bg-neutral-700 group-hover:bg-secondary group-hover:w-4 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-neutral-500 hover:text-secondary text-sm transition-colors inline-flex items-center gap-2 group">
                    <span className="w-3 h-px bg-neutral-700 group-hover:bg-secondary group-hover:w-4 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-500">
                <FiMapPin className="mt-0.5 shrink-0 text-secondary" size={15} />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-500">
                <FiPhone className="shrink-0 text-secondary" size={15} />
                <a href={PHONE_HREF} className="hover:text-secondary transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-500">
                <FiMail className="shrink-0 text-secondary" size={15} />
                <a href="mailto:patrickngare@gmail.com" className="hover:text-secondary transition-colors">patrickngare@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-neutral-800">
              <p className="text-xs text-neutral-600 font-medium uppercase tracking-wider mb-2">Business Hours</p>
              <p className="text-sm text-neutral-500">Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-sm text-neutral-500">Sat: 9:00 AM – 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-neutral-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} InfraSpace. All rights reserved.</p>
          <p>Built by <a href="mailto:patrickngare@gmail.com" className="hover:text-secondary transition-colors">CROPGRAZE VENTURES</a></p>
        </div>
      </div>
    </footer>
  )
}
