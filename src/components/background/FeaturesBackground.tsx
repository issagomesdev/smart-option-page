import { FlowGlowLayer } from '@/components/background/FlowGlowLayer'
import { FlowCircuitLayer } from '@/components/background/FlowCircuitLayer'
import { FlowWireframeLayer } from '@/components/background/FlowWireframeLayer'
import { FlowParallaxOrbsLayer } from '@/components/background/FlowParallaxOrbsLayer'

/**
 * One exclusive background for the entire Funcionalidades section (all three blocks share it, rather
 * than each getting its own system) — built around automation/data-flow, not the Hero's node-graph or
 * the About section's aurora/blueprint. Circuit-like flow lines with slowly moving dashes stand in for
 * "operations running in the background," faint wireframe cards and icons hint at interface elements
 * without resolving into anything readable, and a soft multi-color glow plus drifting blur add depth.
 * Faded in/out at both edges so it hands off cleanly from the About section and into whatever follows.
 */
export function FeaturesBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 0, black 220px, black calc(100% - 160px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0, black 220px, black calc(100% - 160px), transparent 100%)',
      }}
    >
      <FlowGlowLayer />
      <FlowCircuitLayer />
      <FlowWireframeLayer />
      <FlowParallaxOrbsLayer />
    </div>
  )
}
