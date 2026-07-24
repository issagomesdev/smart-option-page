import { Container } from '@/components/layout/Container'
import { ContactBackground } from '@/components/background/ContactBackground'
import { ContactMessage } from '@/components/contact/ContactMessage'
import { ContactCardsGrid } from '@/components/contact/ContactCardsGrid'

/**
 * "Contato" — the landing's closing section. No lead-capture form: a final message plus direct
 * links to the developer's professional channels. Its own network-of-connections background,
 * distinct from every section before it.
 */
export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <ContactBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
          <ContactMessage />
          <ContactCardsGrid />
        </div>
      </Container>
    </section>
  )
}
