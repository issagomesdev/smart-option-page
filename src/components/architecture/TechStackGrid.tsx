import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { TECH_STACK } from '@/constants/architecture-content'

/**
 * Part 3 — deliberately not styled like the Hero's `TechIndicators` strip (no shared glass surface,
 * no dividers): individual minimalist cards, each carrying its own icon, name, and one-line role.
 * Reveals last in the section's sequence, after the diagram has finished drawing itself in.
 */
export function TechStackGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delayChildren: 0.1, staggerChildren: 0.05 }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
    >
      {TECH_STACK.map(({ icon: Icon, name, description }) => (
        <motion.div
          key={name}
          variants={fadeInUp}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-primary/25"
        >
          <Icon
            className="size-4 text-muted transition-colors duration-300 group-hover:text-primary"
            aria-hidden="true"
          />
          <div>
            <p className="text-[13px] font-semibold text-foreground">{name}</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">{description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
