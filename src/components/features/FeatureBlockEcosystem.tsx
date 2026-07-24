import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/common/Reveal'
import { FeatureCard } from '@/components/about/FeatureCard'
import { EcosystemFinaleDiagram } from '@/components/features/EcosystemFinaleDiagram'
import { staggerContainer, fadeInUp, scaleIn } from '@/animations/variants'
import {
  ECOSYSTEM_BADGE_TEXT,
  ECOSYSTEM_DESCRIPTION,
  ECOSYSTEM_HIGHLIGHTS,
  ECOSYSTEM_TITLE,
} from '@/constants/features-content'
import { usePointerTilt } from '@/hooks/use-pointer-tilt'

/**
 * Bloco 3 — deliberately not another left/right split: centered text, then the (much larger) ecosystem
 * illustration spanning the full width, then a row of benefit cards. A finale layout, not a repeat.
 * Tracks its own pointer (scoped to just this block, roughly one screen tall) rather than the whole
 * section — a section spanning three full-screen blocks has no single "mouse position" that means
 * anything relative to whichever block is actually in view.
 */
export function FeatureBlockEcosystem() {
  const blockRef = useRef<HTMLDivElement>(null)
  const { x: pointerX, y: pointerY } = usePointerTilt(blockRef)

  return (
    <div
      ref={blockRef}
      className="relative flex min-h-[900px] items-center overflow-hidden py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, color-mix(in oklab, var(--color-accent) 6%, transparent) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex max-w-2xl flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Badge>{ECOSYSTEM_BADGE_TEXT}</Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            {ECOSYSTEM_TITLE}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance text-base leading-relaxed text-muted"
          >
            {ECOSYSTEM_DESCRIPTION}
          </motion.p>
        </motion.div>

        <Reveal variants={scaleIn} mode="viewport" className="mt-16 w-full max-w-3xl sm:mt-20">
          <EcosystemFinaleDiagram pointerX={pointerX} pointerY={pointerY} />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16 grid w-full grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ECOSYSTEM_HIGHLIGHTS.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <FeatureCard {...highlight} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
