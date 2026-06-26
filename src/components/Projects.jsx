import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 10,
      title: 'NINE77 Streetwear Store',
      description: 'A premium luxury e-commerce platform for streetwear in Nepal. Features WhatsApp ordering integration, smooth animations, and a dark cinematic aesthetic.',
      tags: ['Next.js', 'React', 'TailwindCSS', 'WhatsApp Ordering'],
      link: 'https://nine77-store.vercel.app',
      github: 'https://github.com/khem75',
    },
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
      id: 11,
      title: 'HR Analytics Dashboard',
      description: 'An interactive dashboard designed to track employee performance, turnover rate, and overall workforce demographics to aid strategic decision making.',
      tags: ['Power BI', 'Excel', 'HR Analytics'],
      link: '#',
      github: '#',
    },
    {
      id: 12,
      title: 'Heart Disease Analysis Dashboard',
      description: 'A diagnostic and exploratory data dashboard that analyzes health metrics to identify key indicators and patterns related to heart disease.',
      tags: ['Python', 'Power BI', 'Healthcare Analytics'],
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
    {
      id: 5,
      title: 'World Cup 2022 Dashboard',
      description: 'A visual analytics report exploring teams, matches, results, and key performance trends from the 2022 FIFA World Cup.',
      tags: ['Power BI', 'Data Visualization', 'Sports Analytics'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Bike Store Sales Dashboard',
      description: 'An interactive sales report analyzing revenue, orders, products, customers, and store performance.',
      tags: ['Power BI', 'SQL', 'Sales Analytics'],
      link: '#',
      github: '#',
    },
    {
      id: 7,
      title: 'Coffee Store Sales Analysis',
      description: 'A data analytics project uncovering product, revenue, time, and location-based trends in coffee store sales.',
      tags: ['Excel', 'Data Cleaning', 'Sales Analytics'],
      link: '#',
      github: '#',
    },
    {
      id: 8,
      title: 'Person Re-Identification',
      description: 'A computer vision system designed to recognize and match the same person across different images or camera views.',
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      link: '#',
      github: '#',
    },
    {
      id: 9,
      title: 'Lung Cancer Detection',
      description: 'A machine learning project developed to support early lung cancer detection through intelligent data classification.',
      tags: ['Python', 'Machine Learning', 'Healthcare AI'],
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

  const projectGroups = [
    {
      number: '01',
      title: 'Data Analytics Projects',
      description: 'Dashboards and analysis that transform raw information into clear business insights.',
      items: projects.filter((project) => [4, 5, 6, 7, 11, 12].includes(project.id)),
    },
    {
      number: '02',
      title: 'AI & Software Projects',
      description: 'Intelligent systems and practical applications built to solve real-world problems.',
      items: projects.filter((project) => ![4, 5, 6, 7, 11, 12].includes(project.id)),
    },
  ]
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
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
          Projects that turn<br />data into decisions
        </motion.h2>

        {projectGroups.map((group) => (
          <motion.div key={group.title} variants={itemVariants} className="project-group">
            <div className="project-group-heading">
              <span>{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className="projects-grid">
              {group.items.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.025 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  onMouseMove={handleMouseMove}
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
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
