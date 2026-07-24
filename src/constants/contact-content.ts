import { FileText, Globe, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/ui/icons/LinkedInIcon'
import type { ContactCardData } from '@/types/contact'

export const CONTACT_BADGE_TEXT = 'Contato'
export const CONTACT_TITLE = 'Vamos conversar sobre este projeto?'

export const CONTACT_DESCRIPTION =
  'Se você é recrutador, desenvolvedor ou representa uma empresa, fique à vontade para conhecer mais detalhes do projeto, explorar o código-fonte ou entrar em contato diretamente, será um prazer conversar.'

export const CONTACT_CARDS: ContactCardData[] = [
  { key: 'email', icon: Mail, title: 'Email', value: 'contato@byissa.dev' },
  { key: 'linkedin', icon: LinkedInIcon, title: 'LinkedIn', value: 'linkedin.com/in/issagomesdev' },
  { key: 'github', icon: GitHubIcon, title: 'GitHub', value: 'github.com/issagomesdev' },
  { key: 'portfolio', icon: Globe, title: 'Portfólio', value: 'byissa.dev' },
  { key: 'resume', icon: FileText, title: 'Currículo', value: 'Download PDF' },
]

export const CONTACT_CTA_PRIMARY = 'Ver repositório no GitHub'
export const CONTACT_CTA_SECONDARY = 'Conectar no LinkedIn'
