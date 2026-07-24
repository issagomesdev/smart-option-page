import { motion } from 'framer-motion'
import { useViewportTier } from '@/hooks/use-viewport-tier'

/**
 * Two soft focal glows — one seated behind the title, one behind the cards column — a little more
 * concentrated than the ambient `ContactAuroraLayer` washes so the eye is gently guided toward the
 * message and the contact options without either glow ever reading as a shape of its own. Repositions
 * when the section stacks to one column (title on top, cards below) instead of side by side.
 */
export function ContactSpotlightLayer() {
  const viewportTier = useViewportTier()
  const isStacked = viewportTier === 'mobile' || viewportTier === 'tablet'

  const titleSpot = isStacked ? { left: '50%', top: '26%' } : { left: '25%', top: '48%' }
  const cardsSpot = isStacked ? { left: '50%', top: '70%' } : { left: '75%', top: '48%' }

  return (
    <>
      <motion.div
        className="absolute size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[150px]"
        style={titleSpot}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          ...cardsSpot,
          backgroundColor:
            'color-mix(in oklab, var(--color-primary) 50%, var(--color-telegram) 50%)',
        }}
        initial={{ opacity: 0.05 }}
        animate={{ opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
    </>
  )
}
