import { StudioGradientLayer } from '@/components/background/StudioGradientLayer'
import { OrganicLinesLayer } from '@/components/background/OrganicLinesLayer'
import { SoftDotsLayer } from '@/components/background/SoftDotsLayer'

/**
 * "Por Trás do Projeto" section's exclusive background — a creative-studio/workspace feel, not the
 * Hero's energy, the About section's aurora, Funcionalidades' automation flow, Architecture's network
 * mesh, or the Demo section's cinema lighting. Extremely soft gradients, a handful of thin organic
 * curves (not a grid, not a circuit), and a few gentle luminous points. No financial motifs here.
 */
export function DeveloperBackground() {
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
      <StudioGradientLayer />
      <OrganicLinesLayer />
      <SoftDotsLayer />
    </div>
  )
}
