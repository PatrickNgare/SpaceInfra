import { cn } from '@/utils/cn'

export default function SectionHeader({ eyebrow, title, subtitle, center = false, className }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <div className={cn('mb-5', center && 'flex justify-center')}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary bg-secondary/8 border border-secondary/20 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={cn(
        'font-heading text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight',
        center && 'text-balance'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-neutral-500 text-base md:text-lg leading-relaxed',
          center ? 'max-w-2xl mx-auto' : 'max-w-lg'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
