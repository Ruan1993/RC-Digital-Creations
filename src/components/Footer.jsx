import { useInstallApp } from '../InstallAppContext.jsx'

export default function Footer() {
  const { canInstall, installApp } = useInstallApp()

  return (
    <footer className="rc-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rc-footer-main">
          <div className="rc-footer-brand">
            <a href="/" className="rc-footer-logo" aria-label="RC Digital Creations Home">
              <img
                src="/images/RC Digital Creations-logo-128.webp"
                alt="RC Digital Creations Logo"
              />
              <span>
                <strong>RC <em>Digital</em> Creations</strong>
                <small>Websites · AI · Digital solutions</small>
              </span>
            </a>

            <p>
              Custom websites, AI integrations, branding, and practical digital
              solutions for businesses that want to look professional and work smarter.
            </p>
          </div>

          <div className="rc-footer-column">
            <span>Navigate</span>
            <a href="#advertisements">Prices</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Our Work</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
          </div>

          <div className="rc-footer-column">
            <span>Contact</span>
            <a href="tel:+27634733098">063 473 3098</a>
            <a href="mailto:info@rcdigitalcreations.co.za">info@rcdigitalcreations.co.za</a>
            <a
              href="https://wa.me/27634733098?text=Hi%20Ruan%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="rc-footer-column">
            <span>Connect</span>
            <a
              href="https://www.facebook.com/profile.php?id=61583951025369"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://share.google/BgEHfRbZUixrDP4uL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
            <a href="https://ruancoetzee.co.za" target="_blank" rel="noopener noreferrer">
              Ruan's Portfolio
            </a>
            {canInstall && (
              <button
                type="button"
                className="rc-footer-install"
                onClick={installApp}
                aria-label="Download RC Digital Creations app"
              >
                <svg
                  className="rc-footer-install-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
                  <path d="M10 18.2h4" />
                  <path d="M12 7v7" />
                  <path d="m9.5 11.6 2.5 2.5 2.5-2.5" />
                </svg>
                <span>Download App</span>
              </button>
            )}
          </div>
        </div>

        <div className="rc-footer-bottom">
          <div className="rc-footer-copyright">
            <span>©</span>
            <span id="year"></span>
            <span>RC Digital Creations</span>
          </div>

          <span className="rc-footer-built">
            Designed & built by RC Digital Creations
          </span>

          <div className="rc-footer-legal">
            <a href="/terms.html">Terms & Conditions</a>
            <span>•</span>
            <a href="/privacy.html">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
