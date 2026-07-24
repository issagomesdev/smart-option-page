import type { MotionValue } from 'framer-motion'
import { BlurOrbsLayer } from '@/components/background/BlurOrbsLayer'
import { GridLayer } from '@/components/background/GridLayer'
import { ConnectionsLayer } from '@/components/background/ConnectionsLayer'
import { ParticlesLayer } from '@/components/background/ParticlesLayer'
import { GlowLayer } from '@/components/background/GlowLayer'

interface HeroBackgroundProps {
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

/** Composes every background layer in the correct visual order. Purely decorative — never interactive. */
export function HeroBackground({ pointerX, pointerY }: HeroBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <BlurOrbsLayer />
      <GridLayer />
      <ConnectionsLayer />
      <ParticlesLayer />
      <GlowLayer pointerX={pointerX} pointerY={pointerY} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
