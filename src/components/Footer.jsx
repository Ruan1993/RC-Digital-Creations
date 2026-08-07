export default function Footer() {
  return (
    <footer className={"bg-black py-20 border-t border-gray-900 mt-24"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center"}>
        <div className={"flex flex-col items-center gap-2"}>
          <a href={"index.html"} aria-label={"RC Digital Creations Home"}>
            <img src={"images/RC Digital Creations.png"} alt={"Logo"} className={"h-20 w-20 object-contain drop-shadow-[0_0_14px_rgba(59,130,246,0.6)]"} />
          </a>
          <span className={"text-gray-300 font-semibold text-lg inline-flex items-baseline gap-1 flex-wrap justify-center"}>
            <span>©</span>
            <span id={"year"}></span>
            <span>RC Digital Creations</span>
          </span>
          <span className={"text-gray-500 text-sm"}>
            Designed by RC Digital Creations
          </span>
        </div>
        <div className={"flex gap-6 text-gray-500"}>
          <a href={"https://wa.me/27634733098?text=Hi%20Ruan%2C%20I%27d%20like%20to%20discuss%20a%20project."} target={"_blank"} rel={"noopener"} className={"group relative p-3 rounded-full bg-[#25D366] inline-flex items-center justify-center hover:brightness-110 icon-neon icon-neon-green"} aria-label={"WhatsApp Ruan"}>
            <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} className={"w-5 h-5"} aria-hidden={"true"}>
              <path fill={"white"} d={"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"}></path>
            </svg>
            <span className={"pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 border border-gray-700 shadow-lg"}>
              WhatsApp us
            </span>
          </a>
          <a href={"tel:+27634733098"} className={"group relative p-3 rounded-full bg-gray-800 text-brand-blue inline-flex items-center justify-center btn-outline-purple btn-pop icon-neon icon-neon-blue"} aria-label={"Call Ruan"}>
            <i data-feather={"phone"} className={"w-5 h-5"}></i>
            <span className={"pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 border border-gray-700 shadow-lg"}>
              Call us
            </span>
          </a>
          <a href={"mailto:info@rcdigitalcreations.co.za"} className={"group relative p-3 rounded-full bg-brand-purple inline-flex items-center justify-center hover:brightness-110 icon-neon icon-neon-purple"} aria-label={"Email Ruan"}>
            <i data-feather={"mail"} className={"w-5 h-5 text-white"}></i>
            <span className={"pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 border border-gray-700 shadow-lg"}>
              Email us
            </span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=61583951025369"} target={"_blank"} rel={"noopener"} className={"group relative p-3 rounded-full bg-[#1877F2] inline-flex items-center justify-center hover:brightness-110 icon-neon icon-neon-blue"} aria-label={"Follow us on Facebook"}>
            <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} className={"w-5 h-5"} aria-hidden={"true"}>
              <path fill={"white"} d={"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.403 0 2.831.253 2.831.253v3.118h-1.354c-1.936 0-2.518 1.192-2.518 2.533v1.654h3.945l-.543 3.667h-3.402v7.98h-4.818z"}></path>
            </svg>
            <span className={"pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 border border-gray-700 shadow-lg"}>
              Follow us on Facebook
            </span>
          </a>
          <a href={"https://share.google/BgEHfRbZUixrDP4uL"} target={"_blank"} rel={"noopener"} className={"group relative p-3 rounded-full bg-white inline-flex items-center justify-center hover:brightness-110 icon-neon shadow-[0_0_15px_rgba(255,255,255,0.3)]"} aria-label={"Find us on Google Maps"}>
            <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"} className={"w-5 h-5"} aria-hidden={"true"}>
              <path fill={"#4285F4"} d={"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}></path>
            </svg>
            <span className={"pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 border border-gray-700 shadow-lg"}>
              Find us on Google Maps
            </span>
          </a>
        </div>
        <div className={"mt-6 flex items-center gap-3 text-gray-500 text-sm"}>
          <a href={"terms.html"} className={"hover:text-white"}>
            Terms & Conditions
          </a>
          <span className={"text-gray-700"}>
            •
          </span>
          <a href={"privacy.html"} className={"hover:text-white"}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
