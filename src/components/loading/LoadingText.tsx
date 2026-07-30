import { motion } from 'framer-motion'
import { EASE_PREMIUM } from '@/animations/variants'

interface LoadingTextProps {
  label: string
}

/**
 * Arrives after the mark has settled, never with it — a staggered entrance is what separates a
 * composed splash from three elements that happen to appear at once.
 */
export function LoadingText({ label }: LoadingTextProps) {
  return (
    <motion.p
      className="text-center font-display text-sm font-medium tracking-[0.18em] text-muted uppercase"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.28, ease: EASE_PREMIUM }}
    >
      {label}
    </motion.p>
  )
}
