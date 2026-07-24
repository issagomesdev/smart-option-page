import {
  Atom,
  Bot,
  Container,
  Database,
  FileCode2,
  HardDrive,
  KeyRound,
  Landmark,
  LayoutDashboard,
  Network,
  Palette,
  Send,
  Server,
  Triangle,
  User,
  Workflow,
} from 'lucide-react'
import type {
  ArchitectureConnection,
  ArchitectureModule,
  TechStackItem,
} from '@/types/architecture'

export const ARCHITECTURE_BADGE_TEXT = 'Architecture'

export const ARCHITECTURE_TITLE =
  'Uma arquitetura projetada para integrar automação, segurança e escalabilidade.'

export const ARCHITECTURE_DESCRIPTION =
  'Diferentes componentes trabalham juntos para oferecer uma experiência simples ao usuário, enquanto mantêm uma infraestrutura organizada, modular e preparada para crescer.'

export const ARCHITECTURE_MODULES: ArchitectureModule[] = [
  { id: 'user', icon: User, name: 'Usuário', x: 50, y: 4 },
  {
    id: 'telegram-bot',
    icon: Send,
    name: 'Telegram Bot',
    description: 'Interface principal utilizada pelos usuários.',
    x: 50,
    y: 22,
  },
  {
    id: 'api',
    icon: Server,
    name: 'Smart Option API',
    description: 'Centraliza regras de negócio e comunicação.',
    x: 50,
    y: 42,
  },
  {
    id: 'asaas',
    icon: Landmark,
    name: 'Asaas',
    description: 'Processamento dos pagamentos PIX.',
    x: 16,
    y: 62,
  },
  {
    id: 'redis',
    icon: Database,
    name: 'Redis',
    description: 'Cache e otimização de desempenho.',
    x: 50,
    y: 62,
  },
  {
    id: 'bullmq',
    icon: Workflow,
    name: 'BullMQ',
    description: 'Execução de tarefas assíncronas.',
    x: 84,
    y: 62,
  },
  {
    id: 'mysql',
    icon: HardDrive,
    name: 'MySQL',
    description: 'Persistência dos dados.',
    x: 50,
    y: 82,
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    name: 'Admin Dashboard',
    description: 'Gerenciamento da plataforma.',
    x: 50,
    y: 98,
  },
]

export const ARCHITECTURE_CONNECTIONS: ArchitectureConnection[] = [
  { from: 'user', to: 'telegram-bot' },
  { from: 'telegram-bot', to: 'api' },
  { from: 'api', to: 'asaas' },
  { from: 'api', to: 'redis' },
  { from: 'api', to: 'bullmq' },
  { from: 'asaas', to: 'mysql' },
  { from: 'redis', to: 'mysql' },
  { from: 'bullmq', to: 'mysql' },
  { from: 'mysql', to: 'dashboard' },
]

export const TECH_STACK: TechStackItem[] = [
  { icon: FileCode2, name: 'TypeScript', description: 'Tipagem estática em todo o projeto.' },
  { icon: Server, name: 'Node.js', description: 'Ambiente de execução do servidor.' },
  { icon: Triangle, name: 'Next.js', description: 'Framework utilizado no painel administrativo.' },
  { icon: Atom, name: 'React', description: 'Biblioteca de interface do painel.' },
  { icon: Palette, name: 'MUI', description: 'Sistema de componentes visuais do painel.' },
  { icon: Database, name: 'Redis', description: 'Cache em memória de alta performance.' },
  { icon: Container, name: 'Docker', description: 'Containers para ambientes consistentes.' },
  { icon: KeyRound, name: 'JWT', description: 'Autenticação baseada em tokens.' },
  { icon: Workflow, name: 'BullMQ', description: 'Filas para processamento assíncrono.' },
  { icon: Landmark, name: 'Asaas', description: 'Gateway de pagamentos PIX.' },
  { icon: Bot, name: 'Telegram API', description: 'Comunicação direta com o bot.' },
  { icon: HardDrive, name: 'MySQL', description: 'Banco de dados relacional.' },
  { icon: Network, name: 'Nginx', description: 'Proxy reverso e balanceamento.' },
]
