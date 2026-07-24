import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/about/FeatureCard'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { PILLARS } from '@/constants/developer-content'

/** The six pillars behind the project — every card the same size regardless of copy length. */
export function PillarsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      transition={{ staggerChildren: 0.07 }}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {PILLARS.map((pillar) => (
        <motion.div
          key={pillar.title}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <FeatureCard {...pillar} />
        </motion.div>
      ))}
    </motion.div>
  )
}
