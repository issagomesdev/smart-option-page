import { motion } from 'framer-motion'

/**
 * Soft green/cyan/blue/purple gradient washes breathing very slowly — the Funcionalidades section's
 * base ambience, spanning its full (tall) height. Reduced-motion handling is global
 * (`<MotionConfig reducedMotion="user">`).
 */
export function FlowGlowLayer() {
  return (
    <>
      <motion.div
        className="absolute left-[10%] top-[8%] size-[36rem] rounded-full bg-primary/[0.07] blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[6%] top-[38%] size-[34rem] rounded-full bg-telegram/[0.06] blur-[130px]"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute left-[18%] top-[68%] size-[36rem] rounded-full bg-accent/[0.06] blur-[130px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
      <motion.div
        className="absolute right-[14%] top-[92%] size-[30rem] rounded-full bg-primary/[0.05] blur-[120px]"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </>
  )
}
