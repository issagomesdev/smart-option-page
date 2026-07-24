import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'

/** A shape both `LucideIcon` and the hand-rolled `GitHubIcon` (lucide ships no brand marks) satisfy. */
type IconComponent = ComponentType<{ className?: string }>

export interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

export interface DeveloperTech {
  icon: LucideIcon
  name: string
}

export interface SocialLink {
  icon: IconComponent
  label: string
}
