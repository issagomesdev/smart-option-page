import {
  LayoutDashboard,
  Server,
  Bot,
  QrCode,
  Landmark,
  PlayCircle,
  Users,
  Wallet,
} from 'lucide-react'
import type { DifferentiatorItem } from '@/types/tech'
import type { HeroTitleSegment } from '@/types/hero'

export const HERO_BADGE_TEXT = 'Telegram Bot • API REST • Admin Dashboard • PIX Automation'

/** Only "Smart Option" and "Telegram" carry an accent color — every other word stays plain white. */
export const HERO_TITLE_SEGMENTS: HeroTitleSegment[] = [
  { text: 'Smart Option', variant: 'brand' },
  { text: `\r\n mais do que um bot: uma plataforma financeira completa no ` },
  { text: 'Telegram', variant: 'telegram' },
  { text: '.' },
]

export const HERO_DESCRIPTION =
  'Depósitos via PIX, confirmações automáticas, solicitações de saque, rede de afiliados e gestão administrativa integrados por uma infraestrutura robusta e escalável.'

export const HERO_DIFFERENTIATORS: DifferentiatorItem[] = [
  { label: 'Telegram Bot', icon: Bot },
  { label: 'PIX Payments', icon: QrCode },
  { label: 'Admin Dashboard', icon: LayoutDashboard },
  { label: 'Affiliate System', icon: Users },
  { label: 'Withdrawals', icon: Wallet },
  { label: 'Live Demo', icon: PlayCircle },
]
