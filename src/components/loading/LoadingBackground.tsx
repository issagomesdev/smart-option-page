import { BlurOrbsLayer } from '@/components/background/BlurOrbsLayer'
import { GridLayer } from '@/components/background/GridLayer'
import { ParticlesLayer } from '@/components/background/ParticlesLayer'

/**
 * The Hero's own ambience, reassembled from the same layers rather than reimplemented — the splash
 * and the page it uncovers are literally the same picture, so the exit reads as a reveal instead of
 * a cut between two screens.
 *
 * Two Hero layers are deliberately left out: `GlowLayer` follows the pointer (there is nothing to
 * point at here) and `ConnectionsLayer` draws data flow, which would imply activity the splash
 * isn't reporting.
 */
export function LoadingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <BlurOrbsLayer />
      <GridLayer />
      <ParticlesLayer />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
