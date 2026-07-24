import type { Curriculum } from '@/types/curriculum'

const CURRICULUM_API_URL = import.meta.env.VITE_CURRICULUM_API_URL

/**
 * Fetches the résumé list from the configured endpoint. Throws on any missing config, network
 * failure, or non-2xx response — callers (`useCurriculums`) decide how to surface that as UI state.
 */
export async function fetchCurriculums(): Promise<Curriculum[]> {
  if (!CURRICULUM_API_URL) {
    throw new Error('VITE_CURRICULUM_API_URL não está configurada.')
  }

  const response = await fetch(CURRICULUM_API_URL)
  if (!response.ok) {
    throw new Error(`Falha ao carregar currículos (status ${response.status}).`)
  }

  return (await response.json()) as Curriculum[]
}
