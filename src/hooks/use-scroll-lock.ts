import { useEffect } from 'react'
import { setSmoothScrollEnabled } from '@/lib/lenis'

/**
 * Freezes page scrolling while `isLocked` is true, restoring the previous state on release.
 *
 * Two things have to be held, not one. `overflow: hidden` stops native scrolling, but Lenis drives
 * the page through `window.scrollTo`, which CSS overflow cannot reach — a full-screen overlay that
 * only sets the CSS lock still scrolls the page behind it (found while testing the loading screen:
 * a wheel gesture over the splash moved the landing 792px). `setSmoothScrollEnabled` no-ops when
 * Lenis isn't running, so this stays safe under reduced motion and outside the app shell.
 *
 * Restores the *previous* overflow value rather than hard-clearing it, so overlapping locks (a
 * modal opened over the loading screen) can't leave the page unscrollable when the inner one
 * releases first.
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setSmoothScrollEnabled(false)

    return () => {
      document.body.style.overflow = previousOverflow
      setSmoothScrollEnabled(true)
    }
  }, [isLocked])
}
