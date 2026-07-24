import { useEffect } from 'react'
import { createSmoothScroll } from '@/lib/lenis'

/**
 * Wires up Lenis smooth scrolling for the app's lifetime. Skipped entirely when the visitor
 * prefers reduced motion — native scroll behavior is the more accessible default there.
 */
export function useLenis(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = createSmoothScroll()

    let frameId: number
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])
}
