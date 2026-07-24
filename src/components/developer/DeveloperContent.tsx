import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { PillarsGrid } from '@/components/developer/PillarsGrid'
import { DeveloperTechGrid } from '@/components/developer/DeveloperTechGrid'
import { PhilosophyBlock } from '@/components/developer/PhilosophyBlock'
import { SocialLinks } from '@/components/developer/SocialLinks'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  DEVELOPER_BADGE_TEXT,
  DEVELOPER_DESCRIPTION,
  DEVELOPER_NAME,
  DEVELOPER_ROLE,
  DEVELOPER_SUMMARY,
  DEVELOPER_TITLE,
} from '@/constants/developer-content'

/**
 * Right column — badge, title, and intro description first (the section's own header), then the
 * name/role byline, the six pillars, the tech footnote, the philosophy quote, and the social links,
 * all inheriting the same scroll-triggered stagger.
 */
export function DeveloperContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="flex flex-col items-start gap-9 text-left"
    >
      <div>
        <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <Badge>{DEVELOPER_BADGE_TEXT}</Badge>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
        >
          {DEVELOPER_TITLE}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted"
        >
          {DEVELOPER_DESCRIPTION}
        </motion.p>
      </div>

      <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <p className="font-display text-xl font-bold text-foreground">{DEVELOPER_NAME}</p>
        <p className="mt-0.5 text-sm font-medium text-primary">{DEVELOPER_ROLE}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{DEVELOPER_SUMMARY}</p>
      </motion.div>

      <PillarsGrid />
      <DeveloperTechGrid />
      <PhilosophyBlock />
      <SocialLinks />
    </motion.div>
  )
}
