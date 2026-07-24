import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BatteryFull,
  CheckCircle2,
  Clock3,
  QrCode,
  Receipt,
  SignalHigh,
  Users,
  Wallet,
  Wifi,
  type LucideIcon,
} from 'lucide-react'
import { useInterval } from '@/hooks/use-interval'
import { floatLoop } from '@/animations/variants'
import type { TelegramScreenId } from '@/types/features'

const SCREEN_ORDER: TelegramScreenId[] = [
  'saldo',
  'deposito',
  'confirmado',
  'extrato',
  'rede',
  'solicitacao',
]

const SCREEN_INTERVAL_MS = 3400

const screenTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
}

function BotMessage({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15">
        <Icon className="size-3.5 text-primary" aria-hidden="true" />
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#182533] px-3.5 py-3 text-foreground">
        {children}
      </div>
    </div>
  )
}

function SaldoScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center gap-3 px-4"
      {...screenTransition}
    >
      <BotMessage icon={Wallet}>
        <p className="text-[11px] text-muted">Seu saldo atual</p>
        <p className="mt-1 text-xl font-bold text-primary">R$ 2.480,00</p>
        <p className="mt-0.5 text-[10px] text-muted">Atualizado agora</p>
      </BotMessage>
    </motion.div>
  )
}

function DepositoScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center gap-3 px-4"
      {...screenTransition}
    >
      <BotMessage icon={QrCode}>
        <p className="text-[12px] text-foreground/90">Escaneie o QR Code ou copie o código PIX:</p>
        <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2.5">
          <QrCode className="size-8 text-[#0e1621]" aria-hidden="true" />
          <div>
            <p className="text-[13px] font-bold text-[#0e1621]">R$ 500,00</p>
            <p className="text-[9.5px] text-[#0e1621]/60">Código copia e cola</p>
          </div>
        </div>
      </BotMessage>
    </motion.div>
  )
}

function ConfirmadoScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
      {...screenTransition}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex size-14 items-center justify-center rounded-full bg-primary/15"
      >
        <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
      </motion.div>
      <div>
        <p className="text-sm font-semibold text-foreground">Pagamento confirmado!</p>
        <p className="mt-1 text-xs text-muted">R$ 500,00 creditados no seu saldo.</p>
      </div>
    </motion.div>
  )
}

const EXTRATO_ROWS = [
  { label: 'Depósito PIX', value: '+R$ 500,00', positive: true },
  { label: 'Saque', value: '-R$ 200,00', positive: false },
  { label: 'Comissão de rede', value: '+R$ 40,00', positive: true },
]

function ExtratoScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center gap-3 px-4"
      {...screenTransition}
    >
      <BotMessage icon={Receipt}>
        <p className="mb-2 text-[12px] text-foreground/90">Últimas movimentações:</p>
        <div className="flex flex-col gap-1.5">
          {EXTRATO_ROWS.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-2 text-[10.5px]">
              <span className="text-foreground/70">{row.label}</span>
              <span
                className={
                  row.positive ? 'font-semibold text-primary' : 'font-semibold text-foreground/70'
                }
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </BotMessage>
    </motion.div>
  )
}

function RedeScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center gap-3 px-4"
      {...screenTransition}
    >
      <BotMessage icon={Users}>
        <p className="mb-2 text-[12px] text-foreground/90">Sua rede de indicados:</p>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-background/40 px-2.5 py-2">
            <p className="text-sm font-bold text-foreground">12</p>
            <p className="text-[9.5px] text-muted">Indicados</p>
          </div>
          <div className="flex-1 rounded-lg bg-background/40 px-2.5 py-2">
            <p className="text-sm font-bold text-primary">R$ 340</p>
            <p className="text-[9.5px] text-muted">Em comissões</p>
          </div>
        </div>
      </BotMessage>
    </motion.div>
  )
}

function SolicitacaoScreen() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center gap-3 px-4"
      {...screenTransition}
    >
      <BotMessage icon={Clock3}>
        <p className="text-[12px] font-medium text-foreground/90">Solicitação de saque enviada</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-[13px] font-bold text-foreground">R$ 300,00</span>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[9.5px] font-medium text-accent">
            Em análise
          </span>
        </div>
      </BotMessage>
    </motion.div>
  )
}

const SCREEN_COMPONENTS: Record<TelegramScreenId, () => React.JSX.Element> = {
  saldo: SaldoScreen,
  deposito: DepositoScreen,
  confirmado: ConfirmadoScreen,
  extrato: ExtratoScreen,
  rede: RedeScreen,
  solicitacao: SolicitacaoScreen,
}

interface TelegramMockupProps {
  className?: string
}

/**
 * Block 1's exclusive phone mockup — a fresh conversation with the bot, not the Hero's `PhoneMockup`/
 * `TelegramChatScreen`. Cycles through six different system states (balance, deposit, confirmation,
 * statement, network, withdrawal request) instead of the Hero's chat → PIX → confirmation sequence.
 */
export function TelegramMockup({ className }: TelegramMockupProps) {
  const [screenIndex, setScreenIndex] = useState(0)

  useInterval(() => {
    setScreenIndex((current) => (current + 1) % SCREEN_ORDER.length)
  }, SCREEN_INTERVAL_MS)

  const activeScreenId = SCREEN_ORDER[screenIndex]!
  const ActiveScreen = SCREEN_COMPONENTS[activeScreenId]

  return (
    <motion.div
      animate={floatLoop}
      className={`relative w-[240px] rounded-[2.75rem] border-[6px] border-[#1c1e24] bg-[#0c0d10] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:w-[272px] ${className ?? ''}`}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative flex aspect-[9/19.5] w-full flex-col overflow-hidden rounded-[2.25rem] bg-[#0e1621]">
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-medium text-foreground">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <SignalHigh className="size-3.5" aria-hidden="true" />
            <Wifi className="size-3.5" aria-hidden="true" />
            <BatteryFull className="size-4" aria-hidden="true" />
          </div>
        </div>
        <header className="flex items-center gap-2.5 border-b border-white/5 bg-[#17212b] px-4 py-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-telegram/20">
            <Wallet className="size-4 text-telegram" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-foreground">Smart Option Bot</p>
            <p className="text-[10.5px] text-telegram">online</p>
          </div>
        </header>
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <ActiveScreen key={activeScreenId} />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
