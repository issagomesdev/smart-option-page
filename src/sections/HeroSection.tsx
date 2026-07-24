import { useRef } from 'react'
import { Container } from '@/components/layout/Container'
import { HeroBackground } from '@/components/background/HeroBackground'
import { HeroContent } from '@/components/hero/HeroContent'
import { HeroVisual } from '@/components/hero/HeroVisual'
import { TechIndicators } from '@/components/hero/TechIndicators'
import { HeroTransition } from '@/components/hero/HeroTransition'
import { usePointerTilt } from '@/hooks/use-pointer-tilt'

/** The landing page's first screen — composes the background, the two-column layout, and the tech strip. */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { x: pointerX, y: pointerY } = usePointerTilt(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <HeroBackground pointerX={pointerX} pointerY={pointerY} />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <HeroContent />
          <HeroVisual pointerX={pointerX} pointerY={pointerY} />
        </div>

        <TechIndicators />
      </Container>

      <HeroTransition />
    </section>
  )
}
