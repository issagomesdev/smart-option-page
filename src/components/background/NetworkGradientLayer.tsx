import { motion } from 'framer-motion'

/** Soft breathing gradients, mostly green/cyan (an observability-dashboard palette) — ambience, never competing with content. */
export function NetworkGradientLayer() {
  return (
    <>
      <motion.div
        className="absolute left-[15%] top-[10%] size-[38rem] rounded-full bg-primary/[0.06] blur-[140px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-[55%] size-[34rem] rounded-full bg-telegram/[0.05] blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
      <motion.div
        className="absolute left-[35%] top-[90%] size-[30rem] rounded-full bg-primary/[0.05] blur-[120px]"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
    </>
  )
}
