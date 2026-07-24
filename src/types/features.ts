import type { LucideIcon } from 'lucide-react'

export interface FeatureListItem {
  icon: LucideIcon
  label: string
}

export interface EcosystemHighlight {
  icon: LucideIcon
  title: string
  description: string
}

export type TelegramScreenId =
  'saldo' | 'deposito' | 'confirmado' | 'extrato' | 'rede' | 'solicitacao'

export interface StatCardData {
  icon: LucideIcon
  label: string
  value: string
}

export interface TableRowData {
  name: string
  status: 'Confirmado' | 'Pendente' | 'Em análise'
  value: string
}
