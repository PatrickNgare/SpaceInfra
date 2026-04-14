import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiCalendar } from 'react-icons/fi'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/utils/formatDate'

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/25 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-primary/20 text-sm font-medium">
          {post.title}
        </div>
        <div className="absolute top-3 left-3">
          <Badge>{post.category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
          <span className="flex items-center gap-1"><FiCalendar size={11} /> {formatDate(post.date)}</span>
          <span className="flex items-center gap-1"><FiClock size={11} /> {post.readTime}</span>
        </div>

        <h3 className="font-heading font-bold text-neutral-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-400">{post.author}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
