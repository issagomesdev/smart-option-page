import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PHONE_SCREEN_INTERVAL_MS, PHONE_SCREEN_ORDER } from '@/constants/mockup'
import { useInterval } from '@/hooks/use-interval'
import { PhoneStatusBar } from '@/components/hero/PhoneStatusBar'
import { TelegramChatScreen } from '@/components/hero/TelegramChatScreen'
import { PixPaymentScreen } from '@/components/hero/PixPaymentScreen'
import { PaymentConfirmedScreen } from '@/components/hero/PaymentConfirmedScreen'
import { floatLoop } from '@/animations/variants'
import type { MockupSize, MockupSizePreset } from '@/types/hero'
import { cn } from '@/utils/cn'

const SCREEN_COMPONENTS = {
  chat: TelegramChatScreen,
  'pix-payment': PixPaymentScreen,
  'payment-confirmed': PaymentConfirmedScreen,
} as const

/** Reference width (the previous `sm:` breakpoint width) every scaled metric is derived from. */
const BASE_WIDTH = 272

/** Named shorthands for common widths — pass a raw pixel number instead for anything in between or beyond. */
const PRESET_WIDTH: Record<MockupSizePreset, number> = {
  sm: 158,
  md: 272,
  lg: 320,
}

interface PhoneMockupProps {
  /**
   * Named preset ('sm' | 'md' | 'lg') or an explicit width in pixels — the phone chrome, notch,
   * status bar, and every screen's text/icons/paddings all scale together from it. Omit to keep the
   * default responsive width (158px, 272px from `sm:`).
   */
  size?: MockupSize
  className?: string
}

/** Phone chrome that auto-cycles through the three mockup screens. */
export function PhoneMockup({ size, className }: PhoneMockupProps) {
  const [screenIndex, setScreenIndex] = useState(0)

  useInterval(() => {
    setScreenIndex((current) => (current + 1) % PHONE_SCREEN_ORDER.length)
  }, PHONE_SCREEN_INTERVAL_MS)

  const activeScreenId = PHONE_SCREEN_ORDER[screenIndex]
  const ActiveScreen = SCREEN_COMPONENTS[activeScreenId]

  const width =
    size === undefined ? undefined : typeof size === 'number' ? size : PRESET_WIDTH[size]
  const scale = width === undefined ? 1 : width / BASE_WIDTH

  return (
    <motion.div
      animate={floatLoop}
      style={
        width === undefined
          ? undefined
          : { width, borderWidth: 6 * scale, borderRadius: 44 * scale }
      }
      className={cn(
        'relative border-[#1c1e24] bg-[#0c0d10] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]',
        width === undefined && 'w-[158px] rounded-[2.75rem] border-[6px] sm:w-[272px]',
        className,
      )}
    >
      <div
        className="absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black"
        style={
          width === undefined
            ? undefined
            : { top: 10 * scale, height: 24 * scale, width: 96 * scale }
        }
      />
      <div
        className={cn(
          'relative flex aspect-[9/19.5] w-full flex-col overflow-hidden bg-[#0e1621]',
          width === undefined && 'rounded-[2.25rem]',
        )}
        style={width === undefined ? undefined : { borderRadius: 36 * scale }}
      >
        <PhoneStatusBar scale={scale} />
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <ActiveScreen key={activeScreenId} scale={scale} />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
