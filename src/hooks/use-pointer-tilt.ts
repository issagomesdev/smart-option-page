import { useEffect, type RefObject } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface PointerTilt {
  /** Spring-eased pointer offset from the element's center, normalized to roughly -0.5..0.5. */
  x: ReturnType<typeof useSpring>
  y: ReturnType<typeof useSpring>
}

/**
 * Tracks pointer position relative to `ref`'s bounding box, exposed as spring-smoothed
 * motion values so consumers can drive glow position / tilt rotation without re-rendering
 * on every pointer event (framer-motion writes directly to the DOM style).
 */
export function usePointerTilt(ref: RefObject<HTMLElement | null>): PointerTilt {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    function handlePointerMove(event: PointerEvent) {
      if (!element) return
      const rect = element.getBoundingClientRect()
      x.set((event.clientX - rect.left) / rect.width - 0.5)
      y.set((event.clientY - rect.top) / rect.height - 0.5)
    }

    function handlePointerLeave() {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('pointermove', handlePointerMove)
    element.addEventListener('pointerleave', handlePointerLeave)
    return () => {
      element.removeEventListener('pointermove', handlePointerMove)
      element.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [ref, x, y])

  return { x: springX, y: springY }
}
