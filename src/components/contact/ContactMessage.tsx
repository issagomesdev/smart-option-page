import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/ui/icons/LinkedInIcon'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  CONTACT_BADGE_TEXT,
  CONTACT_CTA_PRIMARY,
  CONTACT_CTA_SECONDARY,
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
} from '@/constants/contact-content'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

/** Left column — the closing message and the two calls to action. */
export function ContactMessage() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="flex flex-col items-start text-left"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <Badge>{CONTACT_BADGE_TEXT}</Badge>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
      >
        {CONTACT_TITLE}
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-lg text-balance text-base leading-relaxed text-muted"
      >
        {CONTACT_DESCRIPTION}
      </motion.p>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
      >
        <Button
          href={GITHUB_URL ?? '#'}
          variant="primary"
          size="sm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="size-4" />
          {CONTACT_CTA_PRIMARY}
        </Button>
        <Button
          href={LINKEDIN_URL ?? '#'}
          variant="secondary"
          size="sm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="size-4" />
          {CONTACT_CTA_SECONDARY}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
