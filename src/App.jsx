import Header from './components/Header'
import Hero from './components/Hero'
import BeforeAfter from './components/BeforeAfter'
import Benefits from './components/Benefits'
import Procedure from './components/Procedure'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ParallaxCTA from './components/ParallaxCTA'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Benefits />
        <Procedure />
        <Pricing />
        <Testimonials />
        <ParallaxCTA />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App