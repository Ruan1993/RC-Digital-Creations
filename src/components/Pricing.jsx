export default function Pricing() {
  return (
    <section id="advertisements" className="rc-pricing scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rc-section-heading rc-pricing-heading" data-aos="fade-up">
          <span className="rc-section-kicker">Simple, transparent pricing</span>
          <h2>Clear packages. No surprise subscriptions.</h2>
          <p>
            Choose a ready-made package or request something custom. Monthly options
            are handled by manual invoice, so you stay in control of what you pay for.
          </p>
        </div>

        <div
          id="ads-pager"
          className="rc-pricing-pager relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            id="ads-prev"
            className="rc-pager-arrow rc-pager-arrow-left"
            aria-label="Previous pricing option"
            type="button"
          >
            <i data-feather="chevron-left"></i>
          </button>

          <button
            id="ads-next"
            className="rc-pager-arrow rc-pager-arrow-right"
            aria-label="Next pricing option"
            type="button"
          >
            <i data-feather="chevron-right"></i>
          </button>

          <div id="ads-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-4"></div>
        </div>

        <div className="rc-pricing-note" data-aos="fade-up" data-aos-delay="160">
          <div>
            <span className="rc-pricing-note-icon" aria-hidden="true">
              <i data-feather="info"></i>
            </span>
            <p>
              Not sure which option fits? Tell us what you need and we’ll recommend
              the simplest solution that makes sense for your business.
            </p>
          </div>
          <a href="#contact">Request a custom quote <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
