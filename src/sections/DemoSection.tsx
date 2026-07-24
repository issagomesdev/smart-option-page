import { Container } from '@/components/layout/Container'
import { DemoBackground } from '@/components/background/DemoBackground'
import { DemoContent } from '@/components/demo/DemoContent'
import { VideoPlayer } from '@/components/demo/VideoPlayer'

/**
 * "Demonstração" — the social-proof moment: written entirely as if the walkthrough video already
 * exists, with only the player itself standing in as an elegant "coming soon" placeholder rather than
 * an unfinished feature. Its own cinema/streaming background, distinct from every section before it.
 */
export function DemoSection() {
  return (
    <section id="demonstracao" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <DemoBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
          <DemoContent />
          <VideoPlayer />
        </div>
      </Container>
    </section>
  )
}
