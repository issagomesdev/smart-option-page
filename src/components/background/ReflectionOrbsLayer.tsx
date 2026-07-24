import { motion } from 'framer-motion'

/**
 * A few very large, very soft near-white blobs drifting slowly — reads as reflected light rather than
 * a color accent, unlike the Hero's saturated blur orbs. Reduced-motion handling is global
 * (`<MotionConfig reducedMotion="user">`).
 */
export function ReflectionOrbsLayer() {
  return (
    <>
      <motion.div
        className="absolute left-1/2 top-10 size-[30rem] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[110px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 bottom-0 size-[26rem] rounded-full bg-foreground/[0.03] blur-[100px]"
        animate={{ x: [0, -30, 15, 0], y: [0, -25, 10, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </>
  )
}
