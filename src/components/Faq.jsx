export default function FAQ() {
  return (
    <section id={"faq"} className={"py-20 bg-black/20 border-y border-gray-800/50 scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className={"text-center mb-12"} data-aos={"fade-up"}>
          <h2 className={"text-3xl md:text-4xl font-bold mb-4 neon-title"}>
            Frequently Asked Questions
          </h2>
          <p className={"text-gray-400 max-w-3xl mx-auto"}>
            A few quick answers about pricing, timelines, invoices, and support.
          </p>
        </div>
        <div className={"grid md:grid-cols-2 gap-6"}>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"50"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              Can I pay monthly?
            </h3>
            <p className={"text-gray-400"}>
              Yes. Monthly options are available for selected packages, and these are
          handled by manual invoice rather than automatic website subscriptions.
            </p>
          </div>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"100"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              How long does a website take?
            </h3>
            <p className={"text-gray-400"}>
              Starter websites are typically completed within 5 to 7 days. Larger
          or more custom projects depend on scope and content readiness.
            </p>
          </div>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"150"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              What do I need to get started?
            </h3>
            <p className={"text-gray-400"}>
              Usually your business details, services, branding assets, and a rough
          idea of what you want. You can also complete the website brief to make
          the process easier.
            </p>
          </div>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"200"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              Do you redesign existing websites?
            </h3>
            <p className={"text-gray-400"}>
              Yes. We can refresh the design, improve responsiveness, and modernise
          the user experience of an existing website.
            </p>
          </div>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"250"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              Do you offer support after launch?
            </h3>
            <p className={"text-gray-400"}>
              Yes. Ongoing maintenance, content updates, and technical support are
          available as needed.
            </p>
          </div>
          <div className={"glass rounded-2xl p-6"} data-aos={"fade-up"} data-aos-delay={"300"}>
            <h3 className={"text-xl font-semibold text-white mb-3"}>
              Can I get a custom quote?
            </h3>
            <p className={"text-gray-400"}>
              Absolutely. If your project needs something more advanced, request a
          custom quote and we will tailor the solution to your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
