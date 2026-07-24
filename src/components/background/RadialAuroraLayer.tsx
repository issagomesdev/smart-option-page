import { motion } from 'framer-motion'

/**
 * Soft three-color wash (green/blue/purple) breathing extremely slowly — the About section's base
 * ambience. Never a sharp pulse: long durations and staggered delays keep it reading as "alive," not
 * "blinking." Reduced-motion handling is global (`<MotionConfig reducedMotion="user">`).
 */
export function RadialAuroraLayer() {
  return (
    <>
      <motion.div
        className="absolute left-1/4 top-0 size-[44rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/4 size-[40rem] translate-x-1/3 rounded-full bg-telegram/[0.06] blur-[140px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 size-[42rem] translate-y-1/3 rounded-full bg-accent/[0.07] blur-[140px]"
        animate={{ opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
      />
    </>
  )
}
