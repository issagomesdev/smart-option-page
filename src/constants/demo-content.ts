import type { DemoHighlight, VideoMetadata } from '@/types/demo'

export const DEMO_BADGE_TEXT = 'Video Demonstrativo'

export const DEMO_TITLE = 'Veja o Smart Option em funcionamento.'

export const DEMO_DESCRIPTION =
  'O vídeo apresenta a jornada completa dentro do Smart Option: do primeiro cadastro à confirmação de um saque, passando pelo depósito via PIX, pela contratação de planos e pelo painel administrativo que acompanha cada operação em tempo real.'

export const DEMO_HIGHLIGHTS: DemoHighlight[] = [
  { label: 'Fluxo completo do Telegram Bot' },
  { label: 'Operações financeiras em tempo real' },
  { label: 'Painel Administrativo' },
  { label: 'Integração PIX' },
  { label: 'Arquitetura em funcionamento' },
  { label: 'Demonstração completa do projeto' },
]

export const VIDEO_METADATA: VideoMetadata = {
  title: 'Smart Option — Uma Plataforma Financeira no Telegram',
  subtitle: 'Telegram Bot, Painel Administrativo e Integração PIX',
  duration: '08:35',
  quality: 'Full HD',
  captions: 'English subtitles',
}

export const COMING_SOON_TITLE = 'Coming Soon'
export const COMING_SOON_DESCRIPTION =
  'A complete demonstration covering the Telegram Bot, Admin Dashboard and the full financial workflow is currently being prepared.'
export const COMING_SOON_TOAST = 'The project walkthrough will be available soon.'
