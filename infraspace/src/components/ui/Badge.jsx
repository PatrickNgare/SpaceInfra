import { cn } from '@/utils/cn'

export default function Badge({ children, className }) {
  return (
    <span className={cn('inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full', className)}>
      {children}
    </span>
  )
}
