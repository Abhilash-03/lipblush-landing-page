import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your goals, assess your lip condition, and determine the ideal color that complements your skin tone.',
    duration: '30 min'
  },
  {
    number: '02',
    title: 'Preparation',
    description: 'Your lips are cleansed and a topical numbing cream is applied to ensure maximum comfort during the procedure.',
    duration: '20 min'
  },
  {
    number: '03',
    title: 'Application',
    description: 'Using precise Korean techniques, we carefully deposit pigment into the lips, building color gradually for a natural gradient.',
    duration: '2-3 hrs'
  },
  {
    number: '04',
    title: 'Aftercare',
    description: 'You receive detailed aftercare instructions and schedule your complimentary touch-up session for 6-8 weeks later.',
    duration: '15 min'
  }
]

const Procedure = () => {
  return (
    <section id="procedure" className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1610166970010-c2e6c3da7164?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lip blushing procedure at our studio"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-64 bg-white p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-medium text-secondary">2-3h</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Session Time</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-secondary">7-10d</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Healing Time</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-12"
            >
              Your lip blushing journey, step by step
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-light text-border group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-secondary">
                        {step.title}
                      </h3>
                      <span className="text-xs text-text-muted bg-cream px-2 py-1">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Procedure
