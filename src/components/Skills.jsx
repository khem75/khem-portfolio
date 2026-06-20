import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiLayout,
} from 'react-icons/fi'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Analytics',
      icon: FiLayout,
      skills: ['SQL', 'MySQL', 'Power BI', 'Microsoft Excel', 'Data Visualization', 'Data Cleaning'],
    },
    {
      title: 'Programming',
      icon: FiCode,
      skills: ['Python', 'JavaScript', 'R Programming', 'HTML5', 'CSS3'],
    },
    {
      title: 'AI & Machine Learning',
      icon: FiDatabase,
      skills: ['OpenCV', 'Scikit-Learn', 'Machine Learning', 'Computer Vision', 'Data Mining'],
    },
    {
      title: 'Tools & Technologies',
      icon: FiTrendingUp,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
                whileHover={{ scale: 1.05 }}
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
