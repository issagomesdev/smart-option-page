import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  HERO_BADGE_TEXT,
  HERO_DESCRIPTION,
  HERO_DIFFERENTIATORS,
  HERO_TITLE_SEGMENTS,
} from '@/constants/hero-content'
import type { HeroTitleVariant } from '@/types/hero'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

const TITLE_VARIANT_STYLES: Record<HeroTitleVariant, string> = {
  brand: 'text-primary [text-shadow:0_0_28px_rgba(0,208,132,0.45)]',
  telegram: 'text-telegram [text-shadow:0_0_28px_rgba(34,158,217,0.65)]',
}

/** Left column of the Hero — badge, headline, description, differentiators, and calls to action. */
export function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <Badge>{HERO_BADGE_TEXT}</Badge>
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-balance whitespace-pre-line font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
      >
        {HERO_TITLE_SEGMENTS.map((segment, index) => (
          <span
            key={index}
            className={segment.variant ? TITLE_VARIANT_STYLES[segment.variant] : undefined}
          >
            {segment.text}
          </span>
        ))}
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
      >
        {HERO_DESCRIPTION}
      </motion.p>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 flex flex-wrap gap-2"
      >
        {HERO_DIFFERENTIATORS.map((item) => (
          <Chip key={item.label} label={item.label} icon={item.icon} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <Button href="#demonstracao" variant="primary" size="sm">
          Ver demonstração
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
        <Button
          href={GITHUB_URL ?? '#'}
          variant="secondary"
          target="_blank"
          size="sm"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="size-4" />
          GitHub
        </Button>
      </motion.div>
    </motion.div>
  )
}
