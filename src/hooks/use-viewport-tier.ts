import { useEffect, useState } from 'react'

export type ViewportTier = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'wide'

function resolveTier(width: number): ViewportTier {
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  if (width < 1440) return 'laptop'
  if (width < 1680) return 'desktop'
  return 'wide'
}

/**
 * Coarse viewport tier for sizing decisions CSS breakpoints can't drive directly — namely the
 * numeric `size` prop the Hero mockups take, which needs a real pixel value from JS.
 */
export function useViewportTier(): ViewportTier {
  const [tier, setTier] = useState(() => resolveTier(window.innerWidth))

  useEffect(() => {
    function handleResize() {
      setTier(resolveTier(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return tier
}
