# SKILL: React JS Construction Website — Technical Reference
**Developer:** CROPGRAZE VENTURES | patrickngare@gmail.com | 0713 589 262
**Stack:** React 18 + Vite + Tailwind CSS 3 + React Router v6 + Vercel

---

## 1. PROJECT BOOTSTRAP

```bash
# Scaffold
npm create vite@latest construction-site -- --template react
cd construction-site

# Core dependencies
npm install react-router-dom framer-motion @emailjs/browser react-helmet-async react-icons

# UI / Gallery
npm install yet-another-react-lightbox react-compare-slider

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# CMS
npm install @sanity/client @sanity/image-url
# OR
npm install contentful

# Dev tools
npm install -D eslint eslint-plugin-react prettier
```

---

## 2. VITE CONFIG (vite.config.js)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
})
```

---

## 3. TAILWIND CONFIG (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT: '#1B3A6B', light: '#2A5298', dark: '#102040' },
        secondary: { DEFAULT: '#E87722', light: '#F59340', dark: '#B85E10' },
        neutral:   { 50: '#F9F9F9', 100: '#F0F0F0', 800: '#2A2A2A', 900: '#111111' },
      },
      fontFamily: {
        sans:    ['Inter', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero-bg.webp')",
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
    },
  },
  plugins: [],
}
```

---

## 4. FOLDER STRUCTURE

```
src/
├── assets/
│   ├── images/          # Optimized .webp project photos
│   ├── icons/           # SVG icons
│   └── logo.svg
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileMenu.jsx
│   │   └── WhatsAppButton.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Badge.jsx
│   │   ├── Spinner.jsx
│   │   └── ErrorMessage.jsx
│   ├── sections/        # Large reusable page sections
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── CTABanner.jsx
│   │   └── TestimonialsStrip.jsx
│   ├── portfolio/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── BeforeAfterSlider.jsx
│   │   └── Lightbox.jsx
│   ├── blog/
│   │   ├── BlogCard.jsx
│   │   └── BlogGrid.jsx
│   └── contact/
│       ├── ContactForm.jsx
│       └── MapEmbed.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useContactForm.js
│   ├── useProjects.js
│   └── useBlogPosts.js
├── data/
│   ├── services.js
│   ├── projects.js
│   ├── team.js
│   └── testimonials.js
├── lib/
│   ├── emailjs.js       # EmailJS init & send helper
│   ├── sanity.js        # Sanity client config
│   └── contentful.js    # Contentful client config
├── utils/
│   ├── cn.js            # Tailwind className merger
│   ├── formatDate.js
│   └── slugify.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 5. MAIN ENTRY (main.jsx)

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
```

---

## 6. APP ROUTER (App.jsx)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar        from '@/components/layout/Navbar'
import Footer        from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ScrollToTop   from '@/components/layout/ScrollToTop'
import Spinner       from '@/components/ui/Spinner'

// Lazy-load all pages for code splitting
const Home         = lazy(() => import('@/pages/Home'))
const About        = lazy(() => import('@/pages/About'))
const Services     = lazy(() => import('@/pages/Services'))
const ServiceDetail= lazy(() => import('@/pages/ServiceDetail'))
const Portfolio    = lazy(() => import('@/pages/Portfolio'))
const Testimonials = lazy(() => import('@/pages/Testimonials'))
const Blog         = lazy(() => import('@/pages/Blog'))
const BlogPost     = lazy(() => import('@/pages/BlogPost'))
const Contact      = lazy(() => import('@/pages/Contact'))
const NotFound     = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Spinner fullPage />}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about"             element={<About />} />
          <Route path="/services"          element={<Services />} />
          <Route path="/services/:slug"    element={<ServiceDetail />} />
          <Route path="/portfolio"         element={<Portfolio />} />
          <Route path="/testimonials"      element={<Testimonials />} />
          <Route path="/blog"              element={<Blog />} />
          <Route path="/blog/:slug"        element={<BlogPost />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="*"                  element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  )
}
```

---

## 7. UTILITY: className merger (utils/cn.js)

```js
// Merge Tailwind classes safely (avoids conflicts)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Usage: <div className={cn('px-4 py-2', isActive && 'bg-primary text-white')} />
```

---

## 8. UI COMPONENTS

### Button.jsx
```jsx
import { cn } from '@/utils/cn'

const variants = {
  primary:   'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline:   'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost:     'text-primary hover:bg-primary/10',
}

const sizes = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-base',
  lg:  'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

### SectionHeader.jsx
```jsx
import { cn } from '@/utils/cn'

export default function SectionHeader({ eyebrow, title, subtitle, center = false, className }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-1">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-neutral-600 max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

### Spinner.jsx
```jsx
import { cn } from '@/utils/cn'

export default function Spinner({ fullPage = false }) {
  return (
    <div className={cn('flex items-center justify-center', fullPage && 'min-h-screen')}>
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )
}
```

---

## 9. LAYOUT COMPONENTS

### Navbar.jsx
```jsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import logo from '@/assets/logo.svg'

