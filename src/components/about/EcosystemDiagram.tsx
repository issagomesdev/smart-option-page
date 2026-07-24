import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { staggerContainer, fadeIn, scaleIn } from '@/animations/variants'
import { ECOSYSTEM_NODES } from '@/constants/about-content'
import type { EcosystemColor } from '@/types/about'

interface EcosystemDiagramProps {
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

interface EcosystemPosition {
  x: number
  y: number
}

/**
 * One entry per `ECOSYSTEM_NODES` entry, same order/index (Usuário, Telegram, PIX, Painel,
 * Monitoramento, Automação) — a static lookup instead of computing positions at render time, so any
 * one node can be fine-tuned independently without touching the others.
 *
 * Derived from polar coordinates (radius X 37%, Y 30%, 60° apart, starting at 12 o'clock) rather than
 * eyeballed: the container is `aspect-[4/5]` (taller than wide), and since `top`/`left` percentages
 * are each relative to a different absolute dimension, an equal X/Y radius stretches into an ellipse.
 * Y = 30 ≈ X(37) × 4/5 corrects for that, so all six sit the same true pixel-distance from the core.
 */
const ECOSYSTEM_POSITIONS: EcosystemPosition[] = [
  { x: 50, y: 20 }, // Usuário
  { x: 82.04, y: 35 }, // Telegram
  { x: 82.04, y: 65 }, // PIX
  { x: 50, y: 80 }, // Painel
  { x: 17.96, y: 65 }, // Monitoramento
  { x: 17.96, y: 35 }, // Automação
]

/**
 * Right column of the About section — an abstract ecosystem, not a system diagram: a glowing
 * "Smart Option" core with six satellites (Usuário, Telegram, PIX, Painel, Monitoramento, Automação)
 * orbiting it, joined by soft animated lines with small particles drifting along each connection.
 * Circles and glass instead of boxes, deliberately not another mockup — those belong to the Hero.
 *
 * Every circle's wrapper is translated by exactly -50%/-50% of its OWN box, and contains only the
 * circle — never the label too. Labels are absolutely positioned below the circle instead, so they
 * never pull the translate's reference box (and therefore the circle's true visual center) off the
 * point the SVG lines actually connect to.
 */
export function EcosystemDiagram({ pointerX, pointerY }: EcosystemDiagramProps) {
  const prefersReducedMotion = useReducedMotion()
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-4, 4])

  return (
    <Reveal
      variants={scaleIn}
      mode="viewport"
      className="mx-auto flex w-full items-center justify-center lg:mx-0 lg:h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative aspect-[4/5] h-full max-h-[46rem] w-full"
      >
        {/* Core glow */}
        <div
          className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px] sm:size-72"
          style={{
            background:
              'radial-gradient(circle, color-mix(in oklab, var(--color-primary) 45%, transparent) 0%, transparent 70%)',
          }}
        />

        {/* Connections + traveling particles — both endpoints are true circle centers */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {ECOSYSTEM_NODES.map((node, index) => {
            const { x, y } = ECOSYSTEM_POSITIONS[index]!
            const color = COLOR_VAR[node.color]
            return (
              <motion.line
                key={node.label}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={color}
                strokeWidth="0.4"
                strokeLinecap="round"
                animate={{ opacity: [0.15, 0.45, 0.15] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              />
            )
          })}

          {!prefersReducedMotion &&
            ECOSYSTEM_NODES.map((node, index) => {
              const { x, y } = ECOSYSTEM_POSITIONS[index]!
              const color = COLOR_VAR[node.color]
              return (
                <motion.circle
                  key={`particle-${node.label}`}
                  r="0.9"
                  fill={color}
                  initial={{ cx: 50, cy: 50, opacity: 0 }}
                  animate={{ cx: [50, x, 50], cy: [50, y, 50], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.6 + index * 0.5,
                  }}
                />
              )
            })}
        </svg>

        {/* Satellite nodes */}
        <motion.div
          variants={staggerContainer}
          transition={{ delayChildren: 0.35, staggerChildren: 0.09 }}
          className="absolute inset-0"
        >
          {ECOSYSTEM_NODES.map((node, index) => {
            const { x, y } = ECOSYSTEM_POSITIONS[index]!
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                variants={fadeIn}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.35,
                  }}
                  className={`relative flex size-14 items-center justify-center rounded-full border backdrop-blur-md sm:size-16 lg:size-20 ${COLOR_NODE_CLASSES[node.color]}`}
                >
                  <Icon className="size-6 lg:size-7" aria-hidden="true" />
                  <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-muted lg:text-sm">
                    {node.label}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Core node */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex size-24 items-center justify-center rounded-full border border-primary/40 bg-primary/15 shadow-[0_0_56px_-8px_rgba(0,208,132,0.6)] backdrop-blur-md sm:size-28 lg:size-36"
          >
            <Sparkles className="size-8 text-primary sm:size-9 lg:size-11" aria-hidden="true" />
            <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-foreground lg:text-base">
              Smart Option
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </Reveal>
  )
}
