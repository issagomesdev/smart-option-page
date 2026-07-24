import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { DEFAULT_REVEAL_DURATION, EASE_PREMIUM, fadeInUp } from '@/animations/variants'

interface RevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  /** Use `viewport` to animate in as the element scrolls into view instead of on mount. */
  mode?: 'mount' | 'viewport'
}

/**
 * Wraps content with a fade/slide entrance — every section uses this so entrances stay consistent.
 * Reduced-motion handling is global (see `<MotionConfig reducedMotion="user">` in `app/Providers.tsx`),
 * so this component doesn't need its own check.
 */
export function Reveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  mode = 'mount',
}: RevealProps) {
  const viewportProps =
    mode === 'viewport'
      ? { whileInView: 'visible', viewport: { once: true, margin: '-80px' } }
      : { animate: 'visible' }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      transition={{ duration: DEFAULT_REVEAL_DURATION, ease: EASE_PREMIUM, delay }}
      {...viewportProps}
    >
      {children}
    </motion.div>
  )
}
