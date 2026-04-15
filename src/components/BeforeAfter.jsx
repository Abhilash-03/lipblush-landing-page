import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'

const results = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face',
    after: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face',
    name: 'Natural Enhancement',
    description: 'Soft pink tones for everyday elegance'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face',
    after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
    name: 'Defined Contour',
    description: 'Enhanced lip shape with natural color'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
    name: 'Color Correction',
    description: 'Balanced undertones for a fresh look'
  }
]

// Image comparison slider component
const ImageCompare = ({ before, after, name }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleStart = () => setIsDragging(true)
  const handleEnd = () => setIsDragging(false)

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt={`After ${name}`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt={`Before ${name}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Slider Handle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          animate={!isDragging ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronsLeftRight className="w-5 h-5 text-secondary" />
        </motion.div>
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between pointer-events-none">
        <motion.span 
          className="bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium tracking-wide uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Before
        </motion.span>
        <motion.span 
          className="bg-secondary text-white px-3 py-1.5 text-xs font-medium tracking-wide uppercase"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          After
        </motion.span>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }
}

const BeforeAfter = () => {
  return (
    <section id="results" className="py-16 md:py-24 lg:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.span 
              className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Results
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
              Real transformations from our studio
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:pt-8"
          >
            <p className="text-base md:text-lg text-text-light leading-relaxed">
              Every client receives a customized treatment plan. 
              See how our Korean lip blushing technique creates 
              natural, lasting results that enhance your unique beauty.
            </p>
          </motion.div>
        </div>

        {/* Results Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {results.map((result) => (
            <motion.div
              key={result.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <ImageCompare
                  before={result.before}
                  after={result.after}
                  name={result.name}
                />
                
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-medium text-secondary mb-1">{result.name}</h3>
                  <p className="text-sm text-text-muted">{result.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instruction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-text-muted mt-8"
        >
          Drag the slider to compare before and after
        </motion.p>
      </div>
    </section>
  )
}

export default BeforeAfter
