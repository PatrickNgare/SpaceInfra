# SKILL: House Construction Company — React JS Marketing Website
**Developer:** CROPGRAZE VENTURES  
**Contact:** patrickngare@gmail.com | 0713 589 262  
**Stack:** React JS (Vite) + Tailwind CSS + Vercel  

---

## PROJECT OVERVIEW

A modern, fast, mobile-first marketing website for a house construction company built in React JS. The site showcases the client's projects, services, and expertise to attract residential and commercial clients.

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | React JS (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Animations | Framer Motion |
| Contact Form | EmailJS |
| Blog/CMS | Contentful or Sanity (free tier) |
| Maps | Google Maps Embed API |
| Hosting | Vercel (free tier) |
| Domain | Truehost Kenya / Sasahost (M-Pesa) |
| Repo | GitHub (private) |
| Design | Figma (free tier) |

---

## FOLDER STRUCTURE

```
project-root/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Images, logos, icons
│   ├── components/      # Reusable components (Navbar, Footer, Button, Card)
│   ├── pages/           # One file per page
│   ├── data/            # Static JSON data (services, projects, team, testimonials)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Routes defined here
│   └── main.jsx         # Entry point
├── .env                 # API keys (EmailJS, Google Maps) — never commit
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## PAGES & COMPONENTS

### Pages (in build order)
1. `Home.jsx`
2. `About.jsx`
3. `Services.jsx` (parent) + `ServiceDetail.jsx` (child)
4. `Portfolio.jsx`
5. `Testimonials.jsx`
6. `Blog.jsx` + `BlogPost.jsx`
7. `Contact.jsx`

### Global Components (build these first)
- `Navbar.jsx` — sticky, mobile hamburger menu
- `Footer.jsx` — links, socials, contact info
- `WhatsAppButton.jsx` — floating bottom-right button
- `ScrollToTop.jsx` — scroll to top on route change
- `SEOHead.jsx` — dynamic meta tags per page

### Reusable UI Components
- `Button.jsx` — primary / secondary variants
- `SectionHeader.jsx` — consistent section titles
- `ProjectCard.jsx` — used in Portfolio
- `TestimonialCard.jsx` — used in Testimonials
- `ServiceCard.jsx` — used in Services
- `BeforeAfterSlider.jsx` — image comparison slider
- `ImageLightbox.jsx` — full-screen gallery viewer

---

## DEPENDENCIES TO INSTALL

```bash
# Core
npm create vite@latest project-name -- --template react
cd project-name
npm install

# Routing
npm install react-router-dom

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Animations
npm install framer-motion

# Contact form
npm install @emailjs/browser

# Image lightbox
npm install yet-another-react-lightbox

# Before/after slider
npm install react-compare-slider

# SEO
npm install react-helmet-async

# Icons
npm install react-icons

# CMS (choose one)
npm install contentful
# OR
npm install @sanity/client
```

---

## ROUTING SETUP (App.jsx)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  )
}
```

---

## PAGE-BY-PAGE SECTIONS

### 1. Home Page
- Hero (full-screen image, headline, CTA buttons)
- Stats Bar (years of experience, projects done, happy clients)
- Services Overview (cards grid)
- Featured Projects (3–4 portfolio cards)
- Why Choose Us (icons + text)
- Testimonials Strip (3 quotes)
- CTA Banner ("Ready to Build? Contact Us Today")

### 2. About Page
- Hero banner
- Company story (text + image)
- Mission & Vision
- Core Values
- Team Grid (photo, name, role)
- Certifications / Awards

### 3. Services Page
- Services grid (4 cards: Residential, Commercial, Renovation, Landscaping)
- Each card links to `/services/:slug`
- ServiceDetail page: description, process steps, gallery, CTA

### 4. Portfolio Page
- Filter tabs (All, Residential, Commercial, Renovation, Landscaping)
- Masonry or grid image gallery
- Click opens BeforeAfterSlider or ImageLightbox
- Project detail: name, location, duration, description

### 5. Testimonials Page
- Grid of testimonial cards (photo, name, rating stars, quote)
- Google Reviews embed or screenshot strip

### 6. Blog Page
- Grid of blog post cards (image, title, date, excerpt)
- BlogPost page: full article, author, date, related posts

### 7. Contact Page
- EmailJS contact form (name, email, phone, message)
- Google Maps embed (office location)
- Office address, phone, email
- WhatsApp direct link
- Business hours

---

## ENVIRONMENT VARIABLES (.env)

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_token
```

> ⚠️ Always add `.env` to `.gitignore` — never push API keys to GitHub

---

## EMAILJS CONTACT FORM PATTERN

```jsx
import emailjs from '@emailjs/browser'

const sendEmail = async (formData) => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
}
```

---

## TAILWIND CONFIG (tailwind.config.js)

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3A6B",      // deep blue — replace with client brand color
        secondary: "#E87722",    // orange accent — replace with client brand color
        dark: "#111111",
        light: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
```

