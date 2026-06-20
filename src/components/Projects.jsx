import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Chess Game Player',
      description: 'An intelligent chess engine using Minimax and Alpha-Beta Pruning for strategic decision-making.',
      tags: ['Python', 'Minimax', 'Artificial Intelligence'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Face Recognition Attendance',
      description: 'An automated system using computer vision for accurate, real-time attendance tracking.',
      tags: ['Python', 'OpenCV', 'Face Recognition'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'CPU Performance Monitor',
      description: 'A real-time monitoring application that analyzes CPU usage and system performance metrics.',
      tags: ['Python', 'System Metrics', 'Visualization'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Ecom Express Dashboard',
      description: 'An interactive dashboard for logistics, shipment tracking, and delivery performance analytics.',
      tags: ['Power BI', 'Data Analytics', 'Logistics'],
      link: '#',
      github: '#',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Selected work
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ translateY: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live demo"><FiExternalLink /></a>}
                  <a href="https://github.com/khem75" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile"><FiGithub /></a>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
