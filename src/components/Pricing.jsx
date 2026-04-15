import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const includes = [
  'Initial consultation & assessment',
  'Custom color matching',
  'Premium Korean pigments',
  'Numbing for comfort',
  'Full lip blushing procedure',
  'Aftercare kit',
  'Touch-up session (6-8 weeks)',
]

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              Investment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-4"
            >
              Transparent pricing, exceptional results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-text-light leading-relaxed mb-8"
            >
              Our comprehensive package includes everything you need 
              for beautiful, long-lasting lip color. No hidden fees.
            </motion.p>

            {/* Price Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="text-sm text-text-muted uppercase tracking-wide">Starting from</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl md:text-6xl font-light text-secondary">₹15,000</span>
              </div>
              <p className="text-sm text-text-muted mt-2">
                *Final price determined during consultation based on lip condition
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 bg-secondary text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-[#333] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right - Inclusions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream p-8 md:p-10"
          >
            <h3 className="text-lg font-medium text-secondary mb-6">
              What's Included
            </h3>
            <ul className="space-y-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-white border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" strokeWidth={2} />
                  </span>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" 
                    alt="" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" 
                    alt="" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" 
                    alt="" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="text-sm">
                  <span className="font-medium text-secondary">500+</span>
                  <span className="text-text-muted"> satisfied clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
