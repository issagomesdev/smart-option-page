import { useMemo } from 'react'
import { cn } from '@/utils/cn'

interface QrPatternProps {
  className?: string
  /** Grid resolution — higher looks denser/more realistic. */
  size?: number
}

/** Deterministic, decorative QR-style grid — not a real scannable code, purely visual. */
function createModules(size: number, seed: number): boolean[] {
  let value = seed
  const next = () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
  return Array.from({ length: size * size }, () => next() > 0.42)
}

export function QrPattern({ className, size = 9 }: QrPatternProps) {
  const modules = useMemo(() => createModules(size, 7), [size])

  return (
    <div
      className={cn('grid gap-[3px] rounded-lg bg-foreground p-3', className)}
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      role="img"
      aria-label="Código QR ilustrativo de pagamento PIX"
    >
      {modules.map((filled, index) => (
        <span
          key={index}
          className={cn('aspect-square rounded-[1px]', filled ? 'bg-background' : 'bg-transparent')}
        />
      ))}
    </div>
  )
}