> ⚠️ Update `primary` and `secondary` colors once client provides brand guidelines

---

## PERFORMANCE CHECKLIST

- [ ] All images compressed (use WebP format)
- [ ] Lazy load images below the fold
- [ ] React.lazy() + Suspense for page-level code splitting
- [ ] No unused dependencies
- [ ] Lighthouse score ≥ 90 on Performance, SEO, Accessibility
- [ ] Mobile tested on real Android & iPhone devices
- [ ] All forms tested end-to-end
- [ ] All links work (no 404s)
- [ ] favicon set
- [ ] Page titles & meta descriptions set per page

---

## DEPLOYMENT (Vercel)

```bash
# Option 1 — Vercel CLI
npm install -g vercel
vercel --prod

# Option 2 — GitHub Integration (recommended)
# 1. Push code to GitHub
# 2. Go to vercel.com → Import Project → Select repo
# 3. Add environment variables in Vercel dashboard
# 4. Deploy — auto-deploys on every git push to main
```

**Custom Domain (Truehost/Sasahost):**
1. Buy domain in Kenya (pay via M-Pesa ~KES 1,000/year)
2. In Vercel → Settings → Domains → Add domain
3. Copy Vercel nameservers
4. Paste nameservers in Truehost/Sasahost DNS settings
5. Wait 5–30 minutes — SSL activates automatically ✅

---

## DEVELOPMENT PHASES & TIMELINE

| Week | Phase | Tasks |
|---|---|---|
| 1 | Kickoff | Sign contract, collect 50% deposit, gather content from client |
| 1–2 | Design | Figma wireframes → mockups → client approval |
| 3 | Dev Setup | Vite scaffold, Tailwind, routing, folder structure, connect Vercel |
| 3–6 | Development | Build page by page (Navbar → Footer → Home → About → Services → Portfolio → Blog → Contact) |
| 7 | Testing | Cross-browser, mobile, forms, Lighthouse, bug fixes |
| 8 | Launch | Domain setup, final handover, collect 20% balance |

---

## PAYMENT MILESTONES

| Milestone | % | Amount |
|---|---|---|
| On signing agreement | 50% | KES 40,000 |
| Design approval | 30% | KES 24,000 |
| Website launch & handover | 20% | KES 16,000 |
| **TOTAL** | **100%** | **KES 80,000** |

---

## CONTENT CHECKLIST (Request from Client)

- [ ] Company logo (PNG + SVG formats)
- [ ] Project photos — minimum 20 high-quality images (before & after preferred)
- [ ] List of services with descriptions
- [ ] Team photos + names + job titles
- [ ] 5–10 client testimonials (name, quote, optional photo)
- [ ] Company address & Google Maps location
- [ ] Social media links (Facebook, Instagram, LinkedIn, Twitter/X)
- [ ] WhatsApp business number
- [ ] Preferred website colors (or existing brand guide)
- [ ] 5 initial blog post topics or articles

---

## HANDOVER CHECKLIST

- [ ] Final 20% payment received
- [ ] GitHub repo access transferred to client
- [ ] Vercel project ownership transferred or shared
- [ ] Domain login credentials shared
- [ ] CMS login credentials shared (Contentful/Sanity)
- [ ] EmailJS account credentials shared
- [ ] 1-hour screen-share training done
- [ ] Basic maintenance guide document shared
- [ ] 2-month support window communicated (bug fixes only)

---

## NOTES FOR CLAUDE CODE

- Always build **Navbar and Footer first** before any pages
- Use **Tailwind utility classes only** — no custom CSS unless absolutely necessary
- Keep components **small and reusable** — one responsibility per component
- Store all static content (services list, team, testimonials) in `/src/data/*.js` files — never hardcode in JSX
- Use **React Router `<Link>`** not `<a>` for internal navigation
- Always handle **loading and error states** on async operations
- Test on **mobile first** — use Tailwind's `sm:`, `md:`, `lg:` breakpoints
- Share **Vercel preview URLs** with client after completing each page for early feedback
- Commit to GitHub **after every completed page** with clear commit messages
- Never commit `.env` file — use `.env.example` with empty values for documentation
