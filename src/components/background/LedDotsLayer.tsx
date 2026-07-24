import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useViewportTier } from '@/hooks/use-viewport-tier'

interface LedDot {
  id: number
  leftPercent: number
  topPercent: number
  size: number
  duration: number
  delay: number
}

const DOT_COUNT = 6

/**
 * Deterministic pseudo-random layout, kept out of the `EcosystemDiagram`'s own footprint so no
 * stray unrelated dot ever appears to "float" near that diagram's hexagon — only its own
 * line-following particles should read as motion there. On `lg`+ the diagram sits in the right
 * column (roughly the right half); once the section stacks to one column it sits below the text
 * instead, so dots stay confined to the top half.
 */
function createDots(stacked: boolean): LedDot[] {
  let seed = 17
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: DOT_COUNT }, (_, id) => ({
    id,
    leftPercent: stacked ? next() * 100 : next() * 42,
    topPercent: stacked ? next() * 42 : next() * 100,
    size: 3 + next() * 2,
    duration: 5 + next() * 5,
    delay: next() * 5,
  }))
}

/**
 * A handful of small dots fading in and out in place, like status LEDs — deliberately static (no
 * float, no connecting lines to one another). That scattered-but-linked look belongs to the Hero's
 * particle/connection layers only; this is isolated blinking points, nothing more.
 */
export function LedDotsLayer() {
  const viewportTier = useViewportTier()
  const isStacked = viewportTier === 'mobile' || viewportTier === 'tablet'
  const dots = useMemo(() => createDots(isStacked), [isStacked])

  return (
    <div className="absolute inset-0">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-primary/70"
          style={{
            left: `${dot.leftPercent}%`,
            top: `${dot.topPercent}%`,
            width: dot.size,
            height: dot.size,
            boxShadow: '0 0 6px 1px rgba(0,208,132,0.5)',
          }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
