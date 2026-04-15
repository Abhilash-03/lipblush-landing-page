import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Kapoor',
    location: 'New Delhi',
    text: 'The results exceeded my expectations. My lips look naturally fuller and the color is exactly what I wanted. The team was professional and made me feel comfortable throughout the entire process.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    location: 'Gurgaon',
    text: 'I was nervous about getting lip blushing done, but the consultation put all my fears to rest. The numbing worked perfectly - I barely felt anything. Now I wake up with perfect lips every day.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Meera Malhotra',
    location: 'Noida',
    text: 'Best decision I made this year. The Korean technique gives such a natural gradient effect. My friends keep asking what lipstick I use, and I just smile. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face'
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-28 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-medium text-white mb-8 lg:mb-12"
            >
              What our clients say about their experience
            </motion.h2>

            {/* Mobile Image - shows only on mobile, between heading and quote */}
            <div className="lg:hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/3] max-h-[250px] mx-auto"
                >
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-4"
                >
                  <Quote className="w-10 h-10 text-accent/50" />
                </motion.div>
                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  {testimonials[current].text}
                </blockquote>
                <div>
                  <div className="font-medium text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonials[current].location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div 
              className="flex items-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <span className="text-white/50 text-sm ml-4">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block"
                >
                  {String(current + 1).padStart(2, '0')}
                </motion.span>
                {' / '}
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </motion.div>
          </div>

          {/* Right Image - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/5] max-h-[450px] overflow-hidden"
              >
                <motion.img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
