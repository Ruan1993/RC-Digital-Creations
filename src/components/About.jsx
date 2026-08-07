export default function About() {
  return (
    <section id={"about"} className={"py-20 bg-gradient-to-r from-gray-900 to-black border-y border-gray-800 scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12"}>
        <div className={"md:w-1/2"} data-aos={"fade-right"}>
          <h2 className={"text-3xl font-bold mb-6 neon-title"}>
            The Mind Behind the Code
          </h2>
          <p className={"text-gray-300 mb-6 text-lg leading-relaxed"}>
            RC Digital Creations is led by{' '}
            <span className={"text-brand-blue font-semibold"}>Ruan Coetzee</span>.{' '}
            With a background in Geography & Environmental Sciences turned AI
            Engineer & Developer, Ruan brings a unique systems-thinking approach
            to digital problems.
          </p>
          <p className={"text-gray-400 mb-8"}>
            "I don't just write code; I build solutions that are sustainable,
            data-driven, and designed for the future."
          </p>
          <div className={"flex flex-col sm:flex-row gap-4"}>
            <a href={"about.html"} className={"btn-neon-outline"}>
              <i data-feather={"info"} className={"mr-2 h-5 w-5"}></i>
              More about us
            </a>
            <a href={"https://ruancoetzee.co.za"} target={"_blank"} className={"btn-neon-outline"}>
              <i data-feather={"user"} className={"mr-2 h-5 w-5"}></i>
              View Ruan's Personal Portfolio
            </a>
          </div>
        </div>
        <div className={"md:w-1/2 relative"} data-aos={"fade-left"}>
          <div className={"absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple blur-2xl opacity-20 rounded-full"}></div>
          <div className={"glass p-8 rounded-2xl relative border border-gray-700"}>
            <div className={"grid grid-cols-2 gap-6"}>
              <div className={"text-center"}>
                <h4 className={"text-4xl font-bold text-white mb-1"}>
                  4+
                </h4>
                <p className={"text-sm text-gray-400"}>
                  Years Tech Exp
                </p>
              </div>
              <div className={"text-center"}>
                <h4 className={"text-4xl font-bold text-white mb-1"}>
                  100%
                </h4>
                <p className={"text-sm text-gray-400"}>
                  Client Satisfaction
                </p>
              </div>
              <div className={"text-center"}>
                <h4 className={"text-4xl font-bold text-white mb-1"}>
                  24h
                </h4>
                <p className={"text-sm text-gray-400"}>
                  Support Response
                </p>
              </div>
              <div className={"text-center"}>
                <h4 className={"text-4xl font-bold text-white mb-1"}>
                  AI
                </h4>
                <p className={"text-sm text-gray-400"}>
                  Powered Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
