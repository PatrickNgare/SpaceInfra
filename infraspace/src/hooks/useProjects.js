import { useState, useMemo } from 'react'
import { projects } from '@/data/projects'

// Static — computed once at module load, never changes
const categories = ['All', ...new Set(projects.map(p => p.category))]

export function useProjects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() =>
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  )

  return { filtered, categories, activeFilter, setActiveFilter }
}
