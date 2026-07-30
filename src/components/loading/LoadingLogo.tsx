import { motion, useReducedMotion } from 'framer-motion'
import { EASE_PREMIUM, floatLoop } from '@/animations/variants'
import { LogoMark } from '@/components/layout/Logo'

/** Matches the `scaleIn` variant's entrance, kept local so the glow can start on the same beat. */
const ENTRANCE_DURATION = 0.7

/**
 * The brand mark, breathing.
 *
 * Three independent motions, none of which touches layout: the mark fades and scales in once, then
 * drifts on the very same `floatLoop` the Hero's phone mockup uses, while a radial glow pulses
 * behind it on its own slower timing. Keeping the glow out of phase with the float is what stops
 * the pair from reading as a single blinking object.
 */
export function LoadingLogo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="relative flex h-12 items-center justify-center sm:h-16"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: ENTRANCE_DURATION, ease: EASE_PREMIUM }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute size-56 rounded-full blur-[72px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-primary) 30%, transparent) 0%, transparent 70%)',
        }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.45 }
            : { opacity: [0.3, 0.65, 0.3], scale: [0.94, 1.06, 0.94] }
        }
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-30 sm:h-35"
        animate={prefersReducedMotion ? undefined : floatLoop}
      >
        <LogoMark variant="brain_mark" />
      </motion.div>
    </motion.div>
  )
}
