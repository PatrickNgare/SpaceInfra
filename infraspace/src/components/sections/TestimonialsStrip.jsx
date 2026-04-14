import { testimonials } from '@/data/testimonials'
import SectionHeader from '@/components/ui/SectionHeader'
import StarRating from '@/components/ui/StarRating'
import Avatar from '@/components/ui/Avatar'

// Duplicate for seamless loop
const track = [...testimonials, ...testimonials]

function TestimonialCard({ t }) {
  return (
    <div className="relative flex-shrink-0 w-[340px] bg-white rounded-xl p-8 shadow-sm border border-neutral-100 overflow-hidden mx-3">
      {/* Decorative quote */}
      <span className="absolute top-4 right-5 text-8xl font-serif leading-none text-secondary/8 select-none pointer-events-none">
        &ldquo;
      </span>
      <div className="relative z-10">
        <StarRating rating={t.rating} />
        <p className="text-neutral-600 text-sm leading-relaxed mt-5 mb-6">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
          <Avatar name={t.name} size="sm" />
          <div>
            <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
            <p className="text-neutral-400 text-xs mt-0.5">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsStrip() {
  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay-dark pointer-events-none" />

      <div className="relative">
        <div className="container mx-auto px-4 mb-14">
          <SectionHeader
            eyebrow="What Clients Say"
            title="Trusted by Homeowners & Developers"
            subtitle="Real feedback from real clients across Nairobi."
            center
          />
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative overflow-hidden mb-5">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-50 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {track.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (offset) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-50 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee2 hover:[animation-play-state:paused]">
            {track.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
