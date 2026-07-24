import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ECOSYSTEM_BLOCK_NODES } from '@/constants/features-content'
import type { EcosystemColor } from '@/types/about'

interface EcosystemFinaleDiagramProps {
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

const COLOR_VAR: Record<EcosystemColor, string> = {
  primary: 'var(--color-primary)',
  telegram: 'var(--color-telegram)',
  accent: 'var(--color-accent)',
}

const COLOR_NODE_CLASSES: Record<EcosystemColor, string> = {
  primary: 'border-primary/30 bg-primary/10 text-primary',
  telegram: 'border-telegram/30 bg-telegram/10 text-telegram',
  accent: 'border-accent/30 bg-accent/10 text-accent',
}

const RADIUS_PERCENT = 40

function getSatellitePosition(index: number, total: number) {
  const angle = ((-90 + (360 / total) * index) * Math.PI) / 180
  return {
    x: 50 + RADIUS_PERCENT * Math.cos(angle),
    y: 50 + RADIUS_PERCENT * Math.sin(angle),
  }
}

/**
 * Bloco 3's illustration — a larger, richer evolution of the About section's ecosystem diagram: seven
 * satellites instead of six, and an outer ring connecting each satellite to its neighbor (not just to
 * the core), so the whole thing reads as "everything is connected to everything," not only "everything
 * reports to the center." Full-width, not confined to a half column, since this is the section's finale.
 */
export function EcosystemFinaleDiagram({ pointerX, pointerY }: EcosystemFinaleDiagramProps) {
  const prefersReducedMotion = useReducedMotion()
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-3, 3])
  const total = ECOSYSTEM_BLOCK_NODES.length

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="relative mx-auto aspect-square w-full max-w-2xl"
    >
      <div
        className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[100px] sm:size-80"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-primary) 45%, transparent) 0%, transparent 70%)',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {ECOSYSTEM_BLOCK_NODES.map((node, index) => {
          const { x, y } = getSatellitePosition(index, total)
          return (
            <motion.line
              key={`hub-${node.label}`}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={COLOR_VAR[node.color]}
              strokeWidth="0.35"
              strokeLinecap="round"
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.25,
              }}
            />
          )
        })}

        {ECOSYSTEM_BLOCK_NODES.map((node, index) => {
          const from = getSatellitePosition(index, total)
          const to = getSatellitePosition((index + 1) % total, total)
          return (
            <motion.line
              key={`ring-${node.label}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-border)"
              strokeWidth="0.25"
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4 + index * 0.3,
              }}
            />
          )
        })}

        {!prefersReducedMotion &&
          ECOSYSTEM_BLOCK_NODES.map((node, index) => {
            const { x, y } = getSatellitePosition(index, total)
            return (
              <motion.circle
                key={`particle-${node.label}`}
                r="0.8"
                fill={COLOR_VAR[node.color]}
                initial={{ cx: 50, cy: 50, opacity: 0 }}
                animate={{ cx: [50, x, 50], cy: [50, y, 50], opacity: [0, 1, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5 + index * 0.45,
                }}
              />
            )
          })}
      </svg>

      {ECOSYSTEM_BLOCK_NODES.map((node, index) => {
        const { x, y } = getSatellitePosition(index, total)
        const Icon = node.icon
        return (
          <motion.div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
              className={`flex size-14 items-center justify-center rounded-full border backdrop-blur-md sm:size-16 ${COLOR_NODE_CLASSES[node.color]}`}
            >
              <Icon className="size-6" aria-hidden="true" />
            </motion.div>
            <span className="whitespace-nowrap text-xs font-medium text-muted">{node.label}</span>
          </motion.div>
        )
      })}

      <motion.div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex size-24 items-center justify-center rounded-full border border-primary/40 bg-primary/15 shadow-[0_0_56px_-8px_rgba(0,208,132,0.6)] backdrop-blur-md sm:size-28"
        >
          <Sparkles className="size-8 text-primary sm:size-9" aria-hidden="true" />
        </motion.div>
        <span className="whitespace-nowrap text-sm font-semibold text-foreground">
          Smart Option
        </span>
      </motion.div>
    </motion.div>
  )
}