const navLinks = [
  { label: 'Home',         path: '/' },
  { label: 'About',        path: '/about' },
  { label: 'Services',     path: '/services' },
  { label: 'Portfolio',    path: '/portfolio' },
  { label: 'Blog',         path: '/blog' },
  { label: 'Contact',      path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-10" />
          </Link>
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `font-medium text-sm transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : scrolled ? 'text-neutral-800' : 'text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="hidden md:inline-flex bg-secondary text-white px-5 py-2 rounded-md font-semibold hover:bg-secondary-dark transition-colors text-sm">
            Get a Quote
          </Link>
          {/* Mobile hamburger */}
          <button className="md:hidden text-2xl text-primary" onClick={() => setMenuOpen(true)}>
            <HiMenu />
          </button>
        </div>
      </nav>
      <MobileMenu links={navLinks} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
```

### ScrollToTop.jsx
```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}
```

### WhatsAppButton.jsx
```jsx
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '254713589262'  // update to client's number
const MESSAGE = encodeURIComponent('Hello! I am interested in your construction services.')

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
```

---

## 10. CUSTOM HOOKS

### useScrollAnimation.js — Animate elements on scroll
```js
import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref       = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

// Usage in component:
// const { ref, visible } = useScrollAnimation()
// <div ref={ref} className={cn('transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} />
```

### useContactForm.js — EmailJS form logic
```js
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const INITIAL_STATE = { name: '', email: '', phone: '', message: '' }

export function useContactForm() {
  const [form,    setForm]    = useState(INITIAL_STATE)
  const [status,  setStatus]  = useState('idle')   // 'idle' | 'loading' | 'success' | 'error'
  const [error,   setError]   = useState(null)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form, reply_to: form.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_STATE)
    } catch (err) {
      setStatus('error')
      setError('Failed to send. Please try again or WhatsApp us directly.')
    }
  }

  return { form, status, error, handleChange, handleSubmit }
}
```

### useProjects.js — Filter portfolio projects
```js
import { useState, useMemo } from 'react'
import { projects } from '@/data/projects'

export function useProjects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filtered = useMemo(() =>
    activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  )

  return { filtered, categories, activeFilter, setActiveFilter }
}
```

---

## 11. DATA SHAPES (src/data/)

### services.js
```js
export const services = [
  {
    id: 1,
    slug: 'residential',
    title: 'Residential Construction',
    icon: 'FaHome',
    shortDesc: 'Custom homes built to your vision and budget.',
    fullDesc: '...',
    features: ['Custom floor plans', 'Quality materials', 'On-time delivery'],
    image: '/assets/images/residential.webp',
  },
  // commercial | renovation | landscaping
]
```

### projects.js
```js
export const projects = [
  {
    id: 1,
    slug: 'westlands-villa',
    title: 'Westlands Luxury Villa',
    category: 'Residential',      // Residential | Commercial | Renovation | Landscaping
    location: 'Westlands, Nairobi',
    duration: '8 months',
    year: 2024,
    description: '...',
    coverImage: '/assets/images/proj1-cover.webp',
    beforeImage: '/assets/images/proj1-before.webp',
    afterImage:  '/assets/images/proj1-after.webp',
    gallery: ['/assets/images/proj1-a.webp', '/assets/images/proj1-b.webp'],
    tags: ['Luxury', '5 Bedroom', 'Swimming Pool'],
  },
]
```

### testimonials.js
```js
export const testimonials = [
  {
    id: 1,
    name: 'John Kamau',
    role: 'Homeowner, Karen',
    rating: 5,
    quote: '...',
    image: '/assets/images/testimonial1.webp',
  },
]
```

---

## 12. SEO COMPONENT PATTERN (per page)

```jsx
import { Helmet } from 'react-helmet-async'

// Use inside every page component
<Helmet>
  <title>Portfolio | YourCompany — Construction Nairobi</title>
  <meta name="description" content="Browse our completed residential and commercial construction projects across Nairobi." />
  <meta property="og:title"       content="Portfolio | YourCompany" />
  <meta property="og:description" content="Browse our completed projects." />
  <meta property="og:image"       content="https://yoursite.com/assets/og-image.webp" />
  <meta property="og:url"         content="https://yoursite.com/portfolio" />
  <link rel="canonical"           href="https://yoursite.com/portfolio" />
</Helmet>
```

---

## 13. FRAMER MOTION PATTERNS

### Fade-up on mount
```jsx
import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

<motion.div variants={fadeUp} initial="hidden" animate="visible">
  {/* content */}
</motion.div>
```

### Staggered children (grid cards)
```jsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

<motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {projects.map(p => (
    <motion.div key={p.id} variants={item}>
      <ProjectCard project={p} />
    </motion.div>
  ))}
</motion.div>
```

### Page transition wrapper
```jsx
// Wrap every page's root element
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

---

## 14. BEFORE/AFTER SLIDER (BeforeAfterSlider.jsx)

```jsx
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

export default function BeforeAfterSlider({ before, after, alt }) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={before} alt={`Before — ${alt}`} />}
      itemTwo={<ReactCompareSliderImage src={after}  alt={`After — ${alt}`}  />}
      style={{ borderRadius: '8px', overflow: 'hidden' }}
    />
  )
}
```

---

## 15. CONTACT FORM (ContactForm.jsx)

```jsx
import { useContactForm } from '@/hooks/useContactForm'
import Button from '@/components/ui/Button'

