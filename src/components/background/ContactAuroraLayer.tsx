import { motion } from 'framer-motion'

/**
 * Four enormous, heavily-blurred color washes — the section's ambient "aurora." Each drifts a few
 * rem over 25–40s and breathes opacity on its own unsynchronized rhythm, so nothing ever reads as a
 * static patch. Pure light and color, no geometry: at this size and blur nothing has a legible edge.
 */
export function ContactAuroraLayer() {
  return (
    <>
      {/* Verde principal */}
      <motion.div
        className="absolute left-[-8%] top-[4%] size-[46rem] rounded-full bg-primary/[0.05] blur-[180px]"
        animate={{
          x: [0, 24, -14, 0],
          y: [0, -18, 12, 0],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Verde esmeralda — green/cyan blend, deeper and quieter than the primary wash */}
      <motion.div
        className="absolute right-[-10%] top-[30%] size-[50rem] rounded-full blur-[190px]"
        style={{
          backgroundColor:
            'color-mix(in oklab, var(--color-primary) 55%, var(--color-telegram) 45%)',
        }}
        initial={{ opacity: 0.04 }}
        animate={{
          x: [0, -20, 16, 0],
          y: [0, 16, -12, 0],
          opacity: [0.04, 0.075, 0.04],
        }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      {/* Azul petróleo — dark teal-blue, the section's deepest tone */}
      <motion.div
        className="absolute left-[10%] bottom-[-8%] size-[44rem] rounded-full blur-[170px]"
        style={{
          backgroundColor: 'color-mix(in oklab, var(--color-telegram) 50%, black)',
        }}
        initial={{ opacity: 0.055 }}
        animate={{
          x: [0, 18, -20, 0],
          y: [0, -14, 10, 0],
          opacity: [0.055, 0.09, 0.055],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut', delay: 14 }}
      />

      {/* Ciano muito discreto — the faintest wash, just a whisper of cool light */}
      <motion.div
        className="absolute right-[6%] bottom-[6%] size-[36rem] rounded-full bg-telegram/[0.035] blur-[160px]"
        animate={{
          x: [0, -16, 12, 0],
          y: [0, 12, -16, 0],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </>
  )
}
