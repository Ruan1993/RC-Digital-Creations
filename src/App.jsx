import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Pricing from './components/Pricing.jsx'
import Section2 from './components/Section2.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import FAQ from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import LegacyExtras from './components/LegacyExtras.jsx'

export default function App() {
  useEffect(() => {
    // Legacy JS listens for DOMContentLoaded. React may mount after it, so notify
    // a compatibility bridge if the document was already ready.
    window.dispatchEvent(new Event('rc-react-mounted'))
    return undefined
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Section2 />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <LegacyExtras />
    </>
  )
}
