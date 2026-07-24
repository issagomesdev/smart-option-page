import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { DEVELOPER_TECH, DEVELOPER_TECH_TITLE } from '@/constants/developer-content'

/**
 * Icon + name only, nothing else — deliberately lighter than every other section's tech grid (About's
 * feature cards, Architecture's icon+name+description cards). This one is meant to read as a quiet
 * footnote, not another rich content block.
 */
export function DeveloperTechGrid() {
  return (
    <div className="w-full">
      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs font-semibold uppercase tracking-wide text-muted"
      >
        {DEVELOPER_TECH_TITLE}
      </motion.p>

      <motion.div
        variants={staggerContainer}
        transition={{ staggerChildren: 0.04 }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {DEVELOPER_TECH.map(({ icon: Icon, name }) => (
          <motion.span
            key={name}
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors duration-300 hover:border-primary/25"
          >
            <Icon className="size-3.5 text-muted" aria-hidden="true" />
            {name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
