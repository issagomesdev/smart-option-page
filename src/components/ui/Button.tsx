import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'sm'

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background shadow-[0_0_0_1px_rgba(0,208,132,0.4),0_8px_24px_-8px_rgba(0,208,132,0.55)] hover:shadow-[0_0_0_1px_rgba(0,208,132,0.6),0_12px_32px_-8px_rgba(0,208,132,0.7)] hover:-translate-y-0.5',
  secondary:
    'bg-surface text-foreground border border-border hover:border-foreground/30 hover:-translate-y-0.5',
  ghost: 'bg-transparent text-foreground hover:bg-surface',
}

/**
 * `sm` exists for the Header's two CTAs specifically: tight at `lg` (1024px, where the nav's six
 * links + logo + both buttons would otherwise overflow/wrap) and back to the same size as `md` from
 * `xl` (1280px) up. Baked in as one complete, mutually-exclusive class string per size rather than an
 * appended override — `cn()` is plain `clsx` here (no `tailwind-merge`), so a same-category utility
 * passed via `className` isn't guaranteed to beat `md`'s own `px-6 py-3 text-sm` in the cascade.
 */
const SIZE_STYLES: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-[18px]',
  sm: 'px-4 py-2.5 text-[12px] lg:px-4 lg:py-2.5 lg:text-[11px] xl:px-6 xl:py-3 xl:text-[14px]',
}

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold ' +
  'font-sans transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-primary ' +
  'focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

interface CommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

/** Shared CTA control — renders an `<a>` when `href` is provided, a `<button>` otherwise. */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className)

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
