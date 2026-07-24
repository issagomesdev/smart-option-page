import { motion } from 'framer-motion'
import { CheckCircle2, LayoutDashboard, Send } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import {
  DEMO_BADGE_TEXT,
  DEMO_DESCRIPTION,
  DEMO_HIGHLIGHTS,
  DEMO_TITLE,
} from '@/constants/demo-content'

const BOT_DEMO_URL = import.meta.env.VITE_BOT_DEMO_URL
const ADMIN_DEMO_URL = import.meta.env.VITE_ADMIN_DEMO_URL

/** Left column — badge, title, description, the checklist of what the walkthrough covers, and the same demo CTAs the Header offers. */
export function DemoContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="flex flex-col items-start text-left"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <Badge>{DEMO_BADGE_TEXT}</Badge>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
      >
        {DEMO_TITLE}
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted"
      >
        {DEMO_DESCRIPTION}
      </motion.p>

      <motion.ul
        variants={staggerContainer}
        transition={{ delayChildren: 0.3, staggerChildren: 0.07 }}
        className="mt-9 grid w-full grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
      >
        {DEMO_HIGHLIGHTS.map((highlight) => (
          <motion.li
            key={highlight.label}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center gap-2.5"
          >
            <CheckCircle2
              className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="text-sm text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
              {highlight.label}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
      >
        <Button
          href={BOT_DEMO_URL ?? '#'}
          variant="secondary"
          target="_blank"
          size="sm"
          rel="noreferrer noopener"
        >
          <Send className="size-3" aria-hidden="true" />
          Demo do Bot
        </Button>
        <Button
          href={ADMIN_DEMO_URL ?? '#'}
          variant="primary"
          target="_blank"
          size="sm"
          rel="noreferrer noopener"
        >
          <LayoutDashboard className="size-3" aria-hidden="true" />
          Demo do Painel
        </Button>
      </motion.div>
    </motion.div>
  )
}
