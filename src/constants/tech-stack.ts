import {
  Container,
  Database,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Webhook,
  Workflow,
} from 'lucide-react'
import type { TechIndicatorItem } from '@/types/tech'

export const TECH_INDICATORS: TechIndicatorItem[] = [
  { label: 'JWT Auth', icon: ShieldCheck },
  { label: 'Redis Cache', icon: Database },
  { label: 'BullMQ', icon: Workflow },
  { label: 'Docker', icon: Container },
  { label: 'Webhooks', icon: Webhook },
  { label: 'REST API', icon: Network },
  { label: 'Asaas API', icon: Landmark },
  { label: 'Clean Architecture', icon: Layers3 },
]
