import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <p className="hero-eyebrow"><span /> BCA · AI & Data Science</p>
          <h1>Hi, I’m <em>Khem Raj Joshi.</em></h1>
          <p className="subtitle">Data Analyst · AI Explorer · Developer</p>
          <p className="description">
            I turn raw data into clear insights and ambitious ideas into practical software solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View my projects
            <FiArrowUpRight />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .35 }} aria-hidden="true">
        <div className="data-card data-card-main"><span>Focus</span><strong>AI + DATA</strong><div className="chart"><i/><i/><i/><i/><i/></div></div>
        <div className="data-card data-card-small"><b>01</b><span>Analyze</span></div>
        <div className="data-card data-card-small"><b>02</b><span>Build</span></div>
      </motion.div>
    </section>
  )
}
