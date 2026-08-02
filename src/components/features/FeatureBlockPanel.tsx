import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/common/Reveal'
import { FeatureCardGrid } from '@/components/features/FeatureCardGrid'
import { AdminDashboardMockup } from '@/components/features/AdminDashboardMockup'
import { staggerContainer, fadeInUp, scaleIn } from '@/animations/variants'
import {
  PANEL_BADGE_TEXT,
  PANEL_DESCRIPTION,
  PANEL_FEATURES,
  PANEL_TITLE,
} from '@/constants/features-content'

/**
 * Bloco 2 — layout fully flipped from Bloco 1: the mockup leads (left), text and cards follow (right).
 * A discrete gray grid + soft corporate wash layers on top of the shared background, distinguishing
 * this block as "the operational view" without introducing a whole separate background system.
 */
export function FeatureBlockPanel() {
  return (
    <div className="relative flex min-h-[860px] items-center overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), ' +
            'linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 85%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 25% 55%, color-mix(in oklab, var(--color-foreground) 5%, transparent) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
          {/* `min-w-0`: itens de grid têm `min-width: auto`, então esta célula se recusava a
              encolher abaixo do min-content do mockup e o estourava para fora da tela em
              telas estreitas (366px dentro de uma célula de 312px, cortados pelo
              `overflow-hidden` da seção). Com o piso liberado, o `w-full` do mockup passa a
              valer de verdade. O padding extra dá respiro nas bordas no celular. */}
          <Reveal
            variants={scaleIn}
            mode="viewport"
            className="flex min-w-0 justify-center px-1 sm:px-0 lg:justify-start"
          >
            <AdminDashboardMockup />
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <Badge>{PANEL_BADGE_TEXT}</Badge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              {PANEL_TITLE}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted"
            >
              {PANEL_DESCRIPTION}
            </motion.p>

            <FeatureCardGrid
              items={PANEL_FEATURES}
              className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-2"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
