import { useEffect, useRef } from 'react'

/** Declarative `setInterval` — always calls the latest `callback`, restarts only when `delayMs` changes. */
export function useInterval(callback: () => void, delayMs: number | null): void {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (delayMs === null) return
    const id = setInterval(() => callbackRef.current(), delayMs)
    return () => clearInterval(id)
  }, [delayMs])
}
