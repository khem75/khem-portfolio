import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Khem Raj Joshi.</p>
        <p>Turning Data into Insights & Ideas into Solutions.</p>
      </motion.div>
    </footer>
  )
}
