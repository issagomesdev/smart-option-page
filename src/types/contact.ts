import type { ComponentType } from 'react'

/** A shape both `LucideIcon` and the hand-rolled brand icons (lucide ships no brand marks) satisfy. */
type IconComponent = ComponentType<{ className?: string }>

export type ContactLinkKey = 'email' | 'linkedin' | 'github' | 'portfolio' | 'resume'

export interface ContactCardData {
  key: ContactLinkKey
  icon: IconComponent
  title: string
  value: string
}
