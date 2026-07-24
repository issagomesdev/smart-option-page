/**
 * Soft hand-off into whatever section comes next — a gentle curve plus a gradient fade instead of
 * a hard edge. Purely decorative, so it's hidden from assistive tech.
 */
export function HeroTransition() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 -bottom-px h-40 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full text-background"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0,96 C320,160 1120,32 1440,96 L1440,160 L0,160 Z" fill="currentColor" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
