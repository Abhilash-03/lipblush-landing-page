import { motion } from 'framer-motion'
import { Clock, Shield, Sparkles, Heart, Palette, RefreshCw } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Long-Lasting Results',
    description: 'Semi-permanent color that lasts 2-3 years with proper care and maintenance.'
  },
  {
    icon: Shield,
    title: 'Safe & Certified',
    description: 'FDA-approved pigments and sterile techniques by certified professionals.'
  },
  {
    icon: Sparkles,
    title: 'Natural Finish',
    description: 'Korean technique for a soft, gradient effect that looks naturally beautiful.'
  },
  {
    icon: Heart,
    title: 'Minimal Discomfort',
    description: 'Advanced numbing ensures a comfortable, virtually pain-free experience.'
  },
  {
    icon: Palette,
    title: 'Custom Colors',
    description: 'Personalized shade matching to complement your skin tone perfectly.'
  },
  {
    icon: RefreshCw,
    title: 'Free Touch-Up',
    description: 'Complimentary touch-up session included within 6-8 weeks post-procedure.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  }
}

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-4"
          >
            The benefits of professional lip blushing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-light leading-relaxed"
          >
            Experience the difference of expert technique, premium materials, 
            and personalized care at every step.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="w-11 h-11 border border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-accent-light transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <benefit.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-base font-medium text-secondary mb-2 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-text-light text-[15px] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
