export default function Pricing() {
  return (
    <section id={"advertisements"} className={"py-20 md:py-24 bg-black/20 relative border-y border-gray-800/50 scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className={"text-center mb-16"} data-aos={"fade-up"}>
          <h2 className={"text-3xl md:text-4xl font-bold mb-4 neon-title"}>
            Our Prices
          </h2>
          <div className={"w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"}></div>
          <p className={"text-gray-400 mt-4 max-w-3xl mx-auto"}>
            Browse current services, bundles, and hosting options. Prices are
            shown clearly, and monthly options are handled by manual invoice.
            Choose a package to request an invoice or ask for a custom quote.
          </p>
        </div>
        <div id={"ads-pager"} className={"relative px-0 md:px-0"} data-aos={"fade-up"} data-aos-delay={"100"}>
          <button id={"ads-prev"} className={"absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/40 border border-gray-700/40 text-white opacity-10 hover:opacity-60 transition-all shadow-lg backdrop-blur-sm group btn-pop"} aria-label={"Previous"}>
            <i data-feather={"chevron-left"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <button id={"ads-next"} className={"absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/40 border border-gray-700/40 text-white opacity-10 hover:opacity-60 transition-all shadow-lg backdrop-blur-sm group btn-pop"} aria-label={"Next"}>
            <i data-feather={"chevron-right"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <div id={"ads-grid"} className={"grid grid-cols-1 lg:grid-cols-3 gap-1"}></div>
        </div>
      </div>
    </section>
  )
}
