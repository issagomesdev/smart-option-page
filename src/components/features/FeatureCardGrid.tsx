import { motion } from 'framer-motion'
import { MiniFeatureCard } from '@/components/features/MiniFeatureCard'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import type { FeatureListItem } from '@/types/features'

interface FeatureCardGridProps {
  items: FeatureListItem[]
  className?: string
}

/**
 * Stagger-animated grid of `MiniFeatureCard`s — shared by every block's feature list so the reveal
 * timing and uniform sizing stay consistent. Inherits its "visible" state from the nearest animating
 * ancestor instead of re-triggering its own viewport check.
 */
export function FeatureCardGrid({ items, className }: FeatureCardGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      transition={{ delayChildren: 0.3, staggerChildren: 0.08 }}
      className={className}
    >
      {items.map((item) => (
        <motion.div
          key={item.label}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <MiniFeatureCard {...item} />
        </motion.div>
      ))}
    </motion.div>
  )
}
