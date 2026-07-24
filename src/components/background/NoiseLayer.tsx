import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fractal-noise grain at extremely low opacity — texture, not decoration. Generated inline via an SVG
 * filter (no image asset to fetch), with a very slow opacity shimmer standing in for "animated" since
 * regenerating turbulence every frame would be wasteful for something this subtle. Checks reduced
 * motion manually — an `<svg>` root's opacity animation isn't documented as covered by
 * `MotionConfig reducedMotion="user"`, which targets HTML transform/opacity, so this errs cautious
 * (same reasoning as the Hero's `ConnectionsLayer`/`MiniChart`).
 */
export function NoiseLayer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.svg
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={prefersReducedMotion ? { opacity: 0.03 } : undefined}
      animate={prefersReducedMotion ? undefined : { opacity: [0.02, 0.04, 0.02] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <filter id="about-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#about-noise)" />
    </motion.svg>
  )
}
