import { motion, useTransform, type MotionValue } from 'framer-motion'
import { DashboardMockup } from '@/components/hero/DashboardMockup'
import { PhoneMockup } from '@/components/hero/PhoneMockup'
import { QrCard } from '@/components/hero/QrCard'
import { MockupGlow } from '@/components/hero/MockupGlow'
import { useViewportTier, type ViewportTier } from '@/hooks/use-viewport-tier'

interface HeroVisualProps {
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

interface MockupLayout {
  boxWidth: number
  boxHeight: number
  phoneWidth: number
  phoneLeft: number
  phoneTop: number
  notebookWidth: number
  notebookLeft: number
  notebookTop: number
  pixLeft: number
  pixTop: number
}

/**
 * Hand-tuned per tier, not derived from one formula — the notebook needs real presence of its own
 * (not a sliver peeking behind the phone), so it sits shifted up and right of the phone with only a
 * modest overlap, forming a triangle with the PIX card floating above both: PIX at the apex, phone
 * front-left as the protagonist, notebook back-right as its equally-legible support.
 *
 * `laptop` and `desktop` are deliberately more conservative than `wide` — their grid column is only
 * ~440px/~568px wide with modest bleed room past it, so a much bigger notebook or a tighter overlap
 * ratio there clips the viewport at the tier's own lower bound (verified at 1024px and 1440px).
 */
const LAYOUTS: Record<ViewportTier, MockupLayout> = {
  // pixTop stays modest at every tier: below `lg`, HeroContent's CTA buttons sit directly above this
  // box in the stacked layout, and a deep negative offset here runs the PIX card straight into them.
  mobile: {
    boxWidth: 300,
    boxHeight: 625,
    phoneWidth: 210,
    phoneLeft: 55,
    phoneTop: 250,
    notebookWidth: 225,
    notebookLeft: 30,
    notebookTop: 120,
    pixLeft: 47,
    pixTop: 0,
  },
  // Column is ~756px at the 768px floor (single-column, centered) — comfortable room to spare.
  tablet: {
    boxWidth: 620,
    boxHeight: 720,
    phoneWidth: 230,
    phoneLeft: 0,
    phoneTop: 230,
    notebookWidth: 470,
    notebookLeft: 150,
    notebookTop: 110,
    pixLeft: 146,
    pixTop: -5,
  },
  // Column is only ~440px at the 1024px floor with ~48px of bleed room — kept tight to avoid clipping.
  // pixTop stays modest here too: the 2-col grid gives this row less vertical clearance above the
  // header than the stacked mobile/tablet layout gives above the CTA buttons, and a deeper negative
  // offset runs the PIX card straight into the header at this tier's own lower bound.
  laptop: {
    boxWidth: 510,
    boxHeight: 635,
    phoneWidth: 228,
    phoneLeft: 0,
    phoneTop: 135,
    notebookWidth: 400,
    notebookLeft: 110,
    notebookTop: 55,
    pixLeft: 108,
    pixTop: -65,
  },
  // Column is a fixed ~568px past the 1280px container cap — ~128px of bleed room at the 1440px floor.
  desktop: {
    boxWidth: 696,
    boxHeight: 705,
    phoneWidth: 255,
    phoneLeft: 0,
    phoneTop: 150,
    notebookWidth: 560,
    notebookLeft: 206,
    notebookTop: 120,
    pixLeft: 0,
    pixTop: -5,
  },
  // ≥1680px — enough bleed room (~250px+ past the container cap) for the full-sized composition,
  // hitting the ~20% growth / ~17% overlap targets the tighter tiers above can't afford.
  wide: {
    boxWidth: 818,
    boxHeight: 705,
    phoneWidth: 255,
    phoneLeft: 0,
    phoneTop: 145,
    notebookWidth: 680,
    notebookLeft: 138,
    notebookTop: 60,
    pixLeft: 199,
    pixTop: -55,
  },
}

/**
 * Right column of the Hero — a single layered composition, not three independent elements, arranged
 * as a triangle: the PIX card floats at the apex, the phone (the bot) leads front-left, and the
 * notebook (the admin panel) sits back-right with its own clear presence — chrome bar, metric cards,
 * and main chart all clear of the phone's overlap — rather than reading as a background afterthought.
 * Contrast and parallax intensity still step down from phone to notebook to PIX, so depth still reads,
 * but no single mockup dominates the story: Bot, Painel, and PIX share the frame as one ecosystem.
 */
export function HeroVisual({ pointerX, pointerY }: HeroVisualProps) {
  const tier = useViewportTier()
  const layout = LAYOUTS[tier]

  const notebookX = useTransform(pointerX, [-0.5, 0.5], [-10, 10])
  const notebookY = useTransform(pointerY, [-0.5, 0.5], [-10, 10])
  const phoneX = useTransform(pointerX, [-0.5, 0.5], [-4, 4])
  const phoneY = useTransform(pointerY, [-0.5, 0.5], [-4, 4])
  const pixX = useTransform(pointerX, [-0.5, 0.5], [-18, 18])
  const pixY = useTransform(pointerY, [-0.5, 0.5], [-18, 18])

  return (
    <div
      className="relative mx-auto lg:mx-0"
      style={{ width: layout.boxWidth, height: layout.boxHeight }}
    >
      {/* Notebook — the admin panel, its own clear presence: only lightly overlapped by the phone */}
      <motion.div
        style={{
          x: notebookX,
          y: notebookY,
          left: layout.notebookLeft,
          top: layout.notebookTop,
        }}
        className="absolute z-0 rotate-[-4deg]"
      >
        <MockupGlow
          color="var(--color-telegram)"
          className="left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 opacity-60 md:size-96"
        />
        <DashboardMockup size={layout.notebookWidth} />
      </motion.div>

      {/* Phone — the bot experience, protagonist front-left */}
      <motion.div
        style={{ x: phoneX, y: phoneY, left: layout.phoneLeft, top: layout.phoneTop }}
        className="absolute z-10 rotate-[3deg]"
      >
        <MockupGlow
          color="var(--color-primary)"
          className="left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 opacity-80"
        />
        <PhoneMockup size={layout.phoneWidth} />
      </motion.div>

      {/* PIX card — floats at the triangle's apex, clear of both */}
      <motion.div
        style={{ x: pixX, y: pixY, left: layout.pixLeft, top: layout.pixTop }}
        className="absolute z-20 rotate-[1deg]"
      >
        <MockupGlow
          color="var(--color-foreground)"
          breathing
          className="left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 opacity-50"
        />
        <QrCard />
      </motion.div>
    </div>
  )
}
