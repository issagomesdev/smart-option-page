import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ModuleCardProps {
  icon: LucideIcon
  name: string
  /** Omitted for the "Usuário" entry point — rendered as a lighter marker instead of a full card. */
  description?: string
  isHighlighted?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
  className?: string
}

/**
 * One module in the architecture diagram. Glassmorphism, soft shadow, discrete glow — a "premium cloud
 * dashboard card," not a documentation-diagram box. `isHighlighted` is driven by the parent diagram
 * (true when this module or one of its connections is the current hover target), separate from the
 * card's own `whileHover` so the two states can compose without fighting each other.
 */
export function ModuleCard({
  icon: Icon,
  name,
  description,
  isHighlighted = false,
  onHoverStart,
  onHoverEnd,
  className,
}: ModuleCardProps) {
  if (!description) {
    return (
      <motion.div
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        whileHover={{ scale: 1.05 }}
        className={cn(
          'flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-md transition-colors duration-300',
          isHighlighted && 'border-primary/40',
          className,
        )}
      >
        <Icon className="size-4 text-muted" aria-hidden="true" />
        <span className="text-xs font-medium text-foreground/85">{name}</span>
      </motion.div>
    )
  }

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'w-40 rounded-2xl border bg-surface/75 p-3.5 backdrop-blur-md transition-colors duration-300 sm:w-44',
        isHighlighted
          ? 'border-primary/45 shadow-[0_0_32px_-10px_rgba(0,208,132,0.6)]'
          : 'border-border shadow-[0_20px_44px_-24px_rgba(0,0,0,0.7)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex size-8 items-center justify-center rounded-lg transition-colors duration-300',
          isHighlighted ? 'bg-primary/20' : 'bg-primary/10',
        )}
      >
        <Icon className="size-4 text-primary" aria-hidden="true" />
      </div>
      <p className="mt-2.5 text-[13px] font-semibold text-foreground">{name}</p>
      <p className="mt-0.5 text-[11px] leading-snug text-muted">{description}</p>
    </motion.div>
  )
}
