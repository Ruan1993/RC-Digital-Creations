const services = [
  {
    icon: 'layout',
    accent: 'blue',
    number: '01',
    title: 'Web Development',
    description:
      'Fast, responsive, SEO-conscious websites built around your business goals — from focused landing pages to complete multi-page sites.',
    points: ['Custom-coded builds', 'Mobile-first UX', 'Performance & SEO'],
  },
  {
    icon: 'message-square',
    accent: 'purple',
    number: '02',
    title: 'AI Chatbots',
    description:
      'Practical AI assistants that answer questions, guide visitors, surface useful information, and help turn website traffic into enquiries.',
    points: ['24/7 assistance', 'Business-specific context', 'Website integration'],
  },
  {
    icon: 'pen-tool',
    accent: 'cyan',
    number: '03',
    title: 'Branding & Digital Design',
    description:
      'A consistent visual identity across logos, promotional material, QR solutions, and the digital touchpoints your customers actually see.',
    points: ['Brand identity', 'Print & promo design', 'QR & digital assets'],
  },
]

export default function Services() {
  return (
    <section id="services" className="rc-services scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rc-section-heading" data-aos="fade-up">
          <span className="rc-section-kicker">What we build</span>
          <h2>Digital solutions with a purpose.</h2>
          <p>
            No unnecessary complexity. Just thoughtful technology, strong design,
            and solutions shaped around what your business actually needs.
          </p>
        </div>

        <div className="rc-service-grid">
          {services.map((service, index) => (
            <article
              className={`rc-service-card rc-service-${service.accent}`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              key={service.title}
            >
              <div className="rc-service-topline">
                <span className="rc-service-icon">
                  <i data-feather={service.icon}></i>
                </span>
                <span className="rc-service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="rc-service-link">
                Discuss a project <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
