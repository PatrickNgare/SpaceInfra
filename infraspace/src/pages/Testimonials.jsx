import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'
import StarRating from '@/components/ui/StarRating'
import Avatar from '@/components/ui/Avatar'
import PageHero from '@/components/ui/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import { stagger, fadeUp } from '@/utils/motion'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>Testimonials | InfraSpace — Construction Nairobi</title>
        <meta name="description" content="Read what our clients say about InfraSpace — real feedback from homeowners and developers across Nairobi." />
        <link rel="canonical" href="https://infraspace.co.ke/testimonials" />
      </Helmet>

      <PageHero
        eyebrow="Client Feedback"
        title="What Our Clients Say"
        subtitle="Don't take our word for it — hear directly from the people we've built for."
      />

      {/* Stats Banner */}
      <section className="relative bg-primary-dark py-14 overflow-hidden">
        <div className="absolute inset-0 dot-overlay pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-px">
            {[['150+', 'Happy Clients'], ['4.9/5', 'Average Rating'], ['98%', 'Would Recommend']].map(([val, label], i) => (
              <div
                key={label}
                className={`text-center px-14 py-6 ${i < 2 ? 'border-r border-white/10' : ''}`}
              >
                <p className="font-heading font-bold text-5xl text-secondary leading-none">{val}</p>
                <div className="w-6 h-0.5 bg-secondary/30 mx-auto my-2.5" />
                <p className="text-white/45 text-xs uppercase tracking-[0.18em] font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl p-7 shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1.5 hover:border-secondary/10 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <FaQuoteLeft className="text-secondary/20 mb-4" size={32} />
                <StarRating rating={t.rating} />
                <p className="text-neutral-600 leading-relaxed text-sm flex-1 my-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <Avatar name={t.name} size="md" />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                    <p className="text-neutral-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews placeholder */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Google Reviews"
            title="Find Us on Google"
            subtitle="Search 'InfraSpace Nairobi' on Google Maps to see all our reviews."
            center
          />
          <div className="mt-6 inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-6 py-3 shadow-sm">
            <StarRating rating={5} size={18} />
            <span className="font-bold text-neutral-900">4.9</span>
            <span className="text-neutral-500 text-sm">on Google Reviews</span>
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.main>
  )
}
