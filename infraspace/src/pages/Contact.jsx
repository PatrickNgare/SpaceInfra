import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from '@/components/contact/ContactForm'
import MapEmbed from '@/components/contact/MapEmbed'
import PageHero from '@/components/ui/PageHero'
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from '@/utils/contact'

const contactInfo = [
  { icon: FiPhone, label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: FiMail,  label: 'Email', value: 'patrickngare@gmail.com', href: 'mailto:patrickngare@gmail.com' },
  { icon: FiMapPin, label: 'Address', value: 'Nairobi, Kenya', href: null },
  { icon: FiClock, label: 'Business Hours', value: 'Mon–Fri 8AM–6PM · Sat 9AM–3PM', href: null },
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

      {/* Main */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
              <p className="text-neutral-500 mb-8 text-sm">Fill in the form and we&rsquo;ll get back to you with a free quote.</p>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              {/* WhatsApp CTA */}
              <a
                href={whatsappHref('Hello! I would like to get a quote for a construction project.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-green-500 text-white p-5 rounded-xl hover:bg-green-600 transition-colors group"
              >
                <FaWhatsapp size={32} className="shrink-0" />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-white/80">Quickest way to reach us</p>
                </div>
                <span className="ml-auto text-white/60 group-hover:text-white transition-colors">→</span>
              </a>

              {/* Contact details */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">{label}</p>
                      {href
                        ? <a href={href} className="text-neutral-900 font-medium hover:text-primary transition-colors">{value}</a>
                        : <p className="text-neutral-900 font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <MapEmbed />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
