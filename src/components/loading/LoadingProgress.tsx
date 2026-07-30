import { motion, useReducedMotion } from 'framer-motion'

/**
 * Kept a little longer than `DEFAULT_MIN_DURATION_MS` in `use-app-ready`, so the fill is still in
 * motion when the reveal starts. If that minimum is raised, raise this with it — otherwise the bar
 * finishes early and sits there for the remainder.
 */
const FILL_DURATION = 5.6

/**
 * Deceleration written as keyframes rather than as an easing curve, for two reasons.
 *
 * The shrinking gaps between these values *are* the deceleration, so the fill keeps visibly moving
 * across the splash's whole hold. An eased tween can't: `EASE_PREMIUM` is steep enough that the bar
 * hit 100% at 2.4s and then sat frozen until the reveal — measured, not assumed, and stretching the
 * duration only moved the freeze later.
 *
 * And it stops short of 1 on purpose. There is no real progress being reported, so a bar that
 * "completes" claims something untrue and then contradicts itself by lingering. Creeping toward the
 * high nineties reads as work still happening, which is exactly what is happening.
 */
const FILL_KEYFRAMES = [0, 0.52, 0.76, 0.88, 0.94, 0.97]
const FILL_TIMES = [0, 0.15, 0.35, 0.6, 0.8, 1]

/**
 * Indeterminate progress bar.
 *
 * Reports nothing — there is no measurable percentage to report, and inventing one would be a lie
 * the exit animation immediately contradicts. It is decoration, so it is `aria-hidden`: the live
 * region on `LoadingScreen` is what actually announces the wait.
 *
 * The fill is a `scaleX` transform on a full-width bar, never an animated `width`, so it is
 * composited on the GPU and never triggers layout. The sheen riding over it is a plain `x`
 * translation for the same reason.
 */
export function LoadingProgress() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="relative h-[2px] w-44 overflow-hidden rounded-full bg-foreground/10 sm:w-56"
    >
      <motion.div
        className="absolute inset-0 origin-left rounded-full bg-linear-to-r from-primary/50 via-primary to-primary/50"
        initial={{ scaleX: prefersReducedMotion ? 0.55 : 0 }}
        animate={{ scaleX: prefersReducedMotion ? 0.55 : FILL_KEYFRAMES }}
        // `linear` between keyframes on purpose — the values already carry the easing, and an extra
        // curve on each segment would re-introduce the front-loading this replaced.
        transition={{ duration: FILL_DURATION, times: FILL_TIMES, ease: 'linear' }}
      />

      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-y-0 w-1/3 rounded-full bg-linear-to-r from-transparent via-foreground/60 to-transparent"
          animate={{ x: ['-140%', '440%'] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.35 }}
        />
      )}
    </div>
  )
}
