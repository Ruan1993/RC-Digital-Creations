export default function Services() {
  return (
    <section id={"services"} className={"py-20 md:py-24 bg-black/20 relative border-y border-gray-800/50 scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className={"text-center mb-16"} data-aos={"fade-up"}>
          <h2 className={"text-3xl md:text-4xl font-bold mb-4 neon-title"}>
            Our Expertise
          </h2>
          <div className={"w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full"}></div>
        </div>
        <div className={"grid md:grid-cols-3 gap-8"}>
          <div className={"glass p-5 md:p-8 rounded-2xl hover:border-brand-blue/50 transition-all group"} data-aos={"fade-up"} data-aos-delay={"100"}>
            <div className={"w-10 h-10 md:w-14 md:h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-blue/20 transition-colors"}>
              <i data-feather={"layout"} className={"text-brand-blue w-6 h-6 md:w-7 md:h-7"}></i>
            </div>
            <h3 className={"text-lg md:text-xl font-bold mb-2 md:mb-3 text-white"}>
              Web Development
            </h3>
            <p className={"text-sm md:text-base text-gray-400 leading-relaxed"}>
              Fast, responsive, and SEO-optimized websites. Whether you need a
              landing page or a multi-page business site, we build for
              performance.
            </p>
          </div>
          <div className={"glass p-5 md:p-8 rounded-2xl hover:border-brand-purple/50 transition-all group"} data-aos={"fade-up"} data-aos-delay={"200"}>
            <div className={"w-10 h-10 md:w-14 md:h-14 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-purple/20 transition-colors"}>
              <i data-feather={"message-square"} className={"text-brand-purple w-6 h-6 md:w-7 md:h-7"}></i>
            </div>
            <h3 className={"text-lg md:text-xl font-bold mb-2 md:mb-3 text-white"}>
              AI Chatbots
            </h3>
            <p className={"text-sm md:text-base text-gray-400 leading-relaxed"}>
              Automate your customer support with custom AI chatbots that work
              24/7. Integrated directly into your site to handle queries and
              bookings.
            </p>
          </div>
          <div className={"glass p-5 md:p-8 rounded-2xl hover:border-pink-500/50 transition-all group"} data-aos={"fade-up"} data-aos-delay={"300"}>
            <div className={"w-10 h-10 md:w-14 md:h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-pink-500/20 transition-colors"}>
              <i data-feather={"pen-tool"} className={"text-pink-500 w-6 h-6 md:w-7 md:h-7"}></i>
            </div>
            <h3 className={"text-lg md:text-xl font-bold mb-2 md:mb-3 text-white"}>
              Branding & Design
            </h3>
            <p className={"text-sm md:text-base text-gray-400 leading-relaxed"}>
              Stand out visually. We create memorable logos, business cards,
              custom QR codes, and promotional posters that define your brand
              identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
