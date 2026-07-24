import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  leftPercent: number
  topPercent: number
  size: number
  duration: number
  delay: number
}

const PARTICLE_COUNT = 14

/** Deterministic pseudo-random layout so particles don't reshuffle on every re-render. */
function createParticles(): Particle[] {
  let seed = 42
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
    id,
    leftPercent: next() * 100,
    topPercent: next() * 100,
    size: 2 + next() * 2,
    duration: 8 + next() * 10,
    delay: next() * 6,
  }))
}

/**
 * Ambient floating dots, independent of the Connections layer — general atmosphere, not data flow.
 * Reduced-motion handling is global (`<MotionConfig reducedMotion="user">`).
 */
export function ParticlesLayer() {
  const particles = useMemo(() => createParticles(), [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-foreground/20"
          style={{
            left: `${particle.leftPercent}%`,
            top: `${particle.topPercent}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
