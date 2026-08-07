export default function Portfolio() {
  return (
    <section id={"portfolio"} className={"py-24 relative scroll-mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className={"text-center mb-12"} data-aos={"fade-up"}>
          <h2 className={"text-3xl md:text-4xl font-bold mb-4 neon-title"}>
            Selected Works
          </h2>
          <p className={"text-gray-400"}>
            A collection of our recent digital projects.
          </p>
        </div>
        <div className={"flex flex-wrap justify-center gap-4 mb-12"} data-aos={"fade-up"} data-aos-delay={"100"}>
          <button id={"tab-web"} className={"tab-btn px-6 py-2 rounded-full border border-gray-700 text-gray-400 font-medium transition-all hover:border-brand-purple hover:text-brand-purple btn-pop"} onClick={(event) => window.filterProjects?.("web", event.currentTarget)}>
            Websites
          </button>
          <button id={"tab-branding"} className={"tab-btn px-6 py-2 rounded-full border border-gray-700 text-gray-400 font-medium transition-all hover:border-brand-purple hover:text-brand-purple btn-pop"} onClick={(event) => window.filterProjects?.("branding", event.currentTarget)}>
            Logos & Design
          </button>
          <button id={"tab-qr"} className={"tab-btn px-6 py-2 rounded-full border border-gray-700 text-gray-400 font-medium transition-all hover:border-brand-purple hover:text-brand-purple btn-pop"} onClick={(event) => window.filterProjects?.("qr", event.currentTarget)}>
            QR Solutions
          </button>
          <button id={"tab-posters"} className={"tab-btn px-6 py-2 rounded-full border border-gray-700 text-gray-400 font-medium transition-all hover:border-brand-purple hover:text-brand-purple btn-pop"} onClick={(event) => window.filterProjects?.("posters", event.currentTarget)}>
            Poster & Sticker Designs
          </button>
        </div>
        <div id={"projects-pager"} className={"relative px-0 md:px-0"}>
          <button id={"projects-prev"} className={"absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/40 border border-gray-700/40 text-white opacity-10 hover:opacity-60 transition-all shadow-lg backdrop-blur-sm group btn-pop"} aria-label={"Previous"}>
            <i data-feather={"chevron-left"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <button id={"projects-next"} className={"absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/40 border border-gray-700/40 text-white opacity-10 hover:opacity-60 transition-all shadow-lg backdrop-blur-sm group btn-pop"} aria-label={"Next"}>
            <i data-feather={"chevron-right"} className={"w-6 h-6 group-hover:scale-110 transition-transform"}></i>
          </button>
          <div className={"grid grid-cols-1 lg:grid-cols-3 gap-1"} id={"projects-grid"}>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/Albertinia_Pavers_Website.png"} alt={"Albertinia Pavers Website"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Albertinia Pavers
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Manufacturing
                </p>
                <a href={"https://albertiniapavers.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Paving manufacturer site with product showcase and services.
                </p>
                <a href={"https://albertiniapavers.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/Diane_White_Art_Website.png"} alt={"Diane White Art Website"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Diane White Art
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Fine Art
                </p>
                <a href={"https://dianewhiteart.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Fine Art website for a renowned South African artist.
                </p>
                <a href={"https://dianewhiteart.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/CC_Auto_Repairs_Website.png"} alt={"CC Auto Repairs Website"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  CC Auto Repairs
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Automotive
                </p>
                <a href={"https://ccautorepairs.netlify.app/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Automotive repair site detailing services, rates, and contact.
                </p>
                <a href={"https://ccautorepairs.netlify.app/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/Nails_by_Wilma_Website.png"} alt={"Nails by Wilma Website"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Nails by Wilma
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Design • Beauty
                </p>
                <a href={"https://nailsbywilma.netlify.app"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Beauty studio site highlighting nail services, gallery, and
                  booking.
                </p>
                <a href={"https://nailsbywilma.netlify.app"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/Ruan_Coetzee_Portfolio.png"} alt={"Ruan Coetzee Portfolio"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  Ruan Coetzee Portfolio
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Personal
                </p>
                <a href={"https://ruancoetzee.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Personal portfolio showcasing projects, experience, and
                  contact.
                </p>
                <a href={"https://ruancoetzee.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/RC_Digital_Creations.png"} alt={"RC Digital Creations Website"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  RC Digital Creations
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Agency
                </p>
                <a href={"https://rcdigitalcreations.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Agency site presenting services, selected work, and contact.
                </p>
                <a href={"https://rcdigitalcreations.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/CC Auto Repairs Logo.png"} alt={"CC Auto Repairs Logo"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Albertinia Pavers Logo.png"} alt={"Albertinia Pavers Logo"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Nails_by_Wilma_Logo.png"} alt={"Nails by Wilma Logo"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Still Green 6.png"} alt={"Still Green 6"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Still Green 7.png"} alt={"Still Green 7"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Still Green 8.png"} alt={"Still Green 8"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/Still Greens 5.png"} alt={"Still Greens 5"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.26 (1).jpeg"} alt={"WhatsApp Image 2024-04-24 (1)"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.26.jpeg"} alt={"WhatsApp Image 2024-04-24 10.05.26"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item branding group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Logo Designs/WhatsApp Image 2024-04-24 at 10.05.27.jpeg"} alt={"WhatsApp Image 2024-04-24 10.05.27"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item web group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden"}>
                <img src={"images/Websites/De_Brakke_Guest_House_Website.png"} alt={"De Brakke Guest House"} className={"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
              </div>
              <div className={"absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"}>
                <h3 className={"text-xl font-bold text-white"}>
                  De Brakke Guest House
                </h3>
                <p className={"text-sm text-gray-300 mb-4"}>
                  Web Development • Hospitality
                </p>
                <a href={"https://www.debrakke.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Site
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
              <div className={"md:hidden p-4 text-center space-y-2"}>
                <p className={"text-gray-300 text-sm"}>
                  Guesthouse website with rooms overview, amenities, and booking
                  info.
                </p>
                <a href={"https://www.debrakke.co.za/"} target={"_blank"} className={"inline-flex items-center text-brand-blue font-semibold hover:text-white transition-colors"}>
                  Visit Website
                  <i data-feather={"arrow-right"} className={"ml-2 w-4 h-4"}></i>
                </a>
              </div>
            </div>
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Salad Mix.png"} alt={"Still Green - Salad Mix"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Nails By Wilma.png"} alt={"Nails By Wilma"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Nails_by_Wilma_Poster.png"} alt={"Nails by Wilma Poster"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Beetroot.png"} alt={"Still Green - Beetroot"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Broccoli.png"} alt={"Still Green - Broccoli"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Chai.png"} alt={"Still Green - Chai"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Pea Shoots.png"} alt={"Still Green - Pea Shoots"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item posters group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/Poster & Sticker Designs/Still Green - Sunflower.png"} alt={"Still Green - Sunflower"} className={"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item qr group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/QR Designs/Nails_by_Wilma_Google_Maps_QR-1024.png"} alt={"QR Design"} className={"h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
            <div className={"project-item qr group relative rounded-xl overflow-hidden glass border-0"} data-aos={"fade-up"}>
              <div className={"aspect-video overflow-hidden bg-gray-900 flex items-center justify-center p-8"}>
                <img src={"images/QR Designs/Nails_by_Wilma_Website_QR-1024.png"} alt={"Website QR"} className={"h-full object-contain transition-transform duration-700 group-hover:scale-110"} loading={"lazy"} decoding={"async"} />
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
