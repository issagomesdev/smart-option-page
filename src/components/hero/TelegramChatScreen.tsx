import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import {
  TELEGRAM_BALANCE_LABEL,
  TELEGRAM_BALANCE_VALUE,
  TELEGRAM_GREETING,
  TELEGRAM_QUICK_ACTIONS,
} from '@/constants/chat-messages'

const screenTransition = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
}

interface TelegramChatScreenProps {
  scale?: number
}

/** First mockup screen: a simulated Telegram conversation with the Smart Option bot. */
export function TelegramChatScreen({ scale = 1 }: TelegramChatScreenProps) {
  return (
    <motion.div className="absolute inset-0 flex flex-col bg-[#0e1621]" {...screenTransition}>
      <header
        className="flex items-center border-b border-white/5 bg-[#17212b]"
        style={{ gap: 10 * scale, paddingInline: 16 * scale, paddingBlock: 12 * scale }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-telegram/20"
          style={{ width: 32 * scale, height: 32 * scale }}
        >
          <Send size={16 * scale} className="text-telegram" aria-hidden="true" />
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-foreground" style={{ fontSize: 13 * scale }}>
            Smart Option Bot
          </p>
          <p className="text-telegram" style={{ fontSize: 10.5 * scale }}>
            online
          </p>
        </div>
      </header>

      <div
        className="flex flex-1 flex-col overflow-hidden"
        style={{ gap: 8 * scale, paddingInline: 12 * scale, paddingBlock: 16 * scale }}
      >
        <div
          className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#182533] text-foreground"
          style={{ paddingInline: 14 * scale, paddingBlock: 10 * scale, fontSize: 13 * scale }}
        >
          {TELEGRAM_GREETING}
        </div>

        <div
          className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#182533] text-foreground"
          style={{ paddingInline: 14 * scale, paddingBlock: 12 * scale }}
        >
          <p className="text-muted" style={{ fontSize: 11 * scale }}>
            {TELEGRAM_BALANCE_LABEL}
          </p>
          <p className="font-bold text-primary" style={{ fontSize: 18 * scale }}>
            {TELEGRAM_BALANCE_VALUE}
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: 6 * scale }}>
          {TELEGRAM_QUICK_ACTIONS.map((action) => (
            <span
              key={action}
              className="rounded-lg border border-telegram/25 bg-telegram/10 text-center font-medium text-telegram"
              style={{ paddingInline: 8 * scale, paddingBlock: 6 * scale, fontSize: 11 * scale }}
            >
              {action}
            </span>
          ))}
        </div>

        <div
          className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-telegram text-white"
          style={{
            marginTop: 8 * scale,
            paddingInline: 14 * scale,
            paddingBlock: 8 * scale,
            fontSize: 13 * scale,
          }}
        >
          Minha rede
        </div>
      </div>
    </motion.div>
  )
}
