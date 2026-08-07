export default function LegacyExtras() {
  return (
    <>
    <canvas id={"projector"}>
      Your browser does not support the Canvas element.
    </canvas>
    <div className={"mesh-bg"}></div>
    <div className={"page-scrim"}></div>
    <button id={"back-to-top"} className={"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-brand-blue/20 hover:bg-brand-blue/40 text-white rounded-full p-3 backdrop-blur border border-brand-blue/30 shadow-lg transition-all opacity-0 pointer-events-none btn-pop icon-neon"}>
      <i data-feather={"arrow-up"} className={"w-5 h-5"}></i>
    </button>
    </>
  )
}
