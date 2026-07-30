import Lenis from 'lenis'

/**
 * The instance currently driving the page, if any. Kept at module scope so code that needs to
 * *pause* scrolling can reach it without every overlay being wired through a context — see
 * `setSmoothScrollEnabled`.
 */
let activeInstance: Lenis | null = null

/**
 * Whether scrolling is currently allowed, tracked separately from the instance because the two are
 * created in the wrong order: React runs child effects before parent ones, so a full-screen overlay
 * asks for the lock before `useLenis` (a provider, higher up) has built anything to lock. Keeping
 * the intent here lets a later instance be born already paused.
 */
let isScrollEnabled = true

/** Centralized Lenis tuning — one place to adjust the "feel" of the smooth scroll. */
export function createSmoothScroll(): Lenis {
  activeInstance = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
    anchors: true,
  })

  if (!isScrollEnabled) activeInstance.stop()

  return activeInstance
}

export function destroySmoothScroll(): void {
  activeInstance?.destroy()
  activeInstance = null
}

/**
 * Pauses or resumes smooth scrolling.
 *
 * `overflow: hidden` on its own does not hold Lenis back: it scrolls by calling `window.scrollTo`,
 * which CSS overflow has no say over — an overlay relying on the CSS lock alone still scrolls the
 * page underneath itself (found while testing the loading screen). No-ops when Lenis isn't running
 * (reduced motion disables it entirely), so callers never have to check first.
 */
export function setSmoothScrollEnabled(isEnabled: boolean): void {
  isScrollEnabled = isEnabled

  if (isEnabled) activeInstance?.start()
  else activeInstance?.stop()
}
