export default function Navbar() {
  return (
    <nav className={"fixed w-full z-50 glass transition-all duration-300"} id={"navbar"}>
      <div className={"max-w-7xl mx-auto px-0 sm:px-0 lg:px-0"}>
        <div className={"flex justify-between items-center h-20"}>
          <a href={"index.html"} className={"flex items-center gap-2 md:gap-3 min-w-0"} aria-label={"RC Digital Creations Home"}>
            <img src={"images/RC Digital Creations.png"} alt={"RC Digital Creations Logo"} className={"h-12 w-12 md:h-20 md:w-20 object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]"} />
            <span className={"font-bold tracking-tight text-white brand-font inline-flex items-baseline gap-[0.22em] whitespace-nowrap text-base sm:text-lg md:text-2xl"}>
              <span>RC</span>
              <span className={"text-brand-blue"}>Digital</span>
              <span>Creations</span>
            </span>
          </a>
          <div className={"hidden md:flex items-center space-x-8"}>
            <a href={"#advertisements"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(57,255,20,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#39ff14] after:to-green-500 group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-green"}>
              Prices
            </a>
            <a href={"#services"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-purple group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-blue"}>
              Services
            </a>
            <a href={"#portfolio"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-purple after:to-pink-500 group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-purple"}>
              Our Work
            </a>
            <a href={"#reviews"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-purple group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-blue"}>
              Reviews
            </a>
            <a href={"#about"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(236,72,153,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-brand-purple group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-pink"}>
              About
            </a>
            <a href={"#contact"} className={"group relative inline-block px-2 py-1 text-gray-300 transition-all text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-purple after:to-brand-blue group-hover:after:w-full after:transition-all after:duration-300 link-pop neon-hover-purple"}>
              Contact
            </a>
            <a href={"#contact"} className={"btn-neon-pill text-sm"}>
              Request a Quote
            </a>
          </div>
          <div className={"md:hidden flex items-center mr-2 sm:mr-3"}>
            <button id={"mobile-menu-btn"} className={"text-white hover:text-brand-blue focus:outline-none"}>
              <i data-feather={"menu"} className={"h-8 w-8"}></i>
            </button>
          </div>
        </div>
      </div>
      <div id={"mobile-menu"} className={"hidden md:hidden bg-brand-dark border-t border-gray-800 absolute w-full text-center z-50 top-20"}>
        <div className={"px-4 pt-2 pb-6 space-y-2 flex flex-col items-center"}>
          <a href={"#advertisements"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#39ff14] after:to-green-500 group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-green"}>
            Prices
          </a>
          <a href={"#services"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-purple group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-blue"}>
            Services
          </a>
          <a href={"#portfolio"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-purple after:to-pink-500 group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-purple"}>
            Our Work
          </a>
          <a href={"#reviews"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-purple group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-blue"}>
            Reviews
          </a>
          <a href={"#about"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-brand-purple group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-pink"}>
            About
          </a>
          <a href={"#contact"} className={"group relative block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/60 rounded-md text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-purple after:to-brand-blue group-hover:after:w-3/4 after:transition-all after:duration-300 link-pop neon-hover-purple"}>
            Contact
          </a>
          <a href={"#contact"} className={"block px-3 py-3 text-base font-medium text-brand-blue font-bold"}>
            Request a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
