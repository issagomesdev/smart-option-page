import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/common/Reveal'
import { FeatureCardGrid } from '@/components/features/FeatureCardGrid'
import { TelegramMockup } from '@/components/features/TelegramMockup'
import { staggerContainer, fadeInUp, scaleIn } from '@/animations/variants'
import {
  BOT_BADGE_TEXT,
  BOT_DESCRIPTION,
  BOT_FEATURES,
  BOT_TITLE,
} from '@/constants/features-content'

/**
 * Bloco 1 — text and cards lead (left), the new Telegram mockup follows (right). A soft telegram-blue
 * local tint layers on top of the section's shared background without replacing it, giving this block
 * its own identity while still reading as part of one continuous Funcionalidades section.
 */
export function FeatureBlockTelegram() {
  return (
    <div className="relative flex min-h-[860px] items-center overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 30%, color-mix(in oklab, var(--color-telegram) 8%, transparent) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <Badge>{BOT_BADGE_TEXT}</Badge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
            >
              {BOT_TITLE}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted"
            >
              {BOT_DESCRIPTION}
            </motion.p>

            <FeatureCardGrid
              items={BOT_FEATURES}
              className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-2"
            />
          </motion.div>

          <Reveal variants={scaleIn} mode="viewport" className="flex justify-center lg:justify-end">
            <TelegramMockup />
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
