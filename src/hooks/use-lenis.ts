import { useEffect } from 'react'
import { createSmoothScroll, destroySmoothScroll } from '@/lib/lenis'

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
      // Goes through the module so the shared reference is cleared too — a stale instance would
      // make a later scroll lock try to pause something that no longer drives the page.
      destroySmoothScroll()
    }
  }, [])
}
