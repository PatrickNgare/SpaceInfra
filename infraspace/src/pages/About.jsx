import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'
import PageHero from '@/components/ui/PageHero'
import Avatar from '@/components/ui/Avatar'
import CTABanner from '@/components/sections/CTABanner'
import { fadeUp, stagger } from '@/utils/motion'
import { team } from '@/data/team'

const values = [
  { title: 'Integrity',    desc: 'We are honest about costs, timelines, and what is achievable.' },
  { title: 'Quality',      desc: 'We never cut corners — every project is built to last.' },
  { title: 'Innovation',   desc: 'We embrace modern techniques and sustainable materials.' },
  { title: 'Client Focus', desc: 'Your satisfaction drives every decision we make on site.' },
  { title: 'Safety',       desc: 'Zero-accident worksite culture — every day, every project.' },
  { title: 'Teamwork',     desc: 'Our strength lies in a coordinated, experienced team.' },
]

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>About Us | InfraSpace — Construction Nairobi</title>
        <meta name="description" content="Learn about InfraSpace — our story, mission, values, and the expert team behind every construction project in Nairobi." />
        <link rel="canonical" href="https://infraspace.co.ke/about" />
      </Helmet>

      <PageHero
        eyebrow="Our Story"
        title="About InfraSpace"
        subtitle="15 years of building homes, offices, and trust across Kenya."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Built on a Foundation of Excellence
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-5">
                InfraSpace was founded in 2009 with a simple mission: to deliver construction projects in Kenya that meet international standards without compromising on affordability. From our first residential project in Karen, we have grown into one of Nairobi&rsquo;s most trusted construction firms.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-5">
                Over 15 years, we have completed more than 200 projects ranging from single-family homes to multi-storey commercial complexes. Every project is delivered by a dedicated team of architects, engineers, and skilled craftsmen who share a commitment to getting it right the first time.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We are registered with the National Construction Authority (NCA) and comply with all Kenya Building Code requirements. Our clients trust us not just with their buildings — but with their investments and their families.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden h-[420px]"
            >
              <img
                src="/assets/images/masaimara1.jpeg"
                alt="InfraSpace project work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
              {/* Stats overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px bg-white/10">
                {[
                  { value: '15+',  caption: 'Years in Business' },
                  { value: '200+', caption: 'Projects Delivered' },
                  { value: '150+', caption: 'Happy Clients' },
                  { value: '50+',  caption: 'Expert Professionals' },
                ].map(({ value, caption }) => (
                  <div key={caption} className="bg-primary-dark/70 backdrop-blur-sm p-4 text-center">
                    <p className="font-heading font-bold text-3xl text-secondary">{value}</p>
                    <p className="text-white/70 text-xs mt-0.5">{caption}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                letter: 'M', color: 'bg-primary/10 text-primary', title: 'Our Mission',
                text: 'To deliver construction projects that exceed client expectations through exceptional craftsmanship, transparent communication, and unwavering commitment to quality — on time and on budget.',
              },
              {
                letter: 'V', color: 'bg-secondary/10 text-secondary', title: 'Our Vision',
                text: 'To be the leading construction company in East Africa — recognised for transforming spaces, improving lives, and building communities that stand the test of time.',
              },
            ].map(({ letter, color, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm"
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                  <span className="font-heading font-bold text-lg">{letter}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles behind every brick we lay and every promise we keep."
            center
          />
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group relative flex gap-4 p-6 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-secondary/15 transition-all duration-300 overflow-hidden"
              >
                {/* Orange bottom sweep */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaCheckCircle className="text-secondary" size={15} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-neutral-900 mb-1">{v.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="The People" title="Meet Our Team" subtitle="The experts who bring your vision to life." center />
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={fadeUp}
                className="group relative bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo or gradient placeholder */}
                <div className="relative h-52 bg-primary-dark overflow-hidden">
                  {member.image && !member.image.includes('team') ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <>
                      <div className="absolute inset-0 dot-overlay" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Avatar name={member.name} size="lg" />
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </div>
                <div className="relative p-5">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <h4 className="font-heading font-bold text-neutral-900">{member.name}</h4>
                  <p className="text-secondary text-xs font-semibold uppercase tracking-wider mt-0.5 mb-2">{member.role}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold mb-8">Registered & Certified</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['NCA Registered', 'Kenya Building Code Compliant', 'ISO 9001 Quality', 'OSHA Safety Certified'].map((cert) => (
              <span key={cert} className="bg-primary/5 border border-primary/20 text-primary text-sm font-semibold px-5 py-2 rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.main>
  )
}
