import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Dot {
  id: number
  leftPercent: number
  topPercent: number
  duration: number
  delay: number
}

const DOT_COUNT = 7

/** Deterministic pseudo-random layout so dots don't reshuffle on every re-render. */
function createDots(): Dot[] {
  let seed = 149
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: DOT_COUNT }, (_, id) => ({
    id,
    leftPercent: next() * 100,
    topPercent: next() * 100,
    duration: 7 + next() * 6,
    delay: next() * 8,
  }))
}

/** A few small, soft luminous points fading slowly in and out — quiet, never scattered like the Hero's particles. */
export function SoftDotsLayer() {
  const dots = useMemo(() => createDots(), [])

  return (
    <div className="absolute inset-0">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute size-1 rounded-full bg-foreground/40"
          style={{ left: `${dot.leftPercent}%`, top: `${dot.topPercent}%` }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  )
}
