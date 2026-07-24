import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp } from '@/animations/variants'
import { PHILOSOPHY_TEXT, PHILOSOPHY_TITLE } from '@/constants/developer-content'

/** A quote-styled callout — colored side bar + discrete quotation mark, not another card. */
export function PhilosophyBlock() {
  return (
    <motion.blockquote
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-l-2 border-primary/40 pl-5"
    >
      <Quote
        className="absolute -left-[9px] -top-1 size-4 rotate-180 bg-background text-primary/60"
        aria-hidden="true"
      />
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{PHILOSOPHY_TITLE}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{PHILOSOPHY_TEXT}</p>
    </motion.blockquote>
  )
}
