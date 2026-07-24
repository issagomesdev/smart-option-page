import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ContactCardData } from '@/types/contact'

interface ContactCardBaseProps extends Omit<ContactCardData, 'key'> {
  href?: string
  onClick?: () => void
}

const CARD_CLASSES =
  'group flex h-full min-h-24 w-full items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 text-left shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_0_28px_-12px_rgba(0,208,132,0.5)]'

/** One contact channel — icon, title, value, and an arrow signaling it navigates away. Every card the same size. */
export function ContactCard({ icon: Icon, title, value, href, onClick }: ContactCardBaseProps) {
  const content = (
    <>
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="truncate text-sm text-muted">{value}</p>
      </div>
      <ArrowUpRight
        className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        aria-hidden="true"
      />
    </>
  )

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={CARD_CLASSES}
      >
        {content}
      </motion.button>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={CARD_CLASSES}
    >
      {content}
    </motion.a>
  )
}
