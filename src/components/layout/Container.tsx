import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Shared max-width + horizontal padding wrapper used by every section. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}
