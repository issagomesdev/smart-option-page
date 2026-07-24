import { CinemaGlowLayer } from '@/components/background/CinemaGlowLayer'
import { LightBeamsLayer } from '@/components/background/LightBeamsLayer'
import { FilmGrainLayer } from '@/components/background/FilmGrainLayer'

/**
 * The Demonstração section's exclusive background — cinema/streaming, not the Hero's node-graph, the
 * About section's aurora, Funcionalidades' circuit-flow, or Architecture's network mesh. Soft breathing
 * glow, a few diagonal light beams with sparse floating motes, and near-invisible film grain — all
 * quiet enough that the video player stays the obvious focal point. Faded in/out at both edges.
 */
export function DemoBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 0, black 160px, black calc(100% - 120px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0, black 160px, black calc(100% - 120px), transparent 100%)',
      }}
    >
      <CinemaGlowLayer />
      <LightBeamsLayer />
      <FilmGrainLayer />
    </div>
  )
}
