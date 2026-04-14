import { cn } from '@/utils/cn'

export default function SectionHeader({ eyebrow, title, subtitle, center = false, className }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <div className={cn('flex items-center gap-2.5 mb-3', center && 'justify-center')}>
          <span className="w-6 h-px bg-secondary flex-shrink-0" />
          <span className="text-secondary font-semibold text-xs uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-3 text-neutral-500 text-base md:text-lg leading-relaxed',
          center ? 'max-w-2xl mx-auto' : 'max-w-xl'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
