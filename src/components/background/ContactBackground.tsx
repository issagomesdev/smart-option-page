import { ContactAuroraLayer } from '@/components/background/ContactAuroraLayer'
import { ContactSpotlightLayer } from '@/components/background/ContactSpotlightLayer'
import { ContactDotsLayer } from '@/components/background/ContactDotsLayer'
import { ContactNoiseLayer } from '@/components/background/ContactNoiseLayer'

/**
 * The Contato section's exclusive background — a cinematic aurora, not a diagram. No nodes, lines,
 * particles, or other explicit "network" iconography: just enormous, heavily-blurred color washes
 * breathing slowly, two soft focal glows guiding the eye toward the title and the cards, a wide
 * scatter of tiny dots quietly growing and shrinking, and a whisper of grain for depth. The landing's
 * closing metaphor for connection stays entirely abstract — light, color, and motion, in the spirit
 * of Linear/Vercel/Stripe/Raycast rather than a network topology.
 */
export function ContactBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0, black 120px, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, black 120px, black 100%)',
      }}
    >
      <ContactAuroraLayer />
      <ContactSpotlightLayer />
      <ContactDotsLayer />
      <ContactNoiseLayer />
    </div>
  )
}
