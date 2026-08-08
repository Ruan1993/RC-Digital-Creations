const faqs = [
  {
    question: 'Can I pay monthly?',
    answer:
      'Yes. Monthly options are available for selected packages and are handled by manual invoice rather than automatic website subscriptions.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Starter websites are typically completed within 5 to 7 days. Larger or more custom projects depend on scope and content readiness.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'Usually your business details, services, branding assets, and a rough idea of what you want. You can also complete the website brief to make the process easier.',
  },
  {
    question: 'Do you redesign existing websites?',
    answer:
      'Yes. We can refresh the design, improve responsiveness, and modernise the user experience of an existing website.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Ongoing maintenance, content updates, and technical support are available as needed.',
  },
  {
    question: 'Can I get a custom quote?',
    answer:
      'Absolutely. If your project needs something more advanced, request a custom quote and we will tailor the solution to your goals.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="rc-faq scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rc-faq-heading" data-aos="fade-up">
          <span className="rc-section-kicker">Quick answers</span>
          <h2>Frequently asked questions.</h2>
          <p>
            Straightforward answers about pricing, timelines, support, and what happens next.
          </p>
        </div>

        <div className="rc-faq-grid">
          {faqs.map((faq, index) => (
            <details
              className="rc-faq-item"
              key={faq.question}
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
            >
              <summary>
                <span>{faq.question}</span>
                <span className="rc-faq-plus" aria-hidden="true">+</span>
              </summary>
              <div className="rc-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="rc-faq-cta" data-aos="fade-up" data-aos-delay="180">
          <div>
            <strong>Still unsure?</strong>
            <span>Vector can help you choose a package, or you can contact us directly.</span>
          </div>
          <a href="#contact">Ask about your project <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
