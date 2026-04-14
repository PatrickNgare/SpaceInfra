import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Spinner from '@/components/ui/Spinner'

const Home          = lazy(() => import('@/pages/Home'))
const About         = lazy(() => import('@/pages/About'))
const Services      = lazy(() => import('@/pages/Services'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const Portfolio     = lazy(() => import('@/pages/Portfolio'))
const Testimonials  = lazy(() => import('@/pages/Testimonials'))
const Blog          = lazy(() => import('@/pages/Blog'))
const BlogPost      = lazy(() => import('@/pages/BlogPost'))
const Contact       = lazy(() => import('@/pages/Contact'))
const NotFound      = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Spinner fullPage />}>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/about"            element={<About />} />
          <Route path="/services"         element={<Services />} />
          <Route path="/services/:slug"   element={<ServiceDetail />} />
          <Route path="/portfolio"        element={<Portfolio />} />
          <Route path="/testimonials"     element={<Testimonials />} />
          <Route path="/blog"             element={<Blog />} />
          <Route path="/blog/:slug"       element={<BlogPost />} />
          <Route path="/contact"          element={<Contact />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  )
}
