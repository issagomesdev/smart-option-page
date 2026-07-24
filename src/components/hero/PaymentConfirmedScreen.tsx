import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { PAYMENT_CONFIRMED_SUBTITLE, PAYMENT_CONFIRMED_TITLE } from '@/constants/chat-messages'

const screenTransition = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
}

interface PaymentConfirmedScreenProps {
  scale?: number
}

/** Third mockup screen: the success state right after a PIX payment confirms. */
export function PaymentConfirmedScreen({ scale = 1 }: PaymentConfirmedScreenProps) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-surface text-center"
      style={{ gap: 16 * scale, paddingInline: 24 * scale }}
      {...screenTransition}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex items-center justify-center rounded-full bg-primary/15"
        style={{ width: 64 * scale, height: 64 * scale }}
      >
        <CheckCircle2 size={36 * scale} className="text-primary" aria-hidden="true" />
      </motion.div>

      <div>
        <p className="font-semibold text-foreground" style={{ fontSize: 16 * scale }}>
          {PAYMENT_CONFIRMED_TITLE}
        </p>
        <p className="text-muted" style={{ marginTop: 4 * scale, fontSize: 14 * scale }}>
          {PAYMENT_CONFIRMED_SUBTITLE}
        </p>
      </div>
    </motion.div>
  )
}
