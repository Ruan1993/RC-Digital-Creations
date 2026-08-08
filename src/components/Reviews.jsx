const reviews = [
  {
    initials: 'DW',
    name: 'Diane White',
    business: 'Diane White Art',
    accent: 'blue',
    quote:
      'RC Digital Creations transformed our online presence. The new website is fast, modern, and our clients love it!',
  },
  {
    initials: 'NW',
    name: 'Nails by Wilma',
    business: 'Beauty & Wellness Client',
    accent: 'purple',
    quote:
      'The AI chatbot has been a game changer for our customer service. It handles queries 24/7 perfectly.',
  },
  {
    initials: 'CC',
    name: 'CC Auto Repairs',
    business: 'Automotive Client',
    accent: 'cyan',
    quote:
      'Professional, reliable, and incredibly talented. Ruan really understands digital strategy.',
  },
]

function Stars() {
  return (
    <div className="rc-review-stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <i data-feather="star" key={index}></i>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="rc-reviews relative scroll-mt-24">
      <div className="rc-reviews-orb rc-reviews-orb-one" aria-hidden="true"></div>
      <div className="rc-reviews-orb rc-reviews-orb-two" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rc-reviews-heading" data-aos="fade-up">
          <div>
            <span className="rc-section-kicker">Client feedback</span>
            <h2>Built with care. Remembered for the experience.</h2>
          </div>

          <div className="rc-reviews-summary">
            <div className="rc-reviews-score">
              <strong>5.0</strong>
              <Stars />
            </div>
            <p>
              Feedback from businesses we’ve helped with websites, digital design,
              and AI-powered customer experiences.
            </p>
          </div>
        </div>

        <div className="rc-reviews-grid">
          {reviews.map((review, index) => (
            <article
              className={`rc-review-card rc-review-${review.accent}`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              key={review.name}
            >
              <div className="rc-review-top">
                <Stars />
                <span className="rc-review-quote-mark" aria-hidden="true">“</span>
              </div>

              <blockquote>{review.quote}</blockquote>

              <div className="rc-review-person">
                <span className="rc-review-avatar">{review.initials}</span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.business}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rc-reviews-cta" data-aos="fade-up" data-aos-delay="160">
          <div>
            <span className="rc-reviews-google-mark" aria-hidden="true">G</span>
            <div>
              <strong>Worked with RC Digital Creations?</strong>
              <span>Your feedback helps other businesses choose with confidence.</span>
            </div>
          </div>

          <a
            href="https://g.page/r/CaooJ9uv-_kdEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="rc-reviews-button"
          >
            Leave a Google Review
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
