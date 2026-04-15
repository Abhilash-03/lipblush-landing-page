import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Loader2, Phone, MapPin, Clock } from 'lucide-react'

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)

    const message = `Hi! I'm ${formData.name}. I'm interested in lip blushing service. Please contact me at ${formData.phone}`
    window.open(`https://wa.me/919000012345?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 md:py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center py-12"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-4">
              Thank you for your interest
            </h2>
            <p className="text-text-light mb-8">
              We've received your details and will contact you within 24 hours to schedule your free consultation.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-sm text-primary hover:underline"
            >
              Submit another request
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              Get Started
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-4"
            >
              Book your free consultation today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-text-light leading-relaxed mb-10"
            >
              Take the first step toward naturally beautiful lips. 
              Our consultation is free and without any obligation.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mb-1">Call us</div>
                  <a href="tel:+919000012345" className="text-secondary font-medium hover:text-primary transition-colors">
                    +91 90000 12345
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mb-1">Visit us</div>
                  <div className="text-secondary">New Delhi</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wide mb-1">Hours</div>
                  <div className="text-secondary">Mon - Sat, 10:00 AM - 7:00 PM</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10">
              <h3 className="text-lg font-medium text-secondary mb-6">
                Request a callback
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-light mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-400' : 'border-border'} bg-transparent text-secondary placeholder-text-muted focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-text-light mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-400' : 'border-border'} bg-transparent text-secondary placeholder-text-muted focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 bg-secondary text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-[#333] transition-all duration-200 disabled:opacity-60 disabled:hover:bg-secondary"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-text-muted text-center mt-5">
                By submitting, you agree to receive communication regarding your consultation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
