import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMapPin, FiClock, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import FilterTabs from '@/components/portfolio/FilterTabs'
import ProjectCard from '@/components/portfolio/ProjectCard'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { useProjects } from '@/hooks/useProjects'

export default function Portfolio() {
  const { filtered, categories, activeFilter, setActiveFilter } = useProjects()
  const [selected, setSelected] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  const openProject = (project) => {
    setSelected(project)
    setActiveImg(0)
  }

  const closeProject = () => {
    setSelected(null)
    setActiveImg(0)
  }

  const gallery = selected?.gallery?.length ? selected.gallery : (selected?.coverImage ? [selected.coverImage] : [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>Portfolio | InfraSpace — Construction Nairobi</title>
        <meta name="description" content="Browse our completed residential, commercial, renovation, and landscaping projects across Nairobi." />
        <link rel="canonical" href="https://infraspace.co.ke/portfolio" />
      </Helmet>

      <PageHero
        eyebrow="Our Work"
        title="Project Portfolio"
        subtitle="Real projects, real results — click any project to see the full gallery."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FilterTabs categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={openProject} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-neutral-500 py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main image */}
              <div className="relative h-72 md:h-96 bg-primary-dark rounded-t-2xl overflow-hidden">
                {gallery.length > 0 ? (
                  <>
                    <img
                      key={activeImg}
                      src={gallery[activeImg]}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Prev / Next arrows */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImg(i => (i - 1 + gallery.length) % gallery.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                        >
                          <FiChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => setActiveImg(i => (i + 1) % gallery.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                        >
                          <FiChevronRight size={20} />
                        </button>
                        {/* Dot indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {gallery.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveImg(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white w-4' : 'bg-white/40'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 grid-overlay" />
                )}

                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors z-10"
                  aria-label="Close"
                >
                  <FiX size={18} />
                </button>

                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {selected.category}
                  </span>
                </div>
              </div>

              {/* Thumbnail strip */}
              {gallery.length > 1 && (
                <div className="flex gap-2 px-6 pt-4 overflow-x-auto pb-1">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? 'border-secondary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Details */}
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">{selected.title}</h2>
                <div className="flex flex-wrap gap-5 mb-5">
                  {[
                    { Icon: FiMapPin,   val: selected.location },
                    { Icon: FiClock,    val: selected.duration },
                    { Icon: FiCalendar, val: selected.year },
                  ].map(({ Icon, val }) => (
                    <div key={val} className="flex items-center gap-2 text-sm text-neutral-600">
                      <Icon className="text-secondary shrink-0" size={14} />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-5">{selected.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </motion.main>
  )
}
