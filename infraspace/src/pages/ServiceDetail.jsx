import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { FaHome, FaBuilding, FaTools, FaLeaf, FaCheckCircle, FaArrowLeft, FaWhatsapp } from 'react-icons/fa'
import CTABanner from '@/components/sections/CTABanner'
import { whatsappHref } from '@/utils/contact'
import { services } from '@/data/services'

const iconMap = { FaHome, FaBuilding, FaTools, FaLeaf }

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="pt-32 min-h-screen container mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-neutral-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary font-semibold hover:underline">← Back to Services</Link>
      </div>
    )
  }

  const Icon = iconMap[service.icon]
  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>{service.title} | InfraSpace</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://infraspace.co.ke/services/${service.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <Link to="/services" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 text-sm transition-colors">
            <FaArrowLeft size={12} /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            {Icon && (
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Icon className="text-secondary" size={26} />
              </div>
            )}
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Service</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
                <p className="text-neutral-600 leading-relaxed text-lg mb-8">{service.fullDesc}</p>

                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">What&rsquo;s Included</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-neutral-700">
                      <FaCheckCircle className="text-secondary shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Image placeholder */}
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 h-72 flex items-center justify-center text-primary/30 text-sm font-medium border border-primary/10">
                  Project photos will appear here
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-28 space-y-5"
              >
                {/* CTA Card */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-heading font-bold text-lg mb-2">Get a Free Quote</h3>
                  <p className="text-neutral-200 text-sm mb-5">Tell us about your project and we&rsquo;ll get back to you within 24 hours.</p>
                  <Link to="/contact"
                    className="block text-center bg-secondary text-white px-5 py-3 rounded-md font-semibold hover:bg-secondary-dark transition-colors mb-3"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={whatsappHref(`Hello, I am interested in ${service.title}`)}
                    target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp size={18} /> WhatsApp Us
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h4 className="font-heading font-bold text-neutral-900 mb-4">Other Services</h4>
                  <ul className="space-y-3">
                    {others.map((s) => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`}
                          className="flex items-center justify-between text-sm text-neutral-700 hover:text-primary transition-colors group"
                        >
                          <span>{s.title}</span>
                          <span className="text-neutral-300 group-hover:text-primary transition-colors">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.main>
  )
}
