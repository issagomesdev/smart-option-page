import { useEffect, useRef, useState } from 'react'

const ACTIVATION_ROOT_MARGIN = '-35% 0px -40% 0px'
const CLICK_LOCK_MS = 1300

interface UseActiveSectionResult {
  /** The id currently dominating the viewport's 35%-60% band, or `null` before the first section arrives. */
  activeId: string | null
  /** Pins `id` as active immediately (for nav clicks) and holds it through the smooth-scroll travel. */
  focusId: (id: string) => void
}

/**
 * Scroll-spy via IntersectionObserver — no scroll-event listeners. Watches `sectionIds` (expected to
 * match real element ids in the DOM) and reports whichever one currently covers the most pixel area of
 * a fixed band 35%-60% down the viewport, achieved by shrinking the observer's root with `rootMargin`
 * so only that band can ever register an intersection.
 *
 * Area (not `intersectionRatio`) decides ties: `intersectionRatio` is normalized against each target's
 * own height, which would unfairly favor a short section over a tall one that equally fills the band.
 * `intersectionRect` gives the actual overlapping pixels instead, comparable across sections of any height.
 *
 * `focusId` exists so a nav click can show the destination as active right away instead of waiting for
 * the (Lenis-animated) scroll to arrive — while pinned, observer updates are ignored so an intermediate
 * section crossing the band mid-scroll can't steal the highlight back before the destination is reached.
 * The pin releases the moment it detects real user scroll input (wheel/touch/key), not just after the
 * fixed `CLICK_LOCK_MS` timeout — otherwise clicking a link and then immediately scrolling away yourself
 * would keep the clicked link stuck highlighted until the timeout caught up. Deliberately *not* a plain
 * `scroll` listener: Lenis's own click-triggered animation fires native `scroll` events on every frame
 * too (it drives real `window.scrollY`), so that would release the pin almost immediately after every
 * click and defeat it entirely — wheel/touchmove/keydown are the actual user-input events, never
 * dispatched by the animation itself.
 */
export function useActiveSection(sectionIds: string[]): UseActiveSectionResult {
  const [activeId, setActiveId] = useState<string | null>(null)
  const areasRef = useRef(new Map<string, number>())
  const lockedRef = useRef(false)
  const unlockTimerRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return

        for (const entry of entries) {
          const area = entry.isIntersecting
            ? entry.intersectionRect.width * entry.intersectionRect.height
            : 0
          areasRef.current.set(entry.target.id, area)
        }

        let topId: string | null = null
        let topArea = 0
        for (const [id, area] of areasRef.current) {
          if (area > topArea) {
            topArea = area
            topId = id
          }
        }

        // No `if (topId)` guard here on purpose: `topId` is legitimately `null` whenever nothing
        // intersects the band (e.g. scrolled back up into the Hero, which has no id/nav entry), and
        // that must clear the previous active link rather than leave it stuck highlighted.
        setActiveId(topId)
      },
      { rootMargin: ACTIVATION_ROOT_MARGIN, threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [sectionIds])

  useEffect(() => {
    const SCROLL_KEYS = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '])

    function releaseLock() {
      lockedRef.current = false
    }

    function releaseLockOnScrollKey(event: KeyboardEvent) {
      if (SCROLL_KEYS.has(event.key)) releaseLock()
    }

    window.addEventListener('wheel', releaseLock, { passive: true })
    window.addEventListener('touchmove', releaseLock, { passive: true })
    window.addEventListener('keydown', releaseLockOnScrollKey)

    return () => {
      window.clearTimeout(unlockTimerRef.current)
      window.removeEventListener('wheel', releaseLock)
      window.removeEventListener('touchmove', releaseLock)
      window.removeEventListener('keydown', releaseLockOnScrollKey)
    }
  }, [])

  function focusId(id: string) {
    lockedRef.current = true
    setActiveId(id)
    window.clearTimeout(unlockTimerRef.current)
    unlockTimerRef.current = window.setTimeout(() => {
      lockedRef.current = false
    }, CLICK_LOCK_MS)
  }

  return { activeId, focusId }
}
