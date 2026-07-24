import Lenis from 'lenis'

/** Centralized Lenis tuning — one place to adjust the "feel" of the smooth scroll. */
export function createSmoothScroll(): Lenis {
  return new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
    anchors: true,
  })
}
