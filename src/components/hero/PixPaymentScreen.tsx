import { motion } from 'framer-motion'
import { ChevronLeft, Copy } from 'lucide-react'
import { QrPattern } from '@/components/hero/QrPattern'
import {
  PIX_COPY_PASTE_CODE,
  PIX_PAYMENT_LABEL,
  PIX_PAYMENT_VALUE,
} from '@/constants/chat-messages'

const screenTransition = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
}

interface PixPaymentScreenProps {
  scale?: number
}

/** Second mockup screen: the PIX payment sheet with QR code and copy-and-paste code. */
export function PixPaymentScreen({ scale = 1 }: PixPaymentScreenProps) {
  return (
    <motion.div className="absolute inset-0 flex flex-col bg-surface" {...screenTransition}>
      <header
        className="flex items-center border-b border-border"
        style={{ gap: 8 * scale, paddingInline: 16 * scale, paddingBlock: 12 * scale }}
      >
        <ChevronLeft size={16 * scale} className="text-muted" aria-hidden="true" />
        <p className="font-semibold text-foreground" style={{ fontSize: 13 * scale }}>
          {PIX_PAYMENT_LABEL}
        </p>
      </header>

      <div
        className="flex flex-1 flex-col items-center"
        style={{ gap: 16 * scale, paddingInline: 20 * scale, paddingBlock: 24 * scale }}
      >
        <div style={{ width: 160 * scale }}>
          <QrPattern className="w-full" />
        </div>

        <p className="font-bold text-foreground" style={{ fontSize: 24 * scale }}>
          {PIX_PAYMENT_VALUE}
        </p>

        <div
          className="w-full rounded-xl border border-border bg-background/60"
          style={{ paddingInline: 12 * scale, paddingBlock: 10 * scale }}
        >
          <p
            className="uppercase tracking-wide text-muted"
            style={{ marginBottom: 4 * scale, fontSize: 10 * scale }}
          >
            Código copia e cola
          </p>
          <div className="flex items-center" style={{ gap: 8 * scale }}>
            <p
              className="flex-1 truncate font-mono text-foreground/80"
              style={{ fontSize: 11 * scale }}
            >
              {PIX_COPY_PASTE_CODE}
            </p>
            <Copy size={14 * scale} className="shrink-0 text-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
