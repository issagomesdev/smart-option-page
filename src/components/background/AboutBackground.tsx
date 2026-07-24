import { RadialAuroraLayer } from '@/components/background/RadialAuroraLayer'
import { BlueprintLinesLayer } from '@/components/background/BlueprintLinesLayer'
import { NoiseLayer } from '@/components/background/NoiseLayer'
import { ReflectionOrbsLayer } from '@/components/background/ReflectionOrbsLayer'
import { LedDotsLayer } from '@/components/background/LedDotsLayer'

/**
 * The About section's background — a distinct identity from the Hero's (no grid, no connected
 * particles, no mouse-following glow): a breathing three-color aurora, drifting blueprint lines,
 * grain, soft reflected-light orbs, and a few LED-like dots. Faded in from transparent at the top edge
 * so it eases in after the Hero's own fade-to-background, instead of starting with a visible seam.
 */
export function AboutBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0, black 180px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, black 180px)',
      }}
    >
      <RadialAuroraLayer />
      <BlueprintLinesLayer />
      <NoiseLayer />
      <ReflectionOrbsLayer />
      <LedDotsLayer />
    </div>
  )
}
