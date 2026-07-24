import {
  Activity,
  Bell,
  Layers,
  LayoutDashboard,
  Link2,
  ListChecks,
  Monitor,
  QrCode,
  Radar,
  Receipt,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  User,
  UserPlus,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { EcosystemHighlight, FeatureListItem } from '@/types/features'
import type { EcosystemColor } from '@/types/about'

// ---- Bloco 1 — Telegram Bot ----------------------------------------------

export const BOT_BADGE_TEXT = 'Telegram Bot'
export const BOT_TITLE = 'Toda a experiência acontece dentro do Telegram.'
export const BOT_DESCRIPTION =
  'Da primeira mensagem à última confirmação, o usuário conduz toda a jornada dentro do próprio chat — sem instalar aplicativos, sem trocar de plataforma, sem processos complicados.'

export const BOT_FEATURES: FeatureListItem[] = [
  { icon: UserPlus, label: 'Cadastro' },
  { icon: QrCode, label: 'Depósito via PIX' },
  { icon: Wallet, label: 'Consulta de Saldo' },
  { icon: Receipt, label: 'Extrato' },
  { icon: Send, label: 'Solicitação de Saque' },
  { icon: Users, label: 'Rede de Afiliados' },
  { icon: Layers, label: 'Planos' },
  { icon: Bell, label: 'Notificações' },
]

// ---- Bloco 2 — Painel Administrativo --------------------------------------

export const PANEL_BADGE_TEXT = 'Painel Administrativo'
export const PANEL_TITLE = 'Controle total da operação em uma única interface.'
export const PANEL_DESCRIPTION =
  'Toda a gestão da plataforma acontece através de um painel administrativo moderno, acompanhamento de usuários, solicitações e movimentações em um único lugar, sempre atualizado.'

export const PANEL_FEATURES: FeatureListItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Usuários' },
  { icon: ListChecks, label: 'Solicitações' },
  { icon: Wallet, label: 'Financeiro' },
  { icon: Settings, label: 'Configurações' },
  { icon: Receipt, label: 'Relatórios' },
  { icon: ShieldCheck, label: 'Auditoria' },
  { icon: Activity, label: 'Monitoramento' },
]

// ---- Bloco 3 — Ecossistema Financeiro --------------------------------------

export const ECOSYSTEM_BADGE_TEXT = 'Ecossistema Integrado'
export const ECOSYSTEM_TITLE = 'Uma plataforma onde tudo está conectado.'
export const ECOSYSTEM_DESCRIPTION =
  'Cada ação do usuário gera automaticamente uma sequência de operações integradas, do chat ao painel, proporcionando uma experiência contínua, do início ao fim.'

interface EcosystemBlockNode {
  label: string
  icon: LucideIcon
  color: EcosystemColor
}

export const ECOSYSTEM_BLOCK_NODES: EcosystemBlockNode[] = [
  { label: 'Telegram', icon: Send, color: 'telegram' },
  { label: 'PIX', icon: QrCode, color: 'primary' },
  { label: 'Usuário', icon: User, color: 'accent' },
  { label: 'Painel', icon: Monitor, color: 'accent' },
  { label: 'Automação', icon: Zap, color: 'primary' },
  { label: 'Monitoramento', icon: Activity, color: 'telegram' },
  { label: 'Notificações', icon: Bell, color: 'primary' },
]

export const ECOSYSTEM_HIGHLIGHTS: EcosystemHighlight[] = [
  {
    icon: Zap,
    title: 'Automação',
    description: 'Processos executados automaticamente, sem intervenção manual.',
  },
  {
    icon: Rocket,
    title: 'Agilidade',
    description: 'Respostas e confirmações acontecem em poucos segundos.',
  },
  {
    icon: Radar,
    title: 'Centralização',
    description: 'Toda a operação é acompanhada em um único lugar.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    description: 'Cada etapa é confirmada antes de avançar para a próxima.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controle',
    description: 'Visibilidade completa sobre cada solicitação em andamento.',
  },
  {
    icon: Link2,
    title: 'Experiência Integrada',
    description: 'Usuário, bot e painel trabalham em sintonia o tempo todo.',
  },
]
