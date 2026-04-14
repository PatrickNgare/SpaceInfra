import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaBuilding, FaTools, FaLeaf, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { fadeUp, stagger } from '@/utils/motion'
import { services } from '@/data/services'

const iconMap = { FaHome, FaBuilding, FaTools, FaLeaf }

const process = [
  { step: '01', title: 'Initial Consultation',  desc: 'We meet to understand your vision, budget, and timeline.' },
  { step: '02', title: 'Design & Planning',      desc: 'Our architects produce detailed drawings and cost estimates.' },
  { step: '03', title: 'Agreement & Deposit',    desc: 'We sign a contract, agree on milestones, and commence work.' },
  { step: '04', title: 'Construction',           desc: 'Our team builds to spec with weekly progress updates to you.' },
  { step: '05', title: 'Quality Inspection',     desc: 'Thorough checks at every stage before proceeding.' },
  { step: '06', title: 'Handover',               desc: 'We walk you through the completed project and hand over all documentation.' },
]

export default function Services() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>Services | InfraSpace — Construction Nairobi</title>
        <meta name="description" content="Residential construction, commercial building, renovation, and landscaping services in Nairobi. Get a free quote from InfraSpace today." />
        <link rel="canonical" href="https://infraspace.co.ke/services" />
      </Helmet>

      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="End-to-end construction services delivered by experienced professionals."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div key={service.id} variants={fadeUp}
                  className="group bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="h-3 bg-gradient-to-r from-primary to-secondary" />
                  <div className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                        {Icon && <Icon className="text-primary group-hover:text-white transition-colors" size={24} />}
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading font-bold text-xl text-neutral-900 mb-2">{service.title}</h2>
                        <p className="text-neutral-600 leading-relaxed mb-5">{service.fullDesc}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                              <FaCheckCircle className="text-secondary shrink-0" size={14} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
                        >
                          Learn More <FaArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Construction Process"
            subtitle="A clear, structured approach that keeps you informed at every stage."
            center
          />
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
          >
            {process.map((p) => (
              <motion.div key={p.step} variants={fadeUp} className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm">
                <span className="font-heading font-bold text-4xl text-primary/10">{p.step}</span>
                <h3 className="font-heading font-bold text-neutral-900 mt-2 mb-2">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </motion.main>
  )
}
