import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { EASE_PREMIUM } from '@/animations/variants'
import { LoadingBackground } from '@/components/loading/LoadingBackground'
import { LoadingLogo } from '@/components/loading/LoadingLogo'
import { LoadingProgress } from '@/components/loading/LoadingProgress'
import { LoadingText } from '@/components/loading/LoadingText'
import { LOADING_LABEL } from '@/constants/loading-content'
import { useScrollLock } from '@/hooks/use-scroll-lock'

interface LoadingScreenProps {
  /** Controlled by the caller — this component never decides on its own when loading is done. */
  isVisible: boolean
  label?: string
  /** Fires after the exit animation finishes and the overlay has left the tree. */
  onExitComplete?: () => void
}

const EXIT_DURATION = 0.7
const REDUCED_MOTION_DURATION = 0.25

/**
 * The overlay's contents, split out purely so the scroll lock can live *inside* `AnimatePresence`.
 *
 * Locking from `LoadingScreen` against `isVisible` released the page the instant the exit began,
 * leaving the ~0.7s dissolve scrollable underneath a still-visible overlay. Anything mounted here
 * survives until the exit animation finishes, so the lock now covers exactly as long as the splash
 * is on screen — no more, no less.
 */
function LoadingOverlayContent({ label }: { label: string }) {
  useScrollLock(true)

  return (
    <div className="relative flex flex-col items-center gap-7 px-6">
      <LoadingLogo />
      <LoadingText label={label} />
      <LoadingProgress />
    </div>
  )
}

/**
 * Full-screen brand splash.
 *
 * Purely presentational and fully controlled: it takes a boolean and renders. Readiness is somebody
 * else's job (`useAppReady` for the initial load), which is what keeps it usable for route
 * transitions, `Suspense` fallbacks or lazy boundaries without dragging page-load logic along.
 *
 * It carries its own `MotionConfig` rather than trusting an ancestor's. A splash is exactly the
 * kind of component that gets mounted above the provider tree — as a `Suspense` fallback, or at the
 * root before anything else exists — and reduced motion is not something to leave to placement.
 *
 * The exit is a reveal, not a cut: the overlay fades while scaling up a hair and blurring, so it
 * feels like it dissolves *off* the landing rather than being switched off in front of it.
 * `AnimatePresence` keeps it mounted for the duration and then removes it.
 */
export function LoadingScreen({
  isVisible,
  label = LOADING_LABEL,
  onExitComplete,
}: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence onExitComplete={onExitComplete}>
        {isVisible && (
          <motion.div
            key="loading-screen"
            role="status"
            aria-live="polite"
            aria-label={label}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background"
            // Opaque on the very first frame — no entrance fade on the backdrop. Fading it in meant
            // the landing, which mounts underneath at the same moment, was visible through it for
            // half a second: the page showed up first and the splash arrived on top of it. What
            // fades in is the *contents* (mark, label, bar), each with its own entrance.
            initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            // The exit timing lives inside `exit` rather than on `transition`: by the time
            // `AnimatePresence` plays it, this element is no longer being rendered, so a
            // `transition` derived from `isVisible` would still be reading the entrance value.
            exit={
              prefersReducedMotion
                ? { opacity: 0, transition: { duration: REDUCED_MOTION_DURATION } }
                : {
                    opacity: 0,
                    scale: 1.04,
                    filter: 'blur(12px)',
                    transition: { duration: EXIT_DURATION, ease: EASE_PREMIUM },
                  }
            }
          >
            <LoadingBackground />
            <LoadingOverlayContent label={label} />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
