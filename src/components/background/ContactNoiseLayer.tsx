import { motion, useReducedMotion } from 'framer-motion'

/**
 * Extremely light grain — texture, not decoration. Own SVG filter id (`contact-noise`) so it never
 * collides with the About section's `about-noise` or the Demo section's `demo-grain`. Manual
 * reduced-motion check: raw SVG opacity isn't documented as covered by `MotionConfig reducedMotion="user"`
 * (same reasoning as those two layers).
 */
export function ContactNoiseLayer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.svg
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={prefersReducedMotion ? { opacity: 0.018 } : undefined}
      animate={prefersReducedMotion ? undefined : { opacity: [0.012, 0.022, 0.012] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <filter id="contact-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#contact-noise)" />
    </motion.svg>
  )
}
