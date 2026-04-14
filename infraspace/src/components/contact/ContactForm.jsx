import { useContactForm } from '@/hooks/useContactForm'
import Button from '@/components/ui/Button'

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
          <label className="block text-sm font-medium text-neutral-700 mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition bg-white"
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder="Tell us about your project — type, size, location, timeline..."
          className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none bg-white"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {status === 'success' && (
        <p className="text-green-600 text-sm font-medium bg-green-50 border border-green-200 rounded-md px-4 py-3">
          Message sent! We will get back to you within 24 hours.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        size="lg"
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
