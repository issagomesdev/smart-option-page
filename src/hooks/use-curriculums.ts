import { useCallback, useState } from 'react'
import { fetchCurriculums } from '@/services/curriculum.service'
import type { Curriculum } from '@/types/curriculum'

type CurriculumStatus = 'idle' | 'loading' | 'error' | 'success'

let cache: Curriculum[] | null = null
let inFlight: Promise<Curriculum[]> | null = null

interface UseCurriculumsResult {
  curriculums: Curriculum[]
  status: CurriculumStatus
  /** No-op once data is cached or already loading — safe to call every time the modal opens. */
  load: () => void
  retry: () => void
}

/**
 * Loads the résumé list once per page session and reuses it on every later call. The cache lives at
 * module scope rather than in component state, because the modal that calls this hook unmounts
 * between opens (matching the rest of the app's modal pattern) — plain `useState` would lose the data
 * on every close. Concurrent `load()` calls (e.g. the modal re-opening while a request is still in
 * flight) share the same in-flight promise instead of firing a second request.
 */
export function useCurriculums(): UseCurriculumsResult {
  const [curriculums, setCurriculums] = useState<Curriculum[]>(cache ?? [])
  const [status, setStatus] = useState<CurriculumStatus>(cache ? 'success' : 'idle')

  const load = useCallback(() => {
    if (cache) {
      setCurriculums(cache)
      setStatus('success')
      return
    }

    setStatus('loading')
    const request = inFlight ?? fetchCurriculums()
    inFlight = request

    request
      .then((result) => {
        cache = result
        setCurriculums(result)
        setStatus('success')
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        inFlight = null
      })
  }, [])

  return { curriculums, status, load, retry: load }
}
