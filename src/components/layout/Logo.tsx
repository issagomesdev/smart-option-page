import { cn } from '@/utils/cn'

export type LogoVariant = 'brain_mark' | 'concept_mark' | 'wordmark'

interface LogoMarkProps {
  variant?: LogoVariant
  className?: string
}

interface LogoProps {
  variant?: LogoVariant
  className?: string
}

/**
 * The brand image on its own, with no link around it. Split out from `Logo` for placements where
 * the mark is decoration rather than navigation — a splash screen has nowhere to navigate to, and
 * an anchor there would only add a keyboard stop on a screen nobody can act on.
 */
export function LogoMark({ variant = 'brain_mark', className }: LogoMarkProps) {
  return (
    <img
      src={`https://media.byissa.dev/smart-option/${variant}.webp`}
      alt="Smart Option"
      className={cn('h-full w-auto object-cover', className)}
    />
  )
}

export function Logo({ variant = 'brain_mark', className }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="Smart Option — início"
      className={cn('flex h-full w-auto items-center focus-visible:outline-none', className)}
    >
      <LogoMark variant={variant} />
    </a>
  )
}
