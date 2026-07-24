export type HeroTitleVariant = 'brand' | 'telegram'

export interface HeroTitleSegment {
  text: string
  variant?: HeroTitleVariant
}

export type MockupSizePreset = 'sm' | 'md' | 'lg'

/**
 * Sizing shared by mockups whose internals need to scale as a set, not just their box: a named
 * preset, or an explicit wrapper width in pixels for precise/custom sizing.
 */
export type MockupSize = MockupSizePreset | number
