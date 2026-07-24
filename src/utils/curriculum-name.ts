/**
 * Terms that don't title-case correctly on their own — keyed by their lowercased, punctuation-free
 * form so "nodejs", "Node.js", and "NODEJS" all resolve the same way. Extend this table (not an
 * `if`/`switch` chain) whenever a new résumé filename introduces a term that needs one.
 */
const KNOWN_TERMS: Record<string, string> = {
  php: 'PHP',
  jwt: 'JWT',
  api: 'API',
  rest: 'REST',
  node: 'Node.js',
  nodejs: 'Node.js',
  react: 'React',
  next: 'Next.js',
  nextjs: 'Next.js',
  docker: 'Docker',
  laravel: 'Laravel',
  mysql: 'MySQL',
  postgres: 'PostgreSQL',
  postgresql: 'PostgreSQL',
  redis: 'Redis',
}

/** Segments that expand into more than one word, rather than just being capitalized. */
const PHRASE_TERMS: Record<string, string> = {
  fullstack: 'Full Stack',
}

function titleCaseWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

function formatSegment(segment: string): string {
  const key = segment.toLowerCase()
  return PHRASE_TERMS[key] ?? KNOWN_TERMS[key] ?? titleCaseWord(segment)
}

/**
 * Turns a résumé filename into a human title — "backend_nodejs.pdf" -> "Backend • Node.js". Splits
 * on the separators filenames actually use (`_`, `-`, `/`), looks each piece up against a small table
 * of tech terms/acronyms that don't title-case correctly on their own, and falls back to simple
 * capitalization for anything unrecognized — a new filename never needs a new code branch, only
 * (optionally) a new table entry if it introduces an acronym.
 */
export function parseCurriculumName(filename: string): string {
  const withoutExtension = filename.replace(/\.pdf$/i, '')
  const segments = withoutExtension.split(/[_\-/]+/).filter(Boolean)

  if (segments.length === 0) return filename

  return segments.map(formatSegment).join(' • ')
}
