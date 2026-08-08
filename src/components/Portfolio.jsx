export default function Portfolio() {
  const handleFilter = (category, button) => {
    window.filterProjects?.(category, button)

    if (window.innerWidth >= 768) return

    // Mobile browsers can apply their own focus/scroll correction after a tap.
    // Use a deterministic anchor and correct it twice after layout settles.
    const pinPortfolioControls = () => {
      const tabs = document.querySelector('.rc-portfolio-tabs')
      if (!tabs) return

      const navbar = document.getElementById('navbar')
      const navbarHeight = navbar?.getBoundingClientRect().height || 72
      const topGap = 10

      const targetTop =
        window.scrollY +
        tabs.getBoundingClientRect().top -
        navbarHeight -
        topGap

      window.scrollTo({
        top: Math.max(0, Math.round(targetTop)),
        behavior: 'auto'
      })
    }

    // Remove touch focus so the browser does not later "helpfully" scroll
    // the pressed filter button into another position.
    if (button && window.matchMedia?.('(pointer: coarse)').matches) {
      button.blur()
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pinPortfolioControls()
        setTimeout(pinPortfolioControls, 90)
        setTimeout(pinPortfolioControls, 220)
      })
    })
  }

  return (
    <section id={"portfolio"} className={"rc-portfolio relative scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className="rc-portfolio-heading" data-aos="fade-up">
          <div>
            <span className="rc-section-kicker">Selected work</span>
            <h2>Projects built to solve real business needs.</h2>
          </div>
          <p>
            Explore websites, branding, QR solutions, and promotional design created
            for real businesses — each shaped around a different goal, audience, and identity.
          </p>
        </div>
        <div className="rc-portfolio-tabs" data-aos="fade-up" data-aos-delay="100">
          <button type={"button"} id={"tab-web"} className="tab-btn rc-portfolio-tab" onClick={(event) => handleFilter("web", event.currentTarget)}>
            Websites
          </button>
          <button type={"button"} id={"tab-branding"} className="tab-btn rc-portfolio-tab" onClick={(event) => handleFilter("branding", event.currentTarget)}>
            Logos & Design
          </button>
          <button type={"button"} id={"tab-qr"} className="tab-btn rc-portfolio-tab" onClick={(event) => handleFilter("qr", event.currentTarget)}>
            QR Solutions
          </button>
          <button type={"button"} id={"tab-posters"} className="tab-btn rc-portfolio-tab" onClick={(event) => handleFilter("posters", event.currentTarget)}>
            Poster & Sticker Designs
          </button>
        </div>
        <div id="projects-pager" className="rc-projects-pager relative">
          <button type={"button"} id={"projects-prev"} className="rc-project-arrow rc-project-arrow-left group" aria-label="Previous projects">
            <i data-feather={"chevron-left"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <button type={"button"} id={"projects-next"} className="rc-project-arrow rc-project-arrow-right group" aria-label="Next projects">
            <i data-feather={"chevron-right"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" id="projects-grid">
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/Albertinia_Pavers_Website.webp"} alt={"Albertinia Pavers Website"} width={1800} height={819} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Albertinia Pavers
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Manufacturing
                </p>
                <a href={"https://albertiniapavers.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Paving manufacturer site with product showcase and services.
                </p>
                <a href={"https://albertiniapavers.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/Diane_White_Art_Website.webp"} alt={"Diane White Art Website"} width={1717} height={838} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Diane White Art
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Fine Art
                </p>
                <a href={"https://dianewhiteart.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Fine Art website for a renowned South African artist.
                </p>
                <a href={"https://dianewhiteart.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/Natural_Health_Website.webp"} alt={"@Natural Health Website"} width={1800} height={912} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  @Natural Health
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Natural Health
                </p>
                <a href={"https://www.at-naturalhealth.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Natural health business website with product discovery, advertising, WhatsApp ordering, and a virtual health market.
                </p>
                <a href={"https://www.at-naturalhealth.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/CC_Auto_Repairs_Website.webp"} alt={"CC Auto Repairs Website"} width={1800} height={808} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  CC Auto Repairs
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Automotive
                </p>
                <a href={"https://ccautorepairs.netlify.app/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Automotive repair site detailing services, rates, and contact.
                </p>
                <a href={"https://ccautorepairs.netlify.app/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/Nails_by_Wilma_Website.webp"} alt={"Nails by Wilma Website"} width={1745} height={839} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Nails by Wilma
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Design • Beauty
                </p>
                <a href={"https://nailsbywilma.netlify.app"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Beauty studio site highlighting nail services, gallery, and
                  booking.
                </p>
                <a href={"https://nailsbywilma.netlify.app"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/Ruan_Coetzee_Portfolio.webp"} alt={"Ruan Coetzee Portfolio"} width={1800} height={845} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Ruan Coetzee Portfolio
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Personal
                </p>
                <a href={"https://ruancoetzee.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Personal portfolio showcasing projects, experience, and
                  contact.
                </p>
                <a href={"https://ruancoetzee.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/RC_Digital_Creations.webp"} alt={"RC Digital Creations Website"} width={1800} height={867} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  RC Digital Creations
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Agency
                </p>
                <a href={"https://rcdigitalcreations.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Agency site presenting services, selected work, and contact.
                </p>
                <a href={"https://rcdigitalcreations.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/CC Auto Repairs Logo.webp"} alt={"CC Auto Repairs Logo"} width={613} height={598} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  CC Auto Repairs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Albertinia Pavers Logo.webp"} alt={"Albertinia Pavers Logo"} width={884} height={248} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Albertinia Pavers
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Nails_by_Wilma_Logo.webp"} alt={"Nails by Wilma Logo"} width={250} height={151} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Nails by Wilma
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Still Green 6.webp"} alt={"Still Green 6"} width={1134} height={906} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Still Green
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Still Green 7.webp"} alt={"Still Green 7"} width={1117} height={852} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Still Green
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Still Green 8.webp"} alt={"Still Green 8"} width={933} height={893} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Still Green
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/Still Greens 5.webp"} alt={"Still Greens 5"} width={1134} height={870} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Still Green
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.26 (1).webp"} alt={"WhatsApp Image 2024-04-24 (1)"} width={1024} height={1024} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Client Logo
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.26.webp"} alt={"WhatsApp Image 2024-04-24 10.05.26"} width={1024} height={1024} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Client Logo
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.27.webp"} alt={"WhatsApp Image 2024-04-24 10.05.27"} width={1024} height={1024} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Client Logo
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Brand Identity • Logo Design
                </p>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"/images/Websites/De_Brakke_Guest_House_Website.webp"} alt={"De Brakke Guest House"} width={1800} height={862} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  De Brakke Guest House
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Hospitality
                </p>
                <a href={"https://www.debrakke.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Guesthouse website with rooms overview, amenities, and booking
                  info.
                </p>
                <a href={"https://www.debrakke.co.za/"} target={"_blank"} rel={"noopener noreferrer"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Salad Mix.webp"} alt={"Still Green - Salad Mix"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Packaging • Sticker Design
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Nails By Wilma.webp"} alt={"Nails By Wilma"} width={1600} height={1131} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Promotional Poster
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Nails_by_Wilma_Poster.webp"} alt={"Nails by Wilma Poster"} width={1600} height={1455} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Promotional Poster
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Beetroot.webp"} alt={"Still Green - Beetroot"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Sticker
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Broccoli.webp"} alt={"Still Green - Broccoli"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Sticker
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Chai.webp"} alt={"Still Green - Chai"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Sticker
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Pea Shoots.webp"} alt={"Still Green - Pea Shoots"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Sticker
                </p>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/Poster & Sticker Designs/Still Green - Sunflower.webp"} alt={"Still Green - Sunflower"} width={1535} height={1181} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Poster & Sticker Designs
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Product Sticker
                </p>
              </div>
            </div>
            <div className={"project-item qr group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/QR Designs/Nails_by_Wilma_Google_Maps_QR-1024.webp"} alt={"QR Design"} width={813} height={813} className={"h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Custom QR Solutions
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Digital Integration
                </p>
              </div>
            </div>
            <div className={"project-item qr group relative rounded-xl overflow-hidden glass border-0 rc-project-card"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"/images/QR Designs/Nails_by_Wilma_Website_QR-1024.webp"} alt={"Website QR"} width={813} height={813} className={"h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Website QR
                </h3>
                <p className={"text-sm text-gray-300"}>
                  Digital Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
