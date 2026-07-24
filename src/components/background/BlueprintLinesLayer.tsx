/**
 * Extremely fine dashed horizontal rows, drifting sideways almost imperceptibly — a blueprint/technical
 * drawing cue, distinct from the Hero's grid (which is a solid two-axis grid, not dashed single-axis
 * rows). The dash pattern lives in `maskImage` (not a second background layer) so it only reveals the
 * horizontal-line paint in short segments instead of compositing as its own full-bleed vertical stripe
 * pattern — that was the first pass's bug. Plain CSS animation on mask-position (`.animate-blueprint-drift`
 * in globals.css), since it isn't a transform — handles prefers-reduced-motion itself via media query.
 */
export function BlueprintLinesLayer() {
  return (
    <div
      className="animate-blueprint-drift absolute inset-0"
      style={{
        backgroundImage:
          'repeating-linear-gradient(to bottom, transparent 0, transparent 95px, rgba(148,163,184,0.35) 95px, rgba(148,163,184,0.35) 96px)',
        maskImage:
          'repeating-linear-gradient(to right, black 0, black 8px, transparent 8px, transparent 26px)',
        WebkitMaskImage:
          'repeating-linear-gradient(to right, black 0, black 8px, transparent 8px, transparent 26px)',
      }}
    />
  )
}
