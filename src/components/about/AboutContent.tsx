import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { FeatureCard } from '@/components/about/FeatureCard'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  ABOUT_BADGE_TEXT,
  ABOUT_DESCRIPTION,
  ABOUT_FEATURES,
  ABOUT_TITLE,
} from '@/constants/about-content'

/** Left column of the About section — badge, title, description, and the feature card grid. */
export function AboutContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="flex flex-col items-start text-left"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <Badge>{ABOUT_BADGE_TEXT}</Badge>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
      >
        {ABOUT_TITLE}
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted"
      >
        {ABOUT_DESCRIPTION}
      </motion.p>

      <motion.div
        variants={staggerContainer}
        transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
        className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {ABOUT_FEATURES.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
