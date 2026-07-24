import { motion } from 'framer-motion'

/**
 * Extremely soft breathing gradients — warmer and quieter than the other sections' washes, closer to
 * ambient studio light than a tech accent. No financial or circuit connotation, just soft color.
 */
export function StudioGradientLayer() {
  return (
    <>
      <motion.div
        className="absolute left-[12%] top-[18%] size-[34rem] rounded-full bg-primary/[0.045] blur-[150px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-[45%] size-[30rem] rounded-full bg-accent/[0.04] blur-[140px]"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 23, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[8%] size-[28rem] rounded-full bg-foreground/[0.03] blur-[130px]"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
      />
    </>
  )
}
