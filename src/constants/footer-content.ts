import type { ComponentType } from 'react'
import { Globe, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/ui/icons/LinkedInIcon'

/** A shape both `LucideIcon` and the hand-rolled brand icons (lucide ships no brand marks) satisfy. */
type IconComponent = ComponentType<{ className?: string }>

export interface FooterSocialLink {
  icon: IconComponent
  label: string
}

export const FOOTER_DESCRIPTION =
  'Uma solução financeira moderna que centraliza operações, automatiza processos e oferece uma experiência simples para usuários e administradores.'

export const FOOTER_NAV_TITLE = 'Navegação'
export const FOOTER_SOCIAL_TITLE = 'Redes'

/** Hrefs resolve from `VITE_*` env vars at render time — this only holds the static icon/label. */
export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: GitHubIcon, label: 'GitHub' },
  { icon: LinkedInIcon, label: 'LinkedIn' },
  { icon: Globe, label: 'Portfólio' },
  { icon: Mail, label: 'Email' },
]

export const FOOTER_COPYRIGHT = '© 2026 Smart Option. Todos os direitos reservados.'
export const FOOTER_CREDIT = 'Desenvolvido por Hayssa Gomes'
