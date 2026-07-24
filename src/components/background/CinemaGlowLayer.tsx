import { motion } from 'framer-motion'

/**
 * Soft breathing gradients behind the demo — moodier and darker than the other sections' washes, closer
 * to theater ambient lighting than an accent glow. Reduced-motion handling is global
 * (`<MotionConfig reducedMotion="user">`).
 */
export function CinemaGlowLayer() {
  return (
    <>
      <motion.div
        className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[150px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[20%] top-[15%] size-[26rem] rounded-full bg-telegram/[0.04] blur-[120px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute right-[16%] bottom-[10%] size-[24rem] rounded-full bg-accent/[0.04] blur-[120px]"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
    </>
  )
}
