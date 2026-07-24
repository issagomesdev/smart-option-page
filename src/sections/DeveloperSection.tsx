import { Container } from '@/components/layout/Container'
import { DeveloperBackground } from '@/components/background/DeveloperBackground'
import { DeveloperPhoto } from '@/components/developer/DeveloperPhoto'
import { DeveloperContent } from '@/components/developer/DeveloperContent'

/**
 * "Por Trás do Projeto" — the landing's one genuinely personal section, closing out the project's
 * narrative rather than reading as a résumé. Its own quiet, human background, distinct from every
 * section before it.
 */
export function DeveloperSection() {
  return (
    <section id="por-tras-do-projeto" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <DeveloperBackground />

      <Container className="relative z-10">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <DeveloperPhoto />
          <DeveloperContent />
        </div>
      </Container>
    </section>
  )
}
