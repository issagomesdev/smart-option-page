import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { fadeIn } from '@/animations/variants'
import { DEVELOPER_NAME } from '@/constants/developer-content'

const DEVELOPER_PHOTO_URL = import.meta.env.VITE_DEVELOPER_PHOTO_URL

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return `${first}${last}`.toUpperCase()
}

/**
 * Shows the real portrait once `VITE_DEVELOPER_PHOTO_URL` is set; until then, an elegant placeholder
 * stands in — a monogram in a soft glass frame, not a broken image or a generic silhouette. Either
 * way the glow, frame, and reveal/float animation around it stay the same; only the inner content swaps.
 */
export function DeveloperPhoto() {
  return (
    <Reveal variants={fadeIn} mode="viewport" className="relative mx-auto w-full max-w-sm">
      <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-primary/[0.12] opacity-60 blur-[80px]" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface via-background to-[#0a1210] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.75)]"
      >
        {DEVELOPER_PHOTO_URL ? (
          <img src={DEVELOPER_PHOTO_URL} alt={DEVELOPER_NAME} className="size-full object-cover" />
        ) : (
          <>
            <div className="absolute left-1/3 top-1/4 size-40 rounded-full bg-primary/10 blur-[70px]" />
            <div className="absolute right-1/4 bottom-1/4 size-32 rounded-full bg-accent/10 blur-[60px]" />

            <div className="relative flex h-full flex-col items-center justify-center gap-3">
              <span className="font-display text-6xl font-bold tracking-tight text-primary/30 sm:text-7xl">
                {getInitials(DEVELOPER_NAME)}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                <Sparkles className="size-3" aria-hidden="true" />
                Foto em breve
              </span>
            </div>
          </>
        )}
      </motion.div>
    </Reveal>
  )
}
