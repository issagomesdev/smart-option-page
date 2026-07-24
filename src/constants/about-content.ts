import {
  Activity,
  Bot,
  Clock,
  CreditCard,
  LayoutDashboard,
  Monitor,
  QrCode,
  Send,
  Sparkles,
  User,
  Users,
  Zap,
} from 'lucide-react'
import type { AboutFeatureItem, EcosystemNode } from '@/types/about'

export const ABOUT_BADGE_TEXT = 'Sobre o projeto'

export const ABOUT_TITLE = 'Muito mais do que um bot do Telegram.'

export const ABOUT_DESCRIPTION =
  'No Smart Option, tudo acontece dentro da conversa. O usuário deposita, acompanha o saldo, solicita saques e realiza operações sem sair do Telegram, sem aplicativo para instalar, sem cadastro complicado, sem fricção. Por trás dessa simplicidade, um painel administrativo acompanha cada solicitação e mantém a operação sob controle. O Telegram é apenas a porta de entrada para uma plataforma muito maior.'

export const ABOUT_FEATURES: AboutFeatureItem[] = [
  {
    icon: Bot,
    title: 'Experiência Conversacional',
    description:
      'Toda a interação acontece diretamente pelo Telegram, sem necessidade de instalar um aplicativo dedicado.',
  },
  {
    icon: Zap,
    title: 'Automação Financeira',
    description:
      'Depósitos, confirmações, solicitações e operações acontecem de forma automatizada.',
  },
  {
    icon: CreditCard,
    title: 'Pagamentos via PIX',
    description: 'QR Code, código copia e cola e confirmações integradas ao fluxo do usuário.',
  },
  {
    icon: Monitor,
    title: 'Gestão Centralizada',
    description: 'Um painel administrativo concentra o gerenciamento e o controle operacional.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Contínua',
    description: 'A plataforma opera de forma ininterrupta, sem depender de horário comercial.',
  },
  {
    icon: Activity,
    title: 'Acompanhamento em Tempo Real',
    description: 'Cada solicitação é acompanhada do início ao fim, sem deixar o usuário no escuro.',
  },
  {
    icon: Users,
    title: 'Rede de Indicações',
    description: 'Convide outras pessoas e acompanhe sua rede diretamente pelo Telegram.',
  },
  {
    icon: Sparkles,
    title: 'Simplicidade de Uso',
    description: 'Poucos toques separam o usuário de qualquer operação dentro do bot.',
  },
]

/** The illustration's six satellites around the "Smart Option" core — an ecosystem, not a flowchart. */
export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { label: 'Usuário', icon: User, color: 'accent' },
  { label: 'Telegram', icon: Send, color: 'telegram' },
  { label: 'PIX', icon: QrCode, color: 'primary' },
  { label: 'Painel', icon: LayoutDashboard, color: 'accent' },
  { label: 'Monitoramento', icon: Activity, color: 'telegram' },
  { label: 'Automação', icon: Zap, color: 'primary' },
]
