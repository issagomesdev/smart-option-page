import {
  Atom,
  Banknote,
  Braces,
  Container,
  Cylinder,
  Database,
  DatabaseZap,
  FileCode2,
  FileText,
  Globe,
  HardDrive,
  KeyRound,
  Layers,
  Lightbulb,
  Mail,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Triangle,
  Wind,
  Workflow,
} from 'lucide-react'
import { GitHubIcon } from '@/components/ui/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/ui/icons/LinkedInIcon'
import type { DeveloperTech, Pillar, SocialLink } from '@/types/developer'

export const DEVELOPER_BADGE_TEXT = 'Conheça a Desenvolvedora'
export const DEVELOPER_TITLE = 'Por Trás do Projeto'

export const DEVELOPER_DESCRIPTION =
  'O Smart Option nasceu de uma demanda real de um projeto freelancer que acabou não sendo levado à produção. Em vez de ser arquivado, foi transformado por sua desenvolvedora em uma iniciativa de portfólio, evoluindo significativamente em arquitetura, funcionalidades e experiência do usuário. O resultado é uma aplicação Full Stack completa, desenvolvida por Hayssa Gomes com foco em arquitetura de software, integrações financeiras, automação, segurança, escalabilidade e uma experiência moderna e intuitiva.'

export const DEVELOPER_NAME = 'Hayssa Gomes'
export const DEVELOPER_ROLE = 'Software Engineer'
export const DEVELOPER_SUMMARY =
  'Engenheira de Software focada na construção de produtos digitais completos, combinando arquitetura escalável, desenvolvimento Full Stack, integrações, segurança e uma experiência do usuário cuidadosamente projetada para transformar boas ideias em soluções reais.'

export const PILLARS: Pillar[] = [
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Transformando necessidades reais em soluções digitais bem estruturadas.',
  },
  {
    icon: Layers,
    title: 'Software Architecture',
    description: 'Projetando aplicações organizadas, escaláveis e fáceis de manter.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Security',
    description: 'Código limpo, autenticação segura e atenção aos detalhes desde o início.',
  },
  {
    icon: Sparkles,
    title: 'User Experience',
    description: 'Interfaces intuitivas com foco em usabilidade, acessibilidade e fluidez.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Integrações e processos automatizados para reduzir trabalho manual.',
  },
  {
    icon: Rocket,
    title: 'Continuous Evolution',
    description: 'Cada projeto é refinado continuamente em busca de melhor desempenho e qualidade.',
  },
]

export const DEVELOPER_TECH_TITLE = 'Principais Tecnologias'

export const DEVELOPER_TECH: DeveloperTech[] = [
  // Linguagens
  { icon: FileCode2, name: 'TypeScript' },
  { icon: FileCode2, name: 'PHP' },

  // Front-end
  { icon: Atom, name: 'React' },
  { icon: Triangle, name: 'Next.js' },
  { icon: Wind, name: 'Tailwind CSS' },

  // Back-end
  { icon: Server, name: 'Node.js' },
  { icon: Braces, name: 'Laravel' },

  // Banco de Dados & ORM
  { icon: DatabaseZap, name: 'Prisma' },
  { icon: HardDrive, name: 'MySQL' },
  { icon: Cylinder, name: 'PostgreSQL' },
  { icon: Database, name: 'Redis' },

  // Infraestrutura
  { icon: Container, name: 'Docker' },

  // Integrações
  { icon: Send, name: 'Telegram API' },
  { icon: Banknote, name: 'Asaas' },
  { icon: KeyRound, name: 'JWT' },
]

export const PHILOSOPHY_TITLE = 'Minha abordagem'
export const PHILOSOPHY_TEXT =
  'Cada decisão durante o desenvolvimento do Smart Option foi orientada por princípios de arquitetura de software, código limpo e foco na experiência do usuário. Mais do que implementar funcionalidades, o objetivo foi construir uma plataforma organizada, segura e preparada para evoluir, facilitando sua manutenção, escalabilidade e expansão ao longo do tempo.'

/** Hrefs resolve from `VITE_*` env vars at render time — this only holds the static icon/label. */
export const SOCIAL_LINKS: SocialLink[] = [
  { icon: GitHubIcon, label: 'GitHub' },
  { icon: LinkedInIcon, label: 'LinkedIn' },
  { icon: Globe, label: 'Portfólio' },
  { icon: Mail, label: 'Email' },
  { icon: FileText, label: 'Currículo' },
]
