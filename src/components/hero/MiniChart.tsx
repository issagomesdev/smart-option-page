import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/utils/cn'

const POINTS = [8, 22, 16, 34, 28, 46, 40, 58, 50, 68]

function toPath(points: number[], width: number, height: number): string {
  const stepX = width / (points.length - 1)
  const max = Math.max(...points)
  return points
    .map((value, index) => {
      const x = index * stepX
      const y = height - (value / max) * height
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

const WIDTH = 220

interface MiniChartProps {
  /** Rendered height in pixels — also drives the viewBox, so the line's proportions stay correct. */
  height?: number
  className?: string
}

/** Small line chart evoking network yield growth — decorative, drawn once on mount. */
export function MiniChart({ height = 64, className }: MiniChartProps) {
  const prefersReducedMotion = useReducedMotion()
  const linePath = toPath(POINTS, WIDTH, height)
  const areaPath = `${linePath} L${WIDTH},${height} L0,${height} Z`

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      className={cn('w-full', className)}
      style={{ height }}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="mini-chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#mini-chart-fill)" />
      <motion.path
        d={linePath}
        stroke="var(--color-primary)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
        animate={prefersReducedMotion ? undefined : { pathLength: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </svg>
  )
}
