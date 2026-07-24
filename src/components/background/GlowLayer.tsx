import { motion, useTransform, type MotionValue } from 'framer-motion'

interface GlowLayerProps {
  /** Normalized pointer offset (-0.5..0.5) from `use-pointer-tilt`, shared with the Hero visual. */
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

/** Soft radial glow that drifts toward the pointer — always subtle, never a spotlight. */
export function GlowLayer({ pointerX, pointerY }: GlowLayerProps) {
  const x = useTransform(pointerX, [-0.5, 0.5], [-60, 60])
  const y = useTransform(pointerY, [-0.5, 0.5], [-60, 60])

  return (
    <motion.div
      className="absolute left-1/2 top-1/3 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
      style={{
        x,
        y,
        background:
          'radial-gradient(circle, color-mix(in oklab, var(--color-primary) 35%, transparent) 0%, transparent 70%)',
      }}
    />
  )
}
