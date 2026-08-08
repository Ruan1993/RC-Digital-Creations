export default function LegacyExtras() {
  return (
    <>
      <canvas id="projector">
        Your browser does not support the Canvas element.
      </canvas>
      <div className="mesh-bg"></div>
      <div className="page-scrim"></div>
      <button
        id="back-to-top"
        className="rc-back-to-top opacity-0 pointer-events-none btn-pop icon-neon"
        aria-label="Back to top"
        type="button"
      >
        <i data-feather="arrow-up" className="w-5 h-5"></i>
      </button>
    </>
  )
}
