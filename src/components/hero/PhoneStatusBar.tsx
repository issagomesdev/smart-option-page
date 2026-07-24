import { BatteryFull, SignalHigh, Wifi } from 'lucide-react'

interface PhoneStatusBarProps {
  scale?: number
}

/** Persistent iOS-style status bar shown above whichever screen is active — adds realism to the mockup. */
export function PhoneStatusBar({ scale = 1 }: PhoneStatusBarProps) {
  return (
    <div
      className="flex items-center justify-between font-medium text-foreground"
      style={{
        paddingInline: 20 * scale,
        paddingTop: 12 * scale,
        paddingBottom: 4 * scale,
        fontSize: 11 * scale,
      }}
    >
      <span>9:41</span>
      <div className="flex items-center text-foreground" style={{ gap: 4 * scale }}>
        <SignalHigh size={14 * scale} aria-hidden="true" />
        <Wifi size={14 * scale} aria-hidden="true" />
        <BatteryFull size={16 * scale} aria-hidden="true" />
      </div>
    </div>
  )
}
