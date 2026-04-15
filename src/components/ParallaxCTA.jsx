import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const ParallaxCTA = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
    >
      {/* Fixed Background */}
      <motion.div 
        className="absolute -inset-[15%]"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block"
              >
                Limited Offer
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6"
              >
                First-time clients receive
                <span className="block text-accent mt-2">20% off treatment</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8 max-w-md"
              >
                Book your consultation today and take the first step 
                toward naturally beautiful lips.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={scrollToForm}
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-secondary px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+919000012345"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/30 text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300"
                >
                  Call Us
                </a>
              </motion.div>
            </div>
            
            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '500+', label: 'Happy Clients' },
                  { value: '5+', label: 'Years Experience' },
                  { value: '4.9', label: 'Google Rating' },
                  { value: '20%', label: 'Off Today' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="text-3xl md:text-4xl font-medium text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ParallaxCTA
