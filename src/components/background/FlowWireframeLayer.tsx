import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Bell, LayoutDashboard, QrCode, Send, User, Wallet, type LucideIcon } from 'lucide-react'

const ICONS: LucideIcon[] = [QrCode, Send, LayoutDashboard, Wallet, User, Bell]
const ELEMENT_COUNT = 10

interface WireframeElement {
  id: number
  kind: 'card' | 'icon'
  topPercent: number
  leftPercent: number
  size: number
  icon: LucideIcon
  duration: number
  delay: number
}

/** Deterministic pseudo-random placement across the whole (tall) section. */
function createElements(): WireframeElement[] {
  let seed = 133
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  return Array.from({ length: ELEMENT_COUNT }, (_, id) => {
    const kind: WireframeElement['kind'] = id % 2 === 0 ? 'card' : 'icon'
    return {
      id,
      kind,
      topPercent: next() * 100,
      leftPercent: next() * 100,
      size: kind === 'card' ? 90 + next() * 70 : 26 + next() * 16,
      icon: ICONS[id % ICONS.length]!,
      duration: 9 + next() * 6,
      delay: next() * 9,
    }
  })
}

/**
 * Extremely faint wireframe cards and minimalist icon glyphs fading in and out — a hint of interface
 * elements floating through the background, never resolving into anything readable.
 */
export function FlowWireframeLayer() {
  const elements = useMemo(() => createElements(), [])

  return (
    <div className="absolute inset-0">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{ top: `${element.topPercent}%`, left: `${element.leftPercent}%` }}
            animate={{ opacity: [0, element.kind === 'card' ? 0.05 : 0.08, 0] }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: element.delay,
            }}
          >
            {element.kind === 'card' ? (
              <div
                className="rounded-xl border border-foreground/40"
                style={{ width: element.size, height: element.size * 0.62 }}
              />
            ) : (
              <Icon
                style={{ width: element.size, height: element.size }}
                className="text-foreground"
                aria-hidden="true"
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
