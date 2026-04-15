import { HelmetProvider, Helmet } from 'react-helmet-async'
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

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LipBlush Delhi - Premium Lip Blushing Service",
  "description": "Premium Korean lip blushing service in Delhi. Get natural, long-lasting lip color with our expert permanent makeup artists.",
  "image": "https://lipblush-delhi.vercel.app/og-image.jpg",
  "url": "https://lipblush-delhi.vercel.app",
  "telephone": "+91-9000012345",
  "email": "hello@lipblush.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Delhi",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Lip Blushing in Delhi | Premium Korean Lip Tattoo Service</title>
        <meta name="description" content="Get natural, long-lasting lip color with our expert lip blushing service in Delhi. Korean techniques, certified artists. Book free consultation!" />
        <meta name="keywords" content="lip blushing delhi, lip tattoo delhi, permanent lip color, korean lip blushing" />
        <meta property="og:title" content="Lip Blushing in Delhi | Premium Korean Lip Tattoo Service" />
        <meta property="og:description" content="Get natural, long-lasting lip color with our expert lip blushing service in Delhi." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lipblush-delhi.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

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
    </HelmetProvider>
  )
}

export default App