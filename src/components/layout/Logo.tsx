import { Zap } from 'lucide-react'

/** Wordmark shared by the Header (and, later, the footer). */
export function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 focus-visible:outline-none"
      aria-label="Smart Option — início"
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary lg:size-7 xl:size-8">
        <Zap className="size-3.5 lg:size-3.5 xl:size-4" aria-hidden="true" fill="currentColor" />
      </span>
      <span className="whitespace-nowrap font-display text-[13px] font-bold tracking-tight text-foreground lg:text-[13px] xl:text-[15px]">
        Smart Option
      </span>
    </a>
  )
}
