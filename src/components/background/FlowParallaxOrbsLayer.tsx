import { motion } from 'framer-motion'

/**
 * A few large blurred shapes drifting slowly at different speeds — depth via independent motion, not
 * decoration. Autonomous rather than mouse-driven: this layer spans all three (near-full-screen)
 * blocks, so a single pointer position relative to the whole section wouldn't track meaningfully
 * against whichever block is actually in view.
 */
export function FlowParallaxOrbsLayer() {
  return (
    <>
      <motion.div
        className="absolute left-[65%] top-[20%] size-[26rem] rounded-full bg-telegram/[0.05] blur-[110px]"
        animate={{ x: [0, 26, -14, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[8%] top-[55%] size-[24rem] rounded-full bg-primary/[0.05] blur-[100px]"
        animate={{ x: [0, -20, 16, 0], y: [0, 16, -12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <motion.div
        className="absolute left-[55%] top-[85%] size-[22rem] rounded-full bg-accent/[0.05] blur-[100px]"
        animate={{ x: [0, 18, -22, 0], y: [0, -14, 12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
      />
    </>
  )
}
