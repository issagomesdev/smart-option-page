interface LogoProps {
  variant?: 'brain_mark' | 'concept_mark' | 'wordmark'
  className?: string
}

export function Logo({ variant = 'brain_mark', className }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="Smart Option — início"
      className={`flex items-center focus-visible:outline-none h-full w-auto ${className ?? ''}`}
    >
      <img
        src={`https://media.byissa.dev/smart-option/${variant}.webp`}
        alt="Smart Option"
        className="h-full w-auto object-cover"
      />
    </a>
  )
}