const fields = [
  { name: 'name',    label: 'Full Name',    type: 'text',  placeholder: 'John Kamau' },
  { name: 'email',   label: 'Email',        type: 'email', placeholder: 'john@email.com' },
  { name: 'phone',   label: 'Phone',        type: 'tel',   placeholder: '0712 345 678' },
]

export default function ContactForm() {
  const { form, status, error, handleChange, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map(({ name, label, type, placeholder }) => (
        <div key={name}>
          <label className="block text-sm font-medium text-neutral-700 mb-1">{label}</label>
          <input
            type={type} name={name} value={form[name]}
            onChange={handleChange} placeholder={placeholder} required
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          rows={5} required placeholder="Tell us about your project..."
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      </div>
      {error   && <p className="text-red-500 text-sm">{error}</p>}
      {status === 'success' && <p className="text-green-600 text-sm font-medium">Message sent! We will get back to you within 24 hours.</p>}
      <Button type="submit" disabled={status === 'loading'} size="lg" className="w-full">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
```

---

## 16. ENVIRONMENT VARIABLES (.env)

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_GOOGLE_MAPS_EMBED_KEY=AIzaSy_xxxxxxxxxxxxx
VITE_SANITY_PROJECT_ID=xxxxxxxx
VITE_SANITY_DATASET=production
VITE_CONTENTFUL_SPACE_ID=xxxxxxxx
VITE_CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxx
VITE_WHATSAPP_NUMBER=254713589262
VITE_SITE_URL=https://yourclientsite.co.ke
```

> ⚠️ Add `.env` to `.gitignore`. Commit `.env.example` with empty values only.

---

## 17. PERFORMANCE RULES

```jsx
// 1. Lazy load images below the fold
<img src={project.image} alt={project.title} loading="lazy" decoding="async" />

// 2. Always use WebP format for images
// Convert: npx sharp-cli --input src/assets/*.jpg --output src/assets/ --format webp

// 3. Code-split every page (already done via React.lazy in App.jsx)

// 4. Memoize expensive list renders
import { memo } from 'react'
const ProjectCard = memo(function ProjectCard({ project }) { ... })

// 5. Avoid re-renders in filter — use useMemo (already in useProjects hook)

// 6. Preload hero image in index.html
// <link rel="preload" as="image" href="/assets/images/hero-bg.webp" />
```

---

## 18. GIT COMMIT CONVENTION

```
feat: add portfolio filter tabs
feat: add contact form with EmailJS
fix: navbar transparent on scroll
style: mobile menu animation
chore: add environment variables template
perf: lazy load portfolio images
docs: update README with setup instructions
```

---

## 19. DEPLOYMENT CHECKLIST

```bash
# Build & preview locally before deploying
npm run build
npm run preview

# Check build size
npx vite-bundle-visualizer

# Deploy to Vercel
npx vercel --prod

# Environment variables — add in Vercel dashboard:
# Settings → Environment Variables → add all VITE_* keys
```

**Domain connection (Truehost/Sasahost → Vercel):**
1. Vercel → Project Settings → Domains → Add `yourclient.co.ke`
2. Vercel gives you 2 nameservers (e.g. `ns1.vercel-dns.com`)
3. Login to Truehost/Sasahost → Domains → Manage → Change Nameservers
4. Paste Vercel nameservers → Save
5. Wait 5–30 min → SSL auto-provisions via Let's Encrypt ✅

---

## 20. LIGHTHOUSE TARGETS

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID / INP | < 200ms |

Run: `npx lighthouse https://yoursite.co.ke --view`

---

## CLAUDE CODE RULES FOR THIS PROJECT

- **ALWAYS** use the `@/` alias for imports — never use relative `../../`
- **NEVER** use inline styles — Tailwind classes only
- **NEVER** hardcode text content in JSX — pull from `/src/data/` files
- **ALWAYS** add `loading="lazy"` to images that are not above the fold
- **ALWAYS** handle loading, success, and error states in async operations
- **ALWAYS** wrap new pages in `<motion.main initial={{opacity:0}} animate={{opacity:1}}>` for page transitions
- **ALWAYS** include `<Helmet>` with title and description in every page
- **NEVER** use `<a>` for internal navigation — use React Router `<Link>`
- **ALWAYS** use `whileInView` + `viewport={{ once: true }}` for scroll animations — not `useEffect` scroll listeners
- **ALWAYS** commit to GitHub after completing each page with a clear commit message
- **ALWAYS** share Vercel preview URL with client after each page is complete
