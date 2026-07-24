import { AnimatedCard } from '@/components/ui/AnimatedCard'
import type { FeatureListItem } from '@/types/features'

type MiniFeatureCardProps = FeatureListItem

/** Compact icon+label card for a feature grid — every card in the grid is the same size (`h-full`). */
export function MiniFeatureCard({ icon: Icon, label }: MiniFeatureCardProps) {
  return (
    <AnimatedCard className="flex h-full min-h-24 flex-col items-start justify-center gap-2.5 p-4">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" aria-hidden="true" />
      </div>
      <p className="text-sm font-medium text-foreground">{label}</p>
    </AnimatedCard>
  )
}
