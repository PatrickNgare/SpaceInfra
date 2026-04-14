import { useContactForm } from '@/hooks/useContactForm'
import Button from '@/components/ui/Button'

const inputClass = [
  'w-full px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400',
  'bg-neutral-50 border border-neutral-200 rounded-xl',
  'focus:outline-none focus:bg-white focus:border-secondary/50 focus:ring-2 focus:ring-secondary/15',
  'transition-all duration-200',
].join(' ')

const labelClass = 'block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2'

const fields = [
  { name: 'name',  label: 'Full Name', type: 'text',  placeholder: 'John Kamau' },
  { name: 'email', label: 'Email',     type: 'email', placeholder: 'john@email.com' },
  { name: 'phone', label: 'Phone',     type: 'tel',   placeholder: '0712 345 678' },
]

export default function ContactForm() {
  const { form, status, error, handleChange, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map(({ name, label, type, placeholder }) => (
        <div key={name}>
          <label className={labelClass}>{label}</label>
          <input
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className={inputClass}
          />
        </div>
      ))}

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder="Tell us about your project — type, size, location, timeline..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
      )}
      {status === 'success' && (
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3.5">
          <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <p className="text-green-700 text-sm font-medium">Message sent! We will get back to you within 24 hours.</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        size="lg"
        className="w-full"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
