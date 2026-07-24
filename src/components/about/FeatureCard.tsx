import { AnimatedCard } from '@/components/ui/AnimatedCard'
import type { AboutFeatureItem } from '@/types/about'

type FeatureCardProps = AboutFeatureItem

/**
 * Small glass card summarizing one piece of the experience. Every card in the grid is the same size
 * regardless of copy length — `h-full` fills its grid cell and `min-h` sets a floor tall enough for
 * the longest description, so a short one doesn't collapse smaller than its neighbors.
 */
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <AnimatedCard className="flex h-full min-h-44 flex-col p-5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4.5 text-primary" aria-hidden="true" />
      </div>
      <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
    </AnimatedCard>
  )
}
