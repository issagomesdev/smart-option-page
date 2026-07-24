import type { PhoneScreenId } from '@/types/mockup'

/** Order the phone mockup cycles through automatically. */
export const PHONE_SCREEN_ORDER: readonly PhoneScreenId[] = [
  'chat',
  'pix-payment',
  'payment-confirmed',
]

/** How long each phone screen stays visible before advancing, in milliseconds. */
export const PHONE_SCREEN_INTERVAL_MS = 3800
