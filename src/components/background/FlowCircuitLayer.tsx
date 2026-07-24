import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface FlowLine {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  color: string
  length: number
  duration: number
  delay: number
  hasNode: boolean
}

const COLORS = ['var(--color-primary)', 'var(--color-telegram)', 'var(--color-accent)']
const LINE_COUNT = 16

/** Deterministic pseudo-random horizontal/vertical segments spanning the whole (tall) section. */
function createLines(): FlowLine[] {
  let seed = 71
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: LINE_COUNT }, (_, id) => {
    const horizontal = next() > 0.5
    const color = COLORS[Math.floor(next() * COLORS.length)] ?? COLORS[0]!
    const length = 14 + next() * 22
    let x1: number, y1: number, x2: number, y2: number

    if (horizontal) {
      y1 = next() * 300
      y2 = y1
      x1 = next() * (100 - length)
      x2 = x1 + length
    } else {
      x1 = next() * 100
      x2 = x1
      y1 = next() * (300 - length)
      y2 = y1 + length
    }

    return {
      id,
      x1,
      y1,
      x2,
      y2,
      color,
      length,
      duration: 12 + next() * 12,
      delay: next() * 9,
      hasNode: next() > 0.55,
    }
  })
}

/**
 * "Circuit" flow lines — short horizontal/vertical segments simulating data moving through the
 * platform, each drawn with a slowly flowing dash (not a discrete traveling dot) so the motion reads
 * as continuous processing rather than a single event. A handful of endpoints glow like connected
 * nodes. Manual reduced-motion check: this animates raw SVG stroke-dashoffset, not a transform/opacity
 * MotionConfig is documented to cover.
 */
export function FlowCircuitLayer() {
  const prefersReducedMotion = useReducedMotion()
  const lines = useMemo(() => createLines(), [])

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((line) => (
        <g key={line.id}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth="0.15"
            strokeOpacity="0.14"
          />
          <motion.line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth="0.22"
            strokeLinecap="round"
            strokeDasharray="3 9"
            strokeOpacity="0.5"
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -24] }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: line.delay,
            }}
          />
          {line.hasNode && (
            <motion.circle
              cx={line.x2}
              cy={line.y2}
              r="0.5"
              fill={line.color}
              animate={{ opacity: [0.25, 0.75, 0.25] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: line.delay * 0.5,
              }}
            />
          )}
        </g>
      ))}
    </svg>
  )
}
