import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Beam {
  id: number
  leftPercent: number
  rotate: number
  duration: number
  delay: number
}

interface Mote {
  id: number
  leftPercent: number
  topPercent: number
  duration: number
  delay: number
}

/** Deterministic pseudo-random layout so beams/motes don't reshuffle on every re-render. */
function createComposition(): { beams: Beam[]; motes: Mote[] } {
  let seed = 61
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  const beams: Beam[] = Array.from({ length: 3 }, (_, id) => ({
    id,
    leftPercent: 20 + next() * 60,
    rotate: -10 + next() * 20,
    duration: 14 + next() * 8,
    delay: next() * 6,
  }))

  const motes: Mote[] = Array.from({ length: 8 }, (_, id) => ({
    id,
    leftPercent: next() * 100,
    topPercent: next() * 100,
    duration: 10 + next() * 8,
    delay: next() * 8,
  }))

  return { beams, motes }
}

/** A few soft diagonal light beams (spotlight-through-dust) and sparse floating motes — cinema, not confetti. */
export function LightBeamsLayer() {
  const { beams, motes } = useMemo(() => createComposition(), [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute -top-1/4 h-[150%] w-24"
          style={{
            left: `${beam.leftPercent}%`,
            transform: `rotate(${beam.rotate}deg)`,
            background:
              'linear-gradient(to bottom, transparent 0%, color-mix(in oklab, var(--color-foreground) 4%, transparent) 40%, transparent 80%)',
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: beam.delay,
          }}
        />
      ))}

      {motes.map((mote) => (
        <motion.span
          key={mote.id}
          className="absolute size-1 rounded-full bg-foreground/30"
          style={{ left: `${mote.leftPercent}%`, top: `${mote.topPercent}%` }}
          animate={{ opacity: [0, 0.5, 0], y: [0, -14, 0] }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: mote.delay,
          }}
        />
      ))}
    </div>
  )
}
