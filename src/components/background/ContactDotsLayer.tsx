import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Dot {
  id: number
  leftPercent: number
  topPercent: number
  size: number
  color: string
  duration: number
  delay: number
}

const PALETTE = [
  'var(--color-primary)',
  'var(--color-telegram)',
  'color-mix(in oklab, var(--color-telegram) 50%, black)',
]

/** Wide zones spanning most of the section — edges, both strips, and a broad general scatter. */
const ZONES = [
  { left: [2, 98], top: [0, 14] },
  { left: [2, 98], top: [86, 100] },
  { left: [-2, 8], top: [0, 100] },
  { left: [92, 102], top: [0, 100] },
  { left: [48, 100], top: [10, 90] },
  { left: [0, 100], top: [0, 100] },
] as const

const DOT_COUNT = 26

/** Deterministic pseudo-random layout, spread across every zone rather than clustered anywhere. */
function createDots(): Dot[] {
  let seed = 419
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: DOT_COUNT }, (_, id) => {
    const zone = ZONES[Math.floor(next() * ZONES.length)]!
    return {
      id,
      leftPercent: zone.left[0] + next() * (zone.left[1] - zone.left[0]),
      topPercent: zone.top[0] + next() * (zone.top[1] - zone.top[0]),
      size: 3 + next() * 2.5,
      color: PALETTE[id % PALETTE.length]!,
      duration: 14 + next() * 10,
      delay: next() * 12,
    }
  })
}

/**
 * A wide scatter of tiny dots across the whole section, each slowly growing and shrinking in place —
 * a quiet, almost subconscious detail. No drift, no fading to fully invisible, just a very soft
 * breathing scale so it reads as "alive" without drawing the eye away from the content.
 */
export function ContactDotsLayer() {
  const dots = useMemo(() => createDots(), [])

  return (
    <div className="absolute inset-0">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.leftPercent}%`,
            top: `${dot.topPercent}%`,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: [0.65, 1.4, 0.65], opacity: [0.25, 0.55, 0.25] }}
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
