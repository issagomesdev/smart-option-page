import { NetworkGridLayer } from '@/components/background/NetworkGridLayer'
import { NetworkTopologyLayer } from '@/components/background/NetworkTopologyLayer'
import { NetworkGradientLayer } from '@/components/background/NetworkGradientLayer'

/**
 * The Architecture section's exclusive background — data-center/network-topology, not the Hero's
 * node-graph, the About section's aurora, or the Funcionalidades section's circuit-flow. A near-
 * invisible grid, a deterministic node mesh with traveling pulses, and slow breathing gradients in a
 * mostly green/cyan (observability-dashboard) palette. Faded in/out at both edges for a clean handoff.
 */
export function ArchitectureBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 0, black 200px, black calc(100% - 140px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0, black 200px, black calc(100% - 140px), transparent 100%)',
      }}
    >
      <NetworkGridLayer />
      <NetworkGradientLayer />
      <NetworkTopologyLayer />
    </div>
  )
}
