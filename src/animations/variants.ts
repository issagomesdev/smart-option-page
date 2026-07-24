import type { Variants } from 'framer-motion'

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const

export const DEFAULT_REVEAL_DURATION = 0.7

/** Visual states only — timing lives on the consuming `motion` component's `transition` prop
 * (see `components/common/Reveal.tsx`), so a `delay` never has to fight a variant's own transition. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

/** Applied to a parent to stagger `fadeInUp`/`scaleIn` children on entrance. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

/** Gentle infinite float — used by the phone mockup (1st plane): the most present, so it moves the most. */
export const floatLoop = {
  y: [0, -8, 0],
  transition: {
    duration: 6.4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
}

/** Used by the notebook mockup (2nd plane): further away, so a smaller, slower, out-of-phase float. */
export const floatLoopDelayed = {
  y: [0, -4, 0],
  transition: {
    duration: 8.6,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay: 1.2,
  },
}

/** Used by the PIX card (3rd plane): floats free of the other two, so a diagonal drift on its own timing. */
export const floatDiagonal = {
  y: [0, -7, 0],
  x: [0, 5, 0],
  transition: {
    duration: 7.3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay: 0.6,
  },
}
