import { useState, type KeyboardEvent, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, Play, Volume2, Zap } from 'lucide-react'
import {
  COMING_SOON_DESCRIPTION,
  COMING_SOON_TITLE,
  COMING_SOON_TOAST,
  VIDEO_METADATA,
} from '@/constants/demo-content'

interface Ripple {
  id: number
  xPercent: number
  yPercent: number
}

let rippleId = 0

/**
 * A realistic video player chrome — poster, title bar, center play button, fake progress/time control
 * bar — built exactly as it would be once the real video exists, with a "Coming Soon" overlay standing
 * in for playback. Activating it never opens a modal: a ripple plays at the interaction point (the
 * click position for a mouse, the center for keyboard activation) and a small toast confirms the
 * walkthrough is on its way.
 */
export function VideoPlayer() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [showToast, setShowToast] = useState(false)

  function triggerFeedback(xPercent: number, yPercent: number) {
    const id = rippleId++
    setRipples((current) => [...current, { id, xPercent, yPercent }])
    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id))
    }, 700)

    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2800)
  }

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100
    triggerFeedback(xPercent, yPercent)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    triggerFeedback(50, 50)
  }

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-primary/15 opacity-50 blur-[70px] transition-opacity duration-500 sm:-inset-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Reproduzir demonstração — disponível em breve"
        className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl border border-border shadow-[0_40px_100px_-24px_rgba(0,0,0,0.75)] sm:aspect-video"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-[#0a1210]">
          <div className="absolute left-1/4 top-1/3 size-64 rounded-full bg-primary/10 blur-[90px]" />
          <div className="absolute right-1/4 bottom-1/4 size-56 rounded-full bg-telegram/10 blur-[80px]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
            <Zap className="size-40" fill="currentColor" aria-hidden="true" />
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/50 to-transparent p-4 sm:p-5">
          <div>
            <p className="text-xs font-semibold text-white sm:text-sm">{VIDEO_METADATA.title}</p>
            <p className="mt-0.5 text-[10px] text-white/60 sm:text-xs">{VIDEO_METADATA.subtitle}</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            Preview
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/55 px-6 text-center transition-colors duration-300 group-hover:bg-background/40">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex size-16 items-center justify-center rounded-full bg-primary text-background shadow-[0_0_36px_-4px_rgba(0,208,132,0.6)] transition-shadow duration-300 group-hover:shadow-[0_0_56px_-4px_rgba(0,208,132,0.85)] sm:size-20"
          >
            <Play className="ml-1 size-7 sm:size-8" fill="currentColor" aria-hidden="true" />
          </motion.div>

          <div>
            <p className="text-base font-bold text-foreground sm:text-lg">{COMING_SOON_TITLE}</p>
            <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-muted sm:text-sm">
              {COMING_SOON_DESCRIPTION}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
          <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-0 rounded-full bg-primary" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-white/70 sm:text-[11px]">
            <span>00:00 / {VIDEO_METADATA.duration}</span>
            <div className="flex items-center gap-2.5">
              <Volume2 className="size-3.5" aria-hidden="true" />
              <Maximize2 className="size-3.5" aria-hidden="true" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ opacity: 0.5, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="pointer-events-none absolute size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40"
              style={{ left: `${ripple.xPercent}%`, top: `${ripple.yPercent}%` }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex items-center justify-center"
          >
            <span className="rounded-full border border-border bg-surface/90 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur-md">
              {COMING_SOON_TOAST}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted">
        <span>Estimated duration</span>
        <span className="font-medium text-foreground/80">{VIDEO_METADATA.duration}</span>
        <span aria-hidden="true">•</span>
        <span className="font-medium text-foreground/80">{VIDEO_METADATA.quality}</span>
        <span aria-hidden="true">•</span>
        <span className="font-medium text-foreground/80">{VIDEO_METADATA.captions}</span>
      </div>
    </div>
  )
}
