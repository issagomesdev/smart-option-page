import { useEffect, useState } from 'react'

interface UseAppReadyOptions {
  /** Floor for how long the caller should stay in the loading state, in milliseconds. */
  minDurationMs?: number
  /** Ceiling: past this the app is reported ready even if an asset never finished. */
  timeoutMs?: number
}

/**
 * How long the loading screen is held even when everything is already cached.
 *
 * Long enough for the whole entrance to play out and be read — mark, wordmark, label and a progress
 * bar that is still visibly moving when the reveal starts. Anything under ~600ms reads as a glitch
 * rather than a transition, since the screen would leave before the eye settles on it.
 *
 * `LoadingProgress` is tuned against this value: its fill should still be in motion at the moment
 * of exit, so shortening this without shortening the fill would leave the bar sitting at 100%.
 */
const DEFAULT_MIN_DURATION_MS = 5000

/**
 * The brand mark and the variable fonts come off the network, so `load` can hang on a slow or
 * unreachable CDN. Being stuck behind a splash is worse than a late-loading logo, so readiness is
 * reported regardless once this elapses.
 */
const DEFAULT_TIMEOUT_MS = 6000

/** Resolves when the document has finished loading its subresources (images included). */
function whenWindowLoaded(signal: AbortSignal): Promise<void> {
  if (document.readyState === 'complete') return Promise.resolve()

  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true, signal })
  })
}

/** Resolves when webfonts are done, so text never swaps typeface after the screen is revealed. */
function whenFontsLoaded(): Promise<void> {
  return document.fonts ? document.fonts.ready.then(() => undefined) : Promise.resolve()
}

/**
 * Reports whether the initial page load has settled — fonts and subresources done, and at least
 * `minDurationMs` elapsed. Deliberately knows nothing about how it will be presented: it returns a
 * boolean, which any splash, skeleton or route transition can consume.
 */
export function useAppReady({
  minDurationMs = DEFAULT_MIN_DURATION_MS,
  timeoutMs = DEFAULT_TIMEOUT_MS,
}: UseAppReadyOptions = {}): boolean {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const startedAt = performance.now()
    const controller = new AbortController()
    let holdTimeoutId: number | undefined
    let safetyTimeoutId: number | undefined

    /** Pads out whatever is left of the minimum so a warm cache doesn't make the screen blink. */
    function settle() {
      if (controller.signal.aborted) return

      const remainingMs = Math.max(0, minDurationMs - (performance.now() - startedAt))
      holdTimeoutId = window.setTimeout(() => {
        if (!controller.signal.aborted) setIsReady(true)
      }, remainingMs)
    }

    const loaded = Promise.all([whenWindowLoaded(controller.signal), whenFontsLoaded()])
    const safetyNet = new Promise<void>((resolve) => {
      safetyTimeoutId = window.setTimeout(resolve, timeoutMs)
    })

    void Promise.race([loaded, safetyNet]).then(settle)

    return () => {
      controller.abort()
      window.clearTimeout(holdTimeoutId)
      window.clearTimeout(safetyTimeoutId)
    }
  }, [minDurationMs, timeoutMs])

  return isReady
}
