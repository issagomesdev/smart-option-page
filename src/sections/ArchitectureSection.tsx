import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { ArchitectureBackground } from '@/components/background/ArchitectureBackground'
import { ArchitectureDiagram } from '@/components/architecture/ArchitectureDiagram'
import { ArchitectureDiagramMobile } from '@/components/architecture/ArchitectureDiagramMobile'
import { TechStackGrid } from '@/components/architecture/TechStackGrid'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  ARCHITECTURE_BADGE_TEXT,
  ARCHITECTURE_DESCRIPTION,
  ARCHITECTURE_TITLE,
} from '@/constants/architecture-content'

/**
 * "Architecture" — the most technical section on the page, answering only "how was this built."
 * Three parts: a short intro, the diagram (the centerpiece), and the tech stack grid. Its own
 * network-topology background, distinct from every section before it.
 */
export function ArchitectureSection() {
  return (
    <section id="arquitetura" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <ArchitectureBackground />

      <Container className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex max-w-2xl flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Badge>{ARCHITECTURE_BADGE_TEXT}</Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            {ARCHITECTURE_TITLE}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance text-base leading-relaxed text-muted"
          >
            {ARCHITECTURE_DESCRIPTION}
          </motion.p>
        </motion.div>

        <div className="mt-20 w-full sm:mt-24">
          <div className="hidden md:block">
            <ArchitectureDiagram />
          </div>
          <div className="md:hidden">
            <ArchitectureDiagramMobile />
          </div>
        </div>

        <div className="mt-20 w-full max-w-4xl sm:mt-24">
          <TechStackGrid />
        </div>
      </Container>
    </section>
  )
}
