import { motion } from 'framer-motion'
import './About.css'

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Curious by nature.<br />Driven by data.
        </motion.h2>

        <div className="about-content">
          <motion.div variants={itemVariants} className="about-text">
            <p>
              Hi, I’m Khem Raj Joshi, a BCA (AI & Data Science) student at Graphic Era University, Dehradun. I’m passionate about Data Analytics, Artificial Intelligence, Machine Learning, and Full Stack Development.
            </p>
            <p>
              I enjoy transforming raw data into meaningful insights through SQL, Power BI, Python, and visualization. I’m currently building real-world projects while continuously expanding my expertise in modern tools and technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h3>BCA</h3>
              <p>AI & Data Science</p>
            </div>
            <div className="stat">
              <h3>GEU</h3>
              <p>Graphic Era University</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Always learning</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
