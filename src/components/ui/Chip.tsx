import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ChipProps {
  label: string
  icon: LucideIcon
  className?: string
}

/** Icon + label tag — used for the Hero's list of differentiators. */
export function Chip({ label, icon: Icon, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-3 py-1.5',
        'text-xs font-medium text-foreground/90 transition-colors duration-200 hover:border-primary/40',
        className,
      )}
    >
      <Icon className="size-3.5 text-primary" aria-hidden="true" />
      {label}
    </span>
  )
}
