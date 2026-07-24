import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
}

/** Small pill used for the Hero's top eyebrow label. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5',
        'text-xs font-medium tracking-wide text-muted backdrop-blur-sm',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(0,208,132,0.6)]" />
      {children}
    </span>
  )
}
