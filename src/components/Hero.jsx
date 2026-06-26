import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 800], [0, -180])
  const opacityParallax = useTransform(scrollY, [0, 600], [0.15, 0])

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
        className="hero-parallax-watermark"
        style={{ y: yParallax, opacity: opacityParallax }}
        aria-hidden="true"
      >
        AI · DATA · ML
      </motion.div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <p className="hero-eyebrow"><span /> BCA (AI & Data Science) · Graphic Era University</p>
          <p className="hero-greeting">Hello, I’m</p>
          <h1>KHEM RAJ JOSHI<span className="dot">.</span></h1>
          <p className="subtitle">Data Analyst & Front-End Developer</p>
          <p className="description">
            I build responsive, high-performance web applications and design interactive analytical dashboards that translate complex datasets into clear, actionable business insights.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <FiArrowUpRight />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .35 }} aria-hidden="true">
        <div className="data-card data-card-main"><span>Focus</span><strong>AI + DATA</strong><div className="chart"><i /><i /><i /><i /><i /></div></div>
        <div className="data-card data-card-small"><b>01</b><span>Analyze</span></div>
        <div className="data-card data-card-small"><b>02</b><span>Build</span></div>
      </motion.div>
    </section>
  )
}
