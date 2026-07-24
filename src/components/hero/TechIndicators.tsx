import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { TECH_INDICATORS } from '@/constants/tech-stack'

/**
 * Tech strip closing out the Hero — deliberately not styled like the differentiator chips above it:
 * no per-item card, border, or shadow, just icon+label pairs inside one shared glass surface. Reads
 * as infrastructure, not another badge row, and doubles as the visual bridge into the next section —
 * revealed on scroll, since a taller Hero can put it below the fold, not tied to the rest of the
 * Hero's mount-triggered entrance.
 *
 * Wraps via `flex-wrap` at every width instead of forcing a single desktop row: with 8 editable
 * labels of unpredictable length, a hard "single line above Xpx" threshold is exactly the kind of
 * thing that silently overflows the viewport again the next time a label changes.
 */
export function TechIndicators() {
  return (
    <div className="mt-30 md:mt-12 flex justify-center lg:mt-20">
      <div className="relative">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
          style={{
            background:
              'radial-gradient(ellipse at center, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          transition={{ staggerChildren: 0.07 }}
          className="grid max-w-full grid-cols-2 gap-x-8 gap-y-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 backdrop-blur-[10px] sm:flex sm:flex-wrap sm:justify-center sm:gap-x-9 sm:gap-y-4 sm:px-8 lg:px-10"
        >
          {TECH_INDICATORS.map(({ label, icon: Icon }) => (
            <motion.li
              key={label}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="group flex shrink-0 items-center justify-center gap-2"
            >
              <Icon
                className="size-4 shrink-0 text-muted/60 transition-colors duration-300 group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-[12.5px] font-medium text-muted/80 transition-colors duration-300 group-hover:text-foreground">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
