import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  /** Disables the hover lift/glow — useful when the card already has its own interaction. */
  interactive?: boolean
}

/** Reusable glassmorphism surface with a sophisticated hover response. Used across the Hero's mockups and indicators. */
export function AnimatedCard({ children, className, interactive = true }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border border-border bg-surface/70 backdrop-blur-xl',
        'shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_20px_50px_-20px_rgba(0,0,0,0.6)]',
        className,
      )}
      whileHover={
        interactive
          ? {
              y: -4,
              borderColor: 'rgba(0,208,132,0.35)',
              transition: { duration: 0.25, ease: 'easeOut' },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
