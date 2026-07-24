import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Curve {
  id: number
  d: string
  duration: number
  delay: number
}

const COLORS = ['var(--color-primary)', 'var(--color-accent)', 'var(--color-foreground)']

/** Deterministic pseudo-random smooth curves — hand-drawn sketch lines, not a grid or circuit. */
function createCurves(): Curve[] {
  let seed = 97
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: 5 }, (_, id) => {
    const startX = next() * 100
    const startY = next() * 140
    const c1x = startX + (next() - 0.5) * 60
    const c1y = startY + 30 + next() * 40
    const c2x = startX + (next() - 0.5) * 60
    const c2y = startY + 60 + next() * 40
    const endX = startX + (next() - 0.5) * 50
    const endY = startY + 90 + next() * 40

    return {
      id,
      d: `M${startX},${startY} C${c1x},${c1y} ${c2x},${c2y} ${endX},${endY}`,
      duration: 10 + next() * 8,
      delay: next() * 8,
    }
  })
}

/** A handful of thin, near-invisible curved lines — a design-sketch feel, distinct from every other section's straight grids/circuits. */
export function OrganicLinesLayer() {
  const curves = useMemo(() => createCurves(), [])

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 140"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {curves.map((curve, index) => (
        <motion.path
          key={curve.id}
          d={curve.d}
          fill="none"
          stroke={COLORS[index % COLORS.length]}
          strokeWidth="0.15"
          strokeLinecap="round"
          animate={{ opacity: [0.08, 0.22, 0.08] }}
          transition={{
            duration: curve.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: curve.delay,
          }}
        />
      ))}
    </svg>
  )
}
