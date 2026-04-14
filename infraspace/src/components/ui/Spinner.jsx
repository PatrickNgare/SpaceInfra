import { cn } from '@/utils/cn'

export default function Spinner({ fullPage = false }) {
  return (
    <div className={cn('flex items-center justify-center', fullPage && 'min-h-screen')}>
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )
}
