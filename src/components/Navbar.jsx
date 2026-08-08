import { useInstallApp } from '../InstallAppContext.jsx'

export default function Navbar() {
  const { canInstall, installApp } = useInstallApp()

  return (
    <nav className="rc-nav fixed w-full z-50 transition-all duration-300" id="navbar">
      <div className="rc-nav-inner max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="rc-brand flex items-center min-w-0" aria-label="RC Digital Creations Home">
            <img
              src="/images/RC Digital Creations-logo-72.webp"
              alt="RC Digital Creations Logo"
              className="rc-brand-mark object-contain"
            />
            <span className="rc-brand-name font-bold tracking-tight text-white brand-font">
              <span>RC</span>
              <span className="text-brand-blue">Digital</span>
              <span>Creations</span>
            </span>
          </a>

          <div className="hidden md:flex items-center rc-nav-links">
            <a href="#advertisements">Prices</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Our Work</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            {canInstall && (
              <button type="button" className="rc-nav-install" onClick={installApp}>
                Install App
              </button>
            )}
            <a href="#contact" className="rc-nav-cta">Start a Project</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              className="rc-mobile-menu-btn"
              aria-label="Open navigation menu"
              type="button"
            >
              <i data-feather="menu" className="h-7 w-7"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden rc-mobile-menu absolute w-full z-50 top-20">
        <div className="px-5 py-5 flex flex-col gap-1">
          <a href="#advertisements">Prices</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Our Work</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          {canInstall && (
            <button type="button" className="rc-mobile-install" onClick={installApp}>
              <span>Install App</span>
              <span aria-hidden="true">↓</span>
            </button>
          )}
          <a href="#contact" className="rc-mobile-cta">Start a Project</a>
        </div>
      </div>
    </nav>
  )
}
