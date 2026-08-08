export default function Hero() {
  return (
    <section className="rc-hero relative overflow-hidden">
      <div className="rc-hero-orb rc-hero-orb-one" aria-hidden="true"></div>
      <div className="rc-hero-orb rc-hero-orb-two" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rc-hero-grid">
          <div className="rc-hero-copy" data-aos="fade-up" data-aos-duration="900">
            <span className="rc-eyebrow">
              <span className="rc-eyebrow-dot" aria-hidden="true"></span>
              Websites · AI · Digital solutions
            </span>

            <h1 className="rc-hero-title">
              Digital experiences
              <span> engineered for business growth.</span>
            </h1>

            <p className="rc-hero-lead">
              From high-performance websites to custom AI chatbots and brand identity,
              we combine creativity with technical precision to help small businesses
              look credible, work smarter, and grow online.
            </p>

            <div className="rc-hero-actions">
              <a href="#portfolio" className="rc-button rc-button-primary">
                View Our Work
                <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="rc-button rc-button-secondary">
                Get in Touch
              </a>
            </div>

            <div className="rc-hero-proof" role="group" aria-label="RC Digital Creations highlights">
              <div>
                <strong>Custom</strong>
                <span>No template-first builds</span>
              </div>
              <div>
                <strong>Responsive</strong>
                <span>Built for desktop & mobile</span>
              </div>
              <div>
                <strong>AI-ready</strong>
                <span>Smart features when useful</span>
              </div>
            </div>
          </div>

          <div className="rc-hero-showcase" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="120">
            <div className="rc-showcase-glow" aria-hidden="true"></div>
            <div className="rc-showcase-window">
              <div className="rc-showcase-toolbar">
                <div className="rc-window-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <span>rcdigitalcreations.co.za</span>
                <span className="rc-live-badge">LIVE</span>
              </div>

              <div className="rc-showcase-screen">
                <img
                  src="/images/Websites/RC_Digital_Creations-1000.webp"
                  srcSet="/images/Websites/RC_Digital_Creations-640.webp 640w, /images/Websites/RC_Digital_Creations-1000.webp 1000w"
                  sizes="(max-width: 700px) 92vw, 520px"
                  alt="RC Digital Creations website preview"
                  width="1000"
                  height="482"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>

              <div className="rc-showcase-footer">
                <div>
                  <span>Current build</span>
                  <strong>React + Vite</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Performance · UX · AI</strong>
                </div>
              </div>
            </div>

            <div className="rc-floating-card rc-floating-card-one">
              <i data-feather="zap" aria-hidden="true"></i>
              <div>
                <strong>Fast by design</strong>
                <span>Lean, responsive builds</span>
              </div>
            </div>

            <div className="rc-floating-card rc-floating-card-two">
              <i data-feather="message-square" aria-hidden="true"></i>
              <div>
                <strong>AI integrated</strong>
                <span>Vector works 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
