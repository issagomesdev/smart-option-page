import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { QrPattern } from '@/components/hero/QrPattern'
import { PIX_PAYMENT_VALUE } from '@/constants/chat-messages'
import { floatDiagonal } from '@/animations/variants'

interface QrCardProps {
  className?: string
}

/** Floating glass card, detached from the phone/notebook pair — a standalone accent, not either mockup's internal screen. */
export function QrCard({ className }: QrCardProps) {
  return (
    <motion.div animate={floatDiagonal} className={className}>
      <AnimatedCard className="flex w-52 items-center gap-3 p-3.5">
        <QrPattern size={7} className="w-16 shrink-0" />
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-[10px] font-medium text-muted">
            <Zap className="size-3 text-primary" aria-hidden="true" />
            Pagamento PIX
          </p>
          <p className="mt-0.5 truncate text-lg font-bold text-foreground">{PIX_PAYMENT_VALUE}</p>
          <p className="mt-0.5 text-[10px] text-primary">Copia e cola disponível</p>
        </div>
      </AnimatedCard>
    </motion.div>
  )
}
