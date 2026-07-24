import { motion, useReducedMotion } from 'framer-motion'

/**
 * Loose node graph echoing the platform's real data flow (Telegram → API → Asaas → PIX → Painel),
 * kept abstract and low-contrast — texture, not a diagram meant to be read.
 */
const NODES = [
  { x: 78, y: 8 },
  { x: 92, y: 24 },
  { x: 70, y: 42 },
  { x: 88, y: 60 },
  { x: 74, y: 80 },
]

const CONNECTIONS = NODES.slice(0, -1).map((node, index) => ({
  from: node,
  to: NODES[index + 1],
}))

export function ConnectionsLayer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {CONNECTIONS.map((connection, index) => {
        const pathId = `connection-${index}`
        return (
          <g key={pathId}>
            <line
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="url(#connection-gradient)"
              strokeWidth={0.15}
              strokeDasharray="1.2 1.4"
            />
            {!prefersReducedMotion && (
              <motion.circle
                r={0.5}
                fill="var(--color-primary)"
                animate={{
                  cx: [connection.from.x, connection.to.x],
                  cy: [connection.from.y, connection.to.y],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 3.5,
                  delay: index * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </g>
        )
      })}

      {NODES.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={0.6}
          fill="var(--color-foreground)"
          opacity={0.25}
        />
      ))}

      <defs>
        <linearGradient id="connection-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-telegram)" stopOpacity={0.25} />
          <stop offset="50%" stopColor="var(--color-primary)" stopOpacity={0.2} />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0.25} />
        </linearGradient>
      </defs>
    </svg>
  )
}
