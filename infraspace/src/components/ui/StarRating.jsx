import { FaStar } from 'react-icons/fa'

export default function StarRating({ rating, size = 16 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} className="text-secondary" size={size} />
      ))}
    </div>
  )
}
