import { motion } from 'framer-motion'

/**
 * Two large, very soft color washes that drift slowly — pure ambience, never sharp edges.
 * Reduced-motion handling is global (`<MotionConfig reducedMotion="user">`).
 */
export function BlurOrbsLayer() {
  return (
    <>
      <motion.div
        className="absolute -left-32 top-0 size-[36rem] rounded-full bg-primary/[0.08] blur-[120px]"
        animate={{
          x: [0, 30, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 size-[40rem] rounded-full bg-accent/[0.10] blur-[130px]"
        animate={{
          x: [0, -24, 14, 0],
          y: [0, 18, -12, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}
