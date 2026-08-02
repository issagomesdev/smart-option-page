import { motion } from 'framer-motion'
import { ArrowUpRight, Bell, Clock3, TrendingUp, UserCheck, Users, Wallet } from 'lucide-react'
import { floatLoopDelayed } from '@/animations/variants'

const STAT_CARDS = [
  { label: 'Usuários ativos', value: '3.214', icon: Users, trend: '+8,4%' },
  { label: 'Saldo da rede', value: 'R$ 212,6k', icon: Wallet, trend: '+2,1%' },
  { label: 'Depósitos hoje', value: 'R$ 18,4k', icon: TrendingUp, trend: '+14%' },
  { label: 'Saques pendentes', value: '7', icon: Clock3, trend: '-3' },
]

const CHART_POINTS = [18, 26, 22, 34, 30, 42, 38, 52, 46, 60, 54, 66]

function buildLinePath(points: number[], width: number, height: number): string {
  const stepX = width / (points.length - 1)
  const max = Math.max(...points)
  return points
    .map((value, index) => {
      const x = index * stepX
      const y = height - (value / max) * height
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

const CHART_WIDTH = 280
const CHART_HEIGHT = 88

const MOVEMENTS = [
  { name: 'Marina T.', action: 'Depósito PIX', status: 'Confirmado', value: 'R$ 850,00' },
  { name: 'Diego R.', action: 'Saque', status: 'Em análise', value: 'R$ 1.200,00' },
  { name: 'Paula K.', action: 'Comissão de rede', status: 'Confirmado', value: 'R$ 96,00' },
  { name: 'Bruno A.', action: 'Assinatura de plano', status: 'Pendente', value: 'R$ 300,00' },
]

const STATUS_STYLES: Record<string, string> = {
  Confirmado: 'bg-primary/15 text-primary',
  'Em análise': 'bg-accent/15 text-accent',
  Pendente: 'bg-telegram/15 text-telegram',
}

const FILTERS = ['Hoje', '7 dias', '30 dias']

/**
 * Block 2's exclusive dashboard mockup — richer and more detailed than the Hero's `DashboardMockup`:
 * filter chips, a notification bell, four stat cards, a bigger live-feeling chart, and a movements
 * table with mixed statuses. A fresh component, not a resize of the Hero's version.
 */
export function AdminDashboardMockup() {
  return (
    <motion.div animate={floatLoopDelayed} className="w-full max-w-2xl">
      <div className="rounded-t-2xl border border-b-0 border-border bg-surface/90 p-px shadow-[0_40px_100px_-24px_rgba(0,0,0,0.7)]">
        <div className="rounded-t-[0.9rem] bg-[#0c0e12]">
          <div className="flex items-center gap-1.5 px-4 py-3 sm:px-5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate text-xs font-medium text-muted">
              Smart Option — Painel Administrativo
            </span>
          </div>

          <div className="flex flex-col gap-3.5 px-4 pb-5 sm:gap-4 sm:px-6 sm:pb-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-1.5">
                {FILTERS.map((filter, index) => (
                  <span
                    key={filter}
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                      index === 1 ? 'bg-primary/15 text-primary' : 'bg-surface/60 text-muted'
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
              <div className="relative flex size-7 items-center justify-center rounded-full border border-border bg-surface/60">
                <Bell className="size-3.5 text-muted" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex size-3.5 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-background">
                  3
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STAT_CARDS.map(({ label, value, icon: Icon, trend }) => (
                <div key={label} className="rounded-xl border border-border bg-surface/60 p-3">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-[15px] font-bold text-foreground">{value}</p>
                  <p className="truncate text-[10px] text-muted">{label}</p>
                  <p className="mt-1 text-[9.5px] font-medium text-primary">{trend}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
              <div className="min-w-0 rounded-xl border border-border bg-surface/60 p-3 sm:col-span-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted">Rentabilidade da rede</p>
                  <span className="flex items-center gap-0.5 text-[10px] font-semibold text-primary">
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                    18,2%
                  </span>
                </div>
                <svg
                  viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                  className="mt-2 w-full"
                  style={{ height: CHART_HEIGHT }}
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="admin-chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${buildLinePath(CHART_POINTS, CHART_WIDTH, CHART_HEIGHT)} L${CHART_WIDTH},${CHART_HEIGHT} L0,${CHART_HEIGHT} Z`}
                    fill="url(#admin-chart-fill)"
                  />
                  <motion.path
                    d={buildLinePath(CHART_POINTS, CHART_WIDTH, CHART_HEIGHT)}
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  />
                </svg>
              </div>

              <div className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 p-3 sm:col-span-2 sm:p-4">
                <div className="relative flex size-16 items-center justify-center rounded-full border-[5px] border-primary/20">
                  <motion.div
                    className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  />
                  <UserCheck className="size-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-center text-[10px] text-muted">Solicitações aprovadas hoje</p>
                <p className="text-sm font-bold text-foreground">94%</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface/60 p-3 sm:p-4">
              <div className="mb-2.5 flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-muted">Movimentações recentes</p>
                <span className="text-[10px] font-medium text-primary">Ver todas</span>
              </div>
              <div className="flex flex-col gap-2">
                {MOVEMENTS.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between gap-2 text-[11px]"
                  >
                    <span className="min-w-0 flex-1 truncate text-foreground/80">
                      {row.name} <span className="text-muted">· {row.action}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[9.5px] font-medium ${STATUS_STYLES[row.status]}`}
                    >
                      {row.status}
                    </span>
                    <span className="w-[4.5rem] shrink-0 text-right font-semibold text-foreground/80 sm:w-20">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto h-3.5 w-[104%] max-w-none -translate-x-[2%] rounded-b-2xl bg-gradient-to-b from-[#1c1e24] to-[#0c0d10]" />
      <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-[#0c0d10]" />
    </motion.div>
  )
}
