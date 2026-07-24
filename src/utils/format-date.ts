const DATE_PARTS_FORMATTER = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

/**
 * "2026-06-09T18:28:14.040Z" -> "09 de jun de 2026". Built from `Intl.DateTimeFormat` parts rather
 * than a single `.format()` call so the " de " joiners match the landing's copy exactly, and any
 * trailing "." pt-BR's abbreviated month adds (e.g. "jun.") is stripped to match the requested wording.
 */
export function formatCurriculumDate(isoDate: string): string {
  const parts = DATE_PARTS_FORMATTER.formatToParts(new Date(isoDate))
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ''

  const day = get('day')
  const month = get('month').replace(/\.$/, '')
  const year = get('year')

  return `${day} de ${month} de ${year}`
}
