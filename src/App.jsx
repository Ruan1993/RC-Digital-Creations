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
    window.dispatchEvent(new Event('rc-react-mounted'))
    return undefined
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Section2 />
      <Pricing />
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
