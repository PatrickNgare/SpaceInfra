import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/data/blog'

const ALL = 'All'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(ALL)

  const categories = useMemo(
    () => [ALL, ...new Set(blogPosts.map((p) => p.category))],
    []
  )

  const filtered = useMemo(
    () => activeCategory === ALL ? blogPosts : blogPosts.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>Blog | InfraSpace — Construction Tips & Insights</title>
        <meta name="description" content="Construction tips, cost guides, and expert advice from InfraSpace — Nairobi's trusted building company." />
        <link rel="canonical" href="https://infraspace.co.ke/blog" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-secondary" />
            <span className="text-secondary font-semibold text-xs uppercase tracking-[0.18em]">Expert Insights</span>
            <span className="w-6 h-px bg-secondary" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Construction Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides and expert advice for homeowners and developers in Kenya.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
