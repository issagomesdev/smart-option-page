import type { LucideIcon } from 'lucide-react'

export interface AboutFeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export type EcosystemColor = 'primary' | 'telegram' | 'accent'

export interface EcosystemNode {
  label: string
  icon: LucideIcon
  color: EcosystemColor
}
