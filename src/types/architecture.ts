import type { LucideIcon } from 'lucide-react'

export type ArchitectureModuleId =
  'user' | 'telegram-bot' | 'api' | 'asaas' | 'redis' | 'bullmq' | 'mysql' | 'dashboard'

export interface ArchitectureModule {
  id: ArchitectureModuleId
  icon: LucideIcon
  name: string
  /** Omitted for `user` — the entry point is a lighter marker, not a full module card. */
  description?: string
  /** Position as a percentage of the diagram container, so the layout scales with it. */
  x: number
  y: number
}

export interface ArchitectureConnection {
  from: ArchitectureModuleId
  to: ArchitectureModuleId
}

export interface TechStackItem {
  icon: LucideIcon
  name: string
  description: string
}
