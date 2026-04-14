export const PHONE_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
  ? `+${import.meta.env.VITE_WHATSAPP_NUMBER}`
  : '+254713589262'

export const PHONE_DISPLAY = '+254 713 589 262'
export const PHONE_HREF = 'tel:+254713589262'

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '254713589262'

export function whatsappHref(message = 'Hello! I am interested in your construction services.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
