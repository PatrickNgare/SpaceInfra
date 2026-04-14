import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import CTABanner from '@/components/sections/CTABanner'
import BlogCard from '@/components/blog/BlogCard'
import Badge from '@/components/ui/Badge'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/utils/formatDate'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 min-h-screen container mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-neutral-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary font-semibold hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  // Render basic markdown: ## headings and paragraph breaks
  const renderContent = (text) =>
    text.split('\n\n').map((block, i) => {
      if (block.startsWith('## '))
        return <h2 key={i} className="font-heading text-xl font-bold text-neutral-900 mt-8 mb-3">{block.replace('## ', '')}</h2>
      if (block.startsWith('| '))
        return (
          <div key={i} className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              {block.split('\n').filter(r => !r.match(/^\|[-|]+\|$/)).map((row, j) => {
                const cells = row.split('|').filter(Boolean).map(c => c.trim())
                return j === 0
                  ? <thead key={j}><tr>{cells.map((c, k) => <th key={k} className="border border-neutral-200 px-3 py-2 text-left bg-neutral-50 font-semibold">{c}</th>)}</tr></thead>
                  : <tbody key={j}><tr>{cells.map((c, k) => <td key={k} className="border border-neutral-200 px-3 py-2">{c}</td>)}</tr></tbody>
              })}
            </table>
          </div>
        )
      return <p key={i} className="text-neutral-600 leading-relaxed mb-4">{block}</p>
    })

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>{post.title} | InfraSpace Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <link rel="canonical" href={`https://infraspace.co.ke/blog/${post.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative container mx-auto px-4 max-w-3xl text-white">
          <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 text-sm transition-colors">
            <FiArrowLeft size={14} /> Back to Blog
          </Link>
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-5 leading-snug">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-300">
            <span className="flex items-center gap-1.5"><FiUser size={13} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><FiClock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-neutral max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-neutral-100">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-primary/5 border border-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </motion.main>
  )
}
