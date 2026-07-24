import { TrendingUp, Users, Wallet } from 'lucide-react'
import { motion } from 'framer-motion'
import { MiniChart } from '@/components/hero/MiniChart'
import { floatLoopDelayed } from '@/animations/variants'
import type { MockupSize, MockupSizePreset } from '@/types/hero'
import { cn } from '@/utils/cn'

const STAT_CARDS = [
  { label: 'Usuários ativos', value: '2.847', icon: Users },
  { label: 'Saldo da rede', value: 'R$ 184.2k', icon: Wallet },
  { label: 'Rendimento hoje', value: '+1,84%', icon: TrendingUp },
]

const TABLE_ROWS = [
  { name: 'Maria S.', status: 'Confirmado', value: 'R$ 250,00' },
  { name: 'João P.', status: 'Pendente', value: 'R$ 1.200,00' },
  { name: 'Ana L.', status: 'Confirmado', value: 'R$ 80,00' },
]

interface SizeConfig {
  wrapperWidth: number
  chromePaddingX: number
  chromePaddingY: number
  contentGap: number
  cardGap: number
  cardPadding: number
  iconSize: number
  valueText: number
  labelText: number
  sectionLabelText: number
  tableGap: number
  tableText: number
  chartHeight: number
}

/** Every metric at scale 1 (wrapper width 448px — the previous `md` preset). */
const BASE_CONFIG: SizeConfig = {
  wrapperWidth: 448,
  chromePaddingX: 16,
  chromePaddingY: 10,
  contentGap: 12,
  cardGap: 10,
  cardPadding: 10,
  iconSize: 14,
  valueText: 13,
  labelText: 9.5,
  sectionLabelText: 10,
  tableGap: 6,
  tableText: 9.5,
  chartHeight: 64,
}

/** Named shorthands for common widths — pass a raw pixel number instead for anything in between or beyond. */
const PRESET_WIDTH: Record<MockupSizePreset, number> = {
  sm: 384,
  md: 448,
  lg: 576,
}

/** Derives every metric proportionally from a target width, so the whole composition scales as one set. */
function resolveSizeConfig(size: MockupSize): SizeConfig {
  const wrapperWidth = typeof size === 'number' ? size : PRESET_WIDTH[size]
  const scale = wrapperWidth / BASE_CONFIG.wrapperWidth

  return {
    wrapperWidth,
    chromePaddingX: BASE_CONFIG.chromePaddingX * scale,
    chromePaddingY: BASE_CONFIG.chromePaddingY * scale,
    contentGap: BASE_CONFIG.contentGap * scale,
    cardGap: BASE_CONFIG.cardGap * scale,
    cardPadding: BASE_CONFIG.cardPadding * scale,
    iconSize: BASE_CONFIG.iconSize * scale,
    valueText: BASE_CONFIG.valueText * scale,
    labelText: BASE_CONFIG.labelText * scale,
    sectionLabelText: BASE_CONFIG.sectionLabelText * scale,
    tableGap: BASE_CONFIG.tableGap * scale,
    tableText: BASE_CONFIG.tableText * scale,
    chartHeight: BASE_CONFIG.chartHeight * scale,
  }
}

interface DashboardMockupProps {
  /** Named preset ('sm' | 'md' | 'lg') or an explicit wrapper width in pixels. */
  size?: MockupSize
  className?: string
}

/** Laptop mockup showing a compact admin-dashboard preview — cards, chart, and a table. */
export function DashboardMockup({ size = 'md', className }: DashboardMockupProps) {
  const config = resolveSizeConfig(size)

  return (
    <motion.div
      animate={floatLoopDelayed}
      style={{ width: '100%', maxWidth: config.wrapperWidth }}
      className={className}
    >
      {/* Laptop screen */}
      <div className="rounded-t-xl border border-b-0 border-border bg-surface/90 p-px shadow-[0_30px_80px_-24px_rgba(0,0,0,0.7)]">
        <div className="rounded-t-[0.65rem] bg-[#0c0e12]">
          <div
            className="flex items-center gap-1.5"
            style={{ paddingInline: config.chromePaddingX, paddingBlock: config.chromePaddingY }}
          >
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-medium text-muted" style={{ fontSize: config.labelText }}>
              Smart Option — Painel
            </span>
          </div>

          <div
            className="grid"
            style={{
              paddingInline: config.chromePaddingX,
              paddingBottom: config.chromePaddingX,
              gap: config.contentGap,
            }}
          >
            <div className="grid grid-cols-3" style={{ gap: config.cardGap }}>
              {STAT_CARDS.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="min-w-0 rounded-lg border border-border bg-surface/60"
                  style={{ padding: config.cardPadding }}
                >
                  <Icon size={config.iconSize} className="text-primary" aria-hidden="true" />
                  <p
                    className="mt-1.5 font-bold text-foreground"
                    style={{ fontSize: config.valueText }}
                  >
                    {value}
                  </p>
                  <p className="truncate text-muted" style={{ fontSize: config.labelText }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5" style={{ gap: config.cardGap }}>
              <div
                className="col-span-3 min-w-0 rounded-lg border border-border bg-surface/60"
                style={{ padding: config.cardPadding }}
              >
                <p
                  className="mb-1 font-medium text-muted"
                  style={{ fontSize: config.sectionLabelText }}
                >
                  Rentabilidade da rede
                </p>
                <MiniChart height={config.chartHeight} />
              </div>

              <div
                className="col-span-2 min-w-0 rounded-lg border border-border bg-surface/60"
                style={{ padding: config.cardPadding }}
              >
                <p
                  className="mb-2 font-medium text-muted"
                  style={{ fontSize: config.sectionLabelText }}
                >
                  Últimas solicitações
                </p>
                <div className="flex flex-col" style={{ gap: config.tableGap }}>
                  {TABLE_ROWS.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-1"
                      style={{ fontSize: config.tableText }}
                    >
                      <span className="min-w-0 flex-1 truncate text-foreground/80">{row.name}</span>
                      <span
                        className={cn(
                          'shrink-0 rounded-full px-1.5 py-0.5',
                          row.status === 'Confirmado'
                            ? 'bg-primary/15 text-primary'
                            : 'bg-accent/15 text-accent',
                        )}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="mx-auto h-3 w-[104%] max-w-none -translate-x-[2%] rounded-b-2xl bg-gradient-to-b from-[#1c1e24] to-[#0c0d10]" />
      <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-[#0c0d10]" />
    </motion.div>
  )
}
