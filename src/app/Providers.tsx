import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { useLenis } from '@/hooks/use-lenis'

interface ProvidersProps {
  children: ReactNode
}

/**
 * App-wide setup that doesn't belong in individual components: Lenis smooth scrolling and a
 * single global `prefers-reduced-motion` switch for every Framer Motion animation in the tree.
 */
export function Providers({ children }: ProvidersProps) {
  useLenis()

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
