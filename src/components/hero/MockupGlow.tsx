import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface MockupGlowProps {
  /** CSS color the radial gradient is mixed from — a hex value or `var(--color-*)`. */
  color: string
  /** Sizing and positioning — sized/placed per mockup so the three never overlap or compete. */
  className?: string
  /** Adds a slow opacity pulse — used for the PIX card's "breathing" glow. */
  breathing?: boolean
}

/** Soft blurred color blob placed behind a single mockup, reinforcing depth without ever drawing attention. */
export function MockupGlow({ color, className, breathing = false }: MockupGlowProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn('absolute rounded-full blur-[80px]', className)}
      style={{
        background: `radial-gradient(circle, color-mix(in oklab, ${color} 40%, transparent) 0%, transparent 70%)`,
      }}
      animate={breathing ? { opacity: [0.35, 0.6, 0.35] } : undefined}
      transition={
        breathing ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const } : undefined
      }
    />
  )
}
