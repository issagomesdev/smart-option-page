import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface NetNode {
  id: number
  x: number
  y: number
}

interface NetLink {
  id: string
  from: NetNode
  to: NetNode
  duration: number
  delay: number
}

const NODE_COUNT = 11

/** Deterministic pseudo-random mesh: a ring connection plus a few longer cross-links. */
function createTopology(): { nodes: NetNode[]; links: NetLink[] } {
  let seed = 211
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  const nodes: NetNode[] = Array.from({ length: NODE_COUNT }, (_, id) => ({
    id,
    x: 8 + next() * 84,
    y: 6 + next() * 148,
  }))

  const links: NetLink[] = nodes.map((node, index) => {
    const target = nodes[(index + 1) % nodes.length]!
    return {
      id: `ring-${node.id}`,
      from: node,
      to: target,
      duration: 6 + next() * 6,
      delay: next() * 8,
    }
  })

  nodes.forEach((node, index) => {
    if (index % 3 !== 0) return
    const target = nodes[(index + 4) % nodes.length]!
    links.push({
      id: `cross-${node.id}`,
      from: node,
      to: target,
      duration: 7 + next() * 6,
      delay: next() * 8,
    })
  })

  return { nodes, links }
}

/**
 * Camadas 2–4 combined: a deterministic node mesh (not a random scatter) — links move slowly, small
 * pulses travel along them representing information exchange, and each node glows at a slowly shifting
 * intensity. Kept in one component since all three share the same underlying node positions. Manual
 * reduced-motion check: animates raw SVG cx/cy/opacity, not documented as covered by
 * `MotionConfig reducedMotion="user"`.
 */
export function NetworkTopologyLayer() {
  const prefersReducedMotion = useReducedMotion()
  const { nodes, links } = useMemo(() => createTopology(), [])

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {links.map((link) => (
        <motion.line
          key={link.id}
          x1={link.from.x}
          y1={link.from.y}
          x2={link.to.x}
          y2={link.to.y}
          stroke="var(--color-primary)"
          strokeWidth="0.12"
          animate={{ opacity: [0.08, 0.22, 0.08] }}
          transition={{
            duration: link.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: link.delay,
          }}
        />
      ))}

      {!prefersReducedMotion &&
        links.map((link) => (
          <motion.circle
            key={`pulse-${link.id}`}
            r="0.45"
            fill="var(--color-primary)"
            initial={{ cx: link.from.x, cy: link.from.y, opacity: 0 }}
            animate={{
              cx: [link.from.x, link.to.x],
              cy: [link.from.y, link.to.y],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: link.duration * 0.7,
              repeat: Infinity,
              ease: 'linear',
              delay: link.delay + 1,
            }}
          />
        ))}

      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="0.55"
          fill="var(--color-primary)"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 5 + (node.id % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.id * 0.4,
          }}
        />
      ))}
    </svg>
  )
}
