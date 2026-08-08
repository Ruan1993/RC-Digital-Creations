const highlights = [
  { icon: 'code', label: 'Web + AI', text: 'Custom digital builds with practical automation.' },
  { icon: 'layers', label: 'Systems thinking', text: 'Solutions designed around the wider business workflow.' },
  { icon: 'users', label: 'Direct collaboration', text: 'Work directly with the person building your project.' },
  { icon: 'map-pin', label: 'Stilbaai · Remote', text: 'Based in the Western Cape and working with clients remotely.' },
]

export default function About() {
  return (
    <section id="about" className="rc-about scroll-mt-24">
      <div className="rc-about-orb" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rc-about-grid">
          <div className="rc-about-copy" data-aos="fade-right">
            <span className="rc-section-kicker">Behind the build</span>
            <h2>Technical thinking with a practical business focus.</h2>

            <p className="rc-about-lead">
              RC Digital Creations is led by <strong>Ruan Coetzee</strong>, combining
              front-end development, AI, design, and a background in Geography &
              Environmental Sciences to approach digital problems from more than one angle.
            </p>

            <p className="rc-about-body">
              The goal is simple: build useful digital solutions that look professional,
              perform well, and make sense for the way a business actually operates.
            </p>

            <blockquote>
              “I don’t just write code; I build solutions that are sustainable,
              data-driven, and designed for the future.”
            </blockquote>

            <div className="rc-about-actions">
              <a href="/about.html" className="rc-button rc-button-primary">
                More About RC
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://ruancoetzee.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="rc-button rc-button-secondary"
              >
                Personal Portfolio
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="rc-about-panel" data-aos="fade-left">
            <div className="rc-about-panel-head">
              <span>RC Digital Creations</span>
              <strong>Built around useful technology.</strong>
            </div>

            <div className="rc-about-highlight-grid">
              {highlights.map((item) => (
                <article className="rc-about-highlight" key={item.label}>
                  <span className="rc-about-highlight-icon" aria-hidden="true">
                    <i data-feather={item.icon}></i>
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="rc-about-panel-foot">
              <span className="rc-about-status-dot" aria-hidden="true"></span>
              <p>Available for websites, AI integrations, branding, and custom digital projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
