import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '254713589262'
const MESSAGE = encodeURIComponent('Hello! I am interested in your construction services.')

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
