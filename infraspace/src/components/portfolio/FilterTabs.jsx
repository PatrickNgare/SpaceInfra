import { cn } from '@/utils/cn'

export default function FilterTabs({ categories, activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-semibold transition-all',
            activeFilter === cat
              ? 'bg-primary text-white shadow-md'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
