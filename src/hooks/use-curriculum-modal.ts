import { useCallback, useEffect, useState } from 'react'

let isOpen = false
let hasOpenedOnce = false
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((listener) => listener())
}

function setOpen(value: boolean) {
  isOpen = value
  if (value) hasOpenedOnce = true
  notify()
}

interface UseCurriculumModalResult {
  isOpen: boolean
  /** Latches permanently `true` on first open — lets the app root mount the `React.lazy` modal only once it's actually needed. */
  hasOpenedOnce: boolean
  open: () => void
  close: () => void
}

/**
 * Shared open/close state for the résumé modal, so every "Currículo" button anywhere in the tree
 * (Contato, Por Trás do Projeto, or any future one) can trigger the single modal instance mounted at
 * the app root — without prop drilling and without introducing a Context provider for one boolean.
 */
export function useCurriculumModal(): UseCurriculumModalResult {
  const [, forceRender] = useState(0)

  useEffect(() => {
    const listener = () => forceRender((n) => n + 1)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  return {
    isOpen,
    hasOpenedOnce,
    open: useCallback(() => setOpen(true), []),
    close: useCallback(() => setOpen(false), []),
  }
}
