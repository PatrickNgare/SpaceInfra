import { memo } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import Badge from '@/components/ui/Badge'

const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div className="relative h-64 bg-primary-dark overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 grid-overlay" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute top-3 left-3">
          <Badge>{project.category}</Badge>
        </div>

        {project.gallery?.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
            {project.gallery.length} photos
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading font-bold text-white text-base leading-snug group-hover:text-secondary transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-white/60 text-xs mt-1">
            <FiMapPin size={11} />
            {project.location}
          </div>
        </div>
      </div>

      {/* Tags strip */}
      <div className="px-4 py-3 flex gap-2 flex-wrap border-t border-neutral-100">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
})

export default ProjectCard
