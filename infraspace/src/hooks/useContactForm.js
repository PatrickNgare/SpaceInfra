import { useState } from 'react'
import emailjs from '@emailjs/browser'

const INITIAL_STATE = { name: '', email: '', phone: '', message: '' }

export function useContactForm() {
  const [form,   setForm]   = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle')  // 'idle' | 'loading' | 'success' | 'error'
  const [error,  setError]  = useState(null)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form, reply_to: form.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_STATE)
    } catch {
      setStatus('error')
      setError('Failed to send. Please try again or WhatsApp us directly.')
    }
  }

  return { form, status, error, handleChange, handleSubmit }
}
