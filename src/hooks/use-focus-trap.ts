import { useEffect, type RefObject } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Keeps Tab/Shift+Tab cycling within `containerRef` while `active`, moves focus into the container on
 * activation, and returns it to whatever was focused before on deactivation — the minimum a modal
 * needs so keyboard focus never leaks to the page behind it.
 */
export function useFocusTrap<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  active: boolean,
): void {
  useEffect(() => {
    if (!active) return
    const container = containerRef.current
    if (!container) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    function getFocusable(): HTMLElement[] {
      return Array.from(container!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
    }

    const focusable = getFocusable()
    ;(focusable[0] ?? container).focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Tab') return
      const elements = getFocusable()
      if (elements.length === 0) return

      const first = elements[0]!
      const last = elements[elements.length - 1]!

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [active, containerRef])
}
