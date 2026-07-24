/** Extremely subtle infinite grid — pure CSS, no SVG/JS needed, fades out toward the edges. */
export function GridLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), ' +
          'linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)',
      }}
    />
  )
}
