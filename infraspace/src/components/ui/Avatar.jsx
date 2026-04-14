import { cn } from '@/utils/cn'

const sizes = {
  sm: 'w-10 h-10 text-sm',
  md: 'w-11 h-11 text-sm',
  lg: 'w-24 h-24 text-3xl',
}

export default function Avatar({ name, size = 'md', className }) {
  return (
    <div className={cn(
      'rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center font-heading font-bold text-white shadow-md shrink-0',
      sizes[size],
      className
    )}>
      {name.charAt(0)}
    </div>
  )
}
