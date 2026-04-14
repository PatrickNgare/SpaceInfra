import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import ContactForm from '@/components/contact/ContactForm'
import MapEmbed from '@/components/contact/MapEmbed'
import PageHero from '@/components/ui/PageHero'
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from '@/utils/contact'
import { fadeUp, stagger } from '@/utils/motion'

const contactInfo = [
  { icon: FiPhone,  label: 'Phone',          value: PHONE_DISPLAY,              href: PHONE_HREF },
  { icon: FiMail,   label: 'Email',           value: 'patrickngare@gmail.com',   href: 'mailto:patrickngare@gmail.com' },
  { icon: FiMapPin, label: 'Address',         value: 'Nairobi, Kenya',            href: null },
  { icon: FiClock,  label: 'Business Hours',  value: 'Mon–Fri 8AM–6PM · Sat 9AM–3PM', href: null },
]

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Helmet>
        <title>Contact Us | InfraSpace — Construction Nairobi</title>
        <meta name="description" content="Get in touch with InfraSpace for a free construction quote. Call, WhatsApp, or fill in the form — we respond within 24 hours." />
        <link rel="canonical" href="https://infraspace.co.ke/contact" />
      </Helmet>

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Ready to start your project? We respond within 24 hours."
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* ── Left: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 tracking-tight">Send Us a Message</h2>
                <p className="text-neutral-500 mt-2 text-sm">Fill in the form and we&rsquo;ll get back to you with a free, no-obligation quote.</p>
                <div className="mt-4 h-px w-12 bg-secondary rounded-full" />
              </div>
              <ContactForm />
            </motion.div>

            {/* ── Right: Info ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-5"
            >
              {/* WhatsApp CTA */}
              <motion.a
                variants={fadeUp}
                href={whatsappHref('Hello! I would like to get a quote for a construction project.')}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-[#128C7E] text-white p-5 rounded-2xl hover:bg-[#075E54] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#128C7E]/25 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <FaWhatsapp size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/70 text-xs mt-0.5">Quickest way to reach us</p>
                </div>
                <FaArrowRight size={13} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0" />
              </motion.a>

              {/* Contact details card */}
              <motion.div
                variants={fadeUp}
                className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden"
              >
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <div
                    key={label}
                    className={`flex items-start gap-4 p-5 ${i < contactInfo.length - 1 ? 'border-b border-neutral-100' : ''}`}
                  >
                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="text-neutral-900 font-medium text-sm hover:text-secondary transition-colors">{value}</a>
                        : <p className="text-neutral-900 font-medium text-sm">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Map */}
              <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-neutral-100 shadow-sm">
                <MapEmbed />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.main>
  )
}
