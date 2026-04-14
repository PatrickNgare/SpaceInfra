import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaBuilding, FaTools, FaLeaf, FaArrowRight, FaShieldAlt, FaUsers, FaClock, FaMedal } from 'react-icons/fa'

import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import CTABanner from '@/components/sections/CTABanner'
import TestimonialsStrip from '@/components/sections/TestimonialsStrip'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, stagger } from '@/utils/motion'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

const iconMap = { FaHome, FaBuilding, FaTools, FaLeaf }

const whyUs = [
  { icon: FaShieldAlt, title: 'Quality Guaranteed',  desc: 'We use only certified materials and back every project with a structural warranty.' },
  { icon: FaUsers,     title: 'Expert Team',         desc: 'Our architects, engineers, and craftsmen bring decades of combined experience.' },
  { icon: FaClock,     title: 'On-Time Delivery',    desc: 'We commit to timelines and communicate proactively — no surprises at handover.' },
  { icon: FaMedal,     title: 'Award-Winning Work',  desc: 'Recognised for excellence in construction and design across East Africa.' },
]

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>InfraSpace — Construction Company Nairobi</title>
        <meta name="description" content="Premium residential and commercial construction across Nairobi. Quality homes, office blocks, renovations, and landscaping. Get a free quote today." />
        <meta property="og:title"       content="InfraSpace — Construction Company Nairobi" />
        <meta property="og:description" content="Building quality homes and commercial spaces across Nairobi." />
        <link rel="canonical" href="https://infraspace.co.ke" />
      </Helmet>

      <Hero />
      <StatsBar />

      {/* ── Services ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Services"
            subtitle="From the ground up to the finishing touches — we handle every aspect of your project."
            center
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div key={service.id} variants={fadeUp}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group relative block bg-white border border-neutral-100 rounded-xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Ghost number watermark */}
                    <span className="absolute top-3 right-4 text-7xl font-heading font-bold text-neutral-100 group-hover:text-white/5 transition-colors duration-300 select-none leading-none pointer-events-none">
                      {String(service.id).padStart(2, '0')}
                    </span>

                    {/* Dark hover fill */}
                    <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    <div className="relative z-10">
                      <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
                        {Icon && <Icon className="text-secondary" size={19} />}
                      </div>
                      <h3 className="font-heading font-bold text-neutral-900 group-hover:text-white text-base mb-2 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-500 group-hover:text-white/60 text-sm leading-relaxed mb-5 transition-colors duration-300">
                        {service.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-secondary text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                        Learn more <FaArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay-dark pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-end justify-between mb-14">
            <SectionHeader
              eyebrow="Our Work"
              title="Featured Projects"
              subtitle="Real projects. Real results. Click to explore the full gallery."
            />
            <Link
              to="/portfolio"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors shrink-0 mb-14 group"
            >
              View All Projects
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cinematic hero card — first real project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <Link
              to="/portfolio"
              className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
              style={{ height: 'clamp(300px, 45vw, 520px)' }}
            >
              <div className="absolute inset-0 bg-primary-dark" />
              <img
                src={featuredProjects[1].coverImage}
                alt={featuredProjects[1].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
              />
              {/* Layered gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />

              {/* Category + photo count */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="bg-secondary text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                  {featuredProjects[1].category}
                </span>
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded font-medium">
                  {featuredProjects[1].gallery.length} photos
                </span>
              </div>

              {/* Ghost project number */}
              <div className="absolute top-4 right-6 text-white/10 font-heading font-bold text-8xl leading-none select-none">
                {String(featuredProjects[1].id).padStart(2, '0')}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-secondary text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  {featuredProjects[1].location}
                </p>
                <h3 className="font-heading font-bold text-white text-2xl md:text-3xl lg:text-4xl group-hover:text-secondary transition-colors duration-300 mb-3 max-w-xl">
                  {featuredProjects[1].title}
                </h3>
                <p className="text-white/60 text-sm max-w-lg leading-relaxed hidden md:block">
                  {featuredProjects[1].description}
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-white/60 text-sm group-hover:text-secondary transition-colors duration-200 font-medium">
                  View Gallery <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[featuredProjects[0], featuredProjects[2]].map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link
                  to="/portfolio"
                  className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 bg-primary-dark overflow-hidden">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 grid-overlay opacity-30" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    {project.gallery?.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
                        {project.gallery.length} photos
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading font-bold text-white text-base group-hover:text-secondary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-xs mt-1">{project.location} · {project.duration}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
              View All Projects <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — header + intro */}
            <div>
              <SectionHeader
                eyebrow="Why InfraSpace"
                title="Built on Trust & Excellence"
                subtitle="We don't just build structures — we build relationships that last a lifetime."
              />
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors group"
              >
                Our Story <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — 2×2 grid of cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative bg-white border border-neutral-100 rounded-xl p-7 hover:shadow-lg hover:border-primary/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Ghost number */}
                  <span className="absolute top-3 right-4 text-6xl font-heading font-bold text-neutral-100 select-none leading-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="text-secondary" size={17} />
                    </div>
                    <h3 className="font-heading font-bold text-neutral-900 text-sm mb-2">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsStrip />
      <CTABanner />
    </motion.main>
  )
}
