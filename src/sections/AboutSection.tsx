import { useRef } from 'react'
import { Container } from '@/components/layout/Container'
import { AboutBackground } from '@/components/background/AboutBackground'
import { AboutContent } from '@/components/about/AboutContent'
import { EcosystemDiagram } from '@/components/about/EcosystemDiagram'
import { usePointerTilt } from '@/hooks/use-pointer-tilt'

/**
 * "Sobre" — answers only "what is Smart Option." How it's built belongs to the later Arquitetura
 * section, not here. Backed by its own background identity (no grid/particles/connections/glow
 * reused from the Hero) so it reads as a new chapter, and its own abstract illustration rather than
 * another device mockup — those belong to the Hero.
 */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { x: pointerX, y: pointerY } = usePointerTilt(sectionRef)

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <AboutBackground />

      <Container className="relative z-10">
        <div className="grid items-stretch gap-16 lg:grid-cols-2 lg:gap-12">
          <AboutContent />
          <EcosystemDiagram pointerX={pointerX} pointerY={pointerY} />
        </div>
      </Container>
    </section>
  )
}
