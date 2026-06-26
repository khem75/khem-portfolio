import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)
    window.location.href = `mailto:khemj421@gmail.com?subject=${subject}&body=${body}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 45,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Let’s turn ideas<br />into solutions.
        </motion.h2>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Start a conversation <FiArrowUpRight />
            </button>
          </motion.form>

          <motion.div variants={itemVariants} className="contact-links">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="mailto:khemj421@gmail.com" aria-label="Email">
                <FiMail />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/khem-joshi-245865293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/khem75" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
