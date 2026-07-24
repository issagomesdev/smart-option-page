import { FeaturesBackground } from '@/components/background/FeaturesBackground'
import { FeatureBlockTelegram } from '@/components/features/FeatureBlockTelegram'
import { FeatureBlockPanel } from '@/components/features/FeatureBlockPanel'
import { FeatureBlockEcosystem } from '@/components/features/FeatureBlockEcosystem'

/**
 * "Funcionalidades" — answers only "what can you do with Smart Option," told as three near-full-screen
 * blocks with alternating layouts (text|mockup, mockup|text, then a centered finale) so the scroll has
 * rhythm. One shared background across all three (not a separate system per block) built around
 * automation/data-flow — distinct from both the Hero's node-graph and the About section's aurora.
 */
export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden">
      <FeaturesBackground />

      <div className="relative z-10">
        <FeatureBlockTelegram />
        <FeatureBlockPanel />
        <FeatureBlockEcosystem />
      </div>
    </section>
  )
}
