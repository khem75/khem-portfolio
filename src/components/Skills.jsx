import { motion } from 'framer-motion'
import {
  LuCode,
  LuCpu,
  LuWrench,
  LuLayoutDashboard,
} from 'react-icons/lu'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Analytics',
      icon: LuLayoutDashboard,
      skills: ['SQL', 'MySQL', 'Power BI', 'Microsoft Excel', 'Data Visualization', 'Data Cleaning'],
    },
    {
      title: 'Programming',
      icon: LuCode,
      skills: ['Python', 'JavaScript', 'R Programming', 'HTML5', 'CSS3'],
    },
    {
      title: 'AI & Machine Learning',
      icon: LuCpu,
      skills: ['OpenCV', 'Scikit-Learn', 'Machine Learning', 'Computer Vision', 'Data Mining'],
    },
    {
      title: 'Tools & Technologies',
      icon: LuWrench,
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'Power BI Desktop', 'Jupyter Notebook'],
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
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My toolkit
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                onMouseMove={handleMouseMove}
              >
                <div className="skill-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
