/** Extremely fine, near-invisible grid — a data-center/rack-diagram cue, much subtler than the Hero's. */
export function NetworkGridLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(148,163,184,0.035) 1px, transparent 1px), ' +
          'linear-gradient(to bottom, rgba(148,163,184,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 90%)',
      }}
    />
  )
}
