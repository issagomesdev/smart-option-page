import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { SOCIAL_LINKS } from '@/constants/developer-content'
import { useCurriculumModal } from '@/hooks/use-curriculum-modal'

const DEVELOPER_EMAIL = import.meta.env.VITE_DEVELOPER_EMAIL

const LINK_HREFS: Record<string, string | undefined> = {
  GitHub: import.meta.env.VITE_GITHUB_URL,
  LinkedIn: import.meta.env.VITE_LINKEDIN_URL,
  Portfólio: import.meta.env.VITE_PORTFOLIO_URL,
  Email: DEVELOPER_EMAIL ? `mailto:${DEVELOPER_EMAIL}` : undefined,
}

const LINK_CLASSES =
  'group flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted shadow-[0_0_0_0_rgba(0,208,132,0)] transition-all duration-300 hover:border-primary/35 hover:text-primary hover:shadow-[0_0_20px_-4px_rgba(0,208,132,0.5)]'

/** Icon-only social links — discrete glow and lift on hover, never a loud button. "Currículo" opens the curriculum modal instead of linking anywhere. */
export function SocialLinks() {
  const { open: openCurriculumModal } = useCurriculumModal()

  return (
    <motion.div
      variants={staggerContainer}
      transition={{ staggerChildren: 0.05 }}
      className="flex flex-wrap items-center gap-3"
    >
      {SOCIAL_LINKS.map(({ icon: Icon, label }) =>
        label === 'Currículo' ? (
          <motion.button
            key={label}
            type="button"
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={openCurriculumModal}
            aria-label={label}
            whileHover={{ y: -3 }}
            className={LINK_CLASSES}
          >
            <Icon className="size-4" aria-hidden="true" />
          </motion.button>
        ) : (
          <motion.a
            key={label}
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            href={LINK_HREFS[label] ?? '#'}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            whileHover={{ y: -3 }}
            className={LINK_CLASSES}
          >
            <Icon className="size-4" aria-hidden="true" />
          </motion.a>
        ),
      )}
    </motion.div>
  )
}
