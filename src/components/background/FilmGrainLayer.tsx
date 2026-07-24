import { motion, useReducedMotion } from 'framer-motion'

/**
 * Extremely subtle film grain — fits the cinema concept literally, generated inline via an SVG filter
 * (no image asset). Manual reduced-motion check: animates an `<svg>` root's opacity, not documented as
 * covered by `MotionConfig reducedMotion="user"` (same reasoning as the About section's `NoiseLayer`).
 */
export function FilmGrainLayer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.svg
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={prefersReducedMotion ? { opacity: 0.025 } : undefined}
      animate={prefersReducedMotion ? undefined : { opacity: [0.015, 0.03, 0.015] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <filter id="demo-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#demo-grain)" />
    </motion.svg>
  )
}
