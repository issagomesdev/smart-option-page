import { motion } from 'framer-motion'
import { ContactCard } from '@/components/contact/ContactCard'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { CONTACT_CARDS } from '@/constants/contact-content'
import { useCurriculumModal } from '@/hooks/use-curriculum-modal'
import type { ContactLinkKey } from '@/types/contact'

const DEVELOPER_EMAIL = import.meta.env.VITE_DEVELOPER_EMAIL

/** Every key but `resume`, which opens the curriculum modal instead of linking anywhere. */
const HREF_BY_KEY: Record<Exclude<ContactLinkKey, 'resume'>, string> = {
  email: DEVELOPER_EMAIL ? `mailto:${DEVELOPER_EMAIL}` : '#',
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? '#',
  github: import.meta.env.VITE_GITHUB_URL ?? '#',
  portfolio: import.meta.env.VITE_PORTFOLIO_URL ?? '#',
}

/** Grid of contact channels — every card the same size regardless of value length. */
export function ContactCardsGrid() {
  const { open: openCurriculumModal } = useCurriculumModal()

  return (
    <motion.div
      variants={staggerContainer}
      transition={{ staggerChildren: 0.07 }}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {CONTACT_CARDS.map((card) => (
        <motion.div
          key={card.key}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          {card.key === 'resume' ? (
            <ContactCard
              icon={card.icon}
              title={card.title}
              value={card.value}
              onClick={openCurriculumModal}
            />
          ) : (
            <ContactCard
              icon={card.icon}
              title={card.title}
              value={card.value}
              href={HREF_BY_KEY[card.key]}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
