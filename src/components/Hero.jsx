import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Mouse tracking for image tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappLink = "https://wa.me/919000012345?text=Hi!%20I'm%20interested%20in%20lip%20blushing%20service%20in%20Delhi"

  // Text animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.03, ease: [0.25, 0.4, 0.25, 1] }
    })
  }

  const title1 = "Lip Blushing"
  const title2 = "in Delhi"

  return (
    <section className="relative min-h-screen bg-cream overflow-hidden">
      {/* Animated Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'w-3 h-3 bg-primary/40' : i % 3 === 1 ? 'w-2 h-2 bg-accent/50' : 'w-4 h-4 bg-primary/20'}`}
            style={{
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i * 7) % 80}%`
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Larger decorative circles */}
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 border border-primary/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-[15%] w-24 h-24 border border-accent/30 rounded-full"
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-32 pb-32 lg:pt-36 lg:pb-28">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
                Korean Lip Artistry
              </span>
            </motion.div>

            {/* Animated Title - Letter by Letter */}
            <div className="mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-secondary leading-[1.1]">
                {title1.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block"
                    whileHover={{ scale: 1.1, color: '#8B7355' }}
                    style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-[1.1]">
                {title2.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + title1.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block"
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Description with stagger */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-light text-lg leading-relaxed mb-10 max-w-md"
            >
              Experience the <span className="text-secondary font-medium">premium Korean aesthetic</span> technique for naturally beautiful, 
              semi-permanent lip color. Wake up with perfectly tinted lips every day.
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14"
            >
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-secondary text-white px-7 py-3.5 text-sm font-medium tracking-wide overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span className="relative z-10">Book Consultation</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
              
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 text-sm font-medium tracking-wide overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-[#1da851]"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10">WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Interactive Stats with Count Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 sm:gap-12"
            >
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '4.9', label: 'Google Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-default group"
                >
                  <motion.div 
                    className="text-2xl sm:text-3xl font-medium text-secondary group-hover:text-primary transition-colors duration-300"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-text-muted mt-1 group-hover:text-text-light transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image with 3D Tilt Effect */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false)
              mouseX.set(0)
              mouseY.set(0)
            }}
          >
            <motion.div 
              className="relative aspect-[1/1] lg:aspect-[1/1] max-h-[500px]"
              style={{
                rotateX: isHovering ? rotateX : 0,
                rotateY: isHovering ? rotateY : 0,
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional lip blushing treatment result"
                className="w-full h-full object-cover shadow-2xl"
              />
              
              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
                animate={{ opacity: isHovering ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Play Card with Pulse */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 cursor-pointer shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <motion.div 
                      className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-5 h-5 text-primary ml-0.5" />
                    </motion.div>
                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/40"
                      animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-sm">Watch Our Process</div>
                    <div className="text-xs text-text-muted">See the transformation</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Frame */}
              <motion.div 
                className="hidden lg:block absolute -z-10 top-8 -right-8 w-full h-full border border-primary/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              />
              
              {/* Corner Accents */}
              <motion.div
                className="hidden lg:block absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              />
              <motion.div
                className="hidden lg:block absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Scroll</span>
        <motion.div
          className="w-5 h-8 border border-primary/40 rounded-full flex justify-center pt-1"
          animate={{ borderColor: ['rgba(139,115,85,0.4)', 'rgba(139,115,85,0.8)', 'rgba(139,115,85,0.4)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
