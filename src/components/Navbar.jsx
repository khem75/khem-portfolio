import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  // Click outside hook
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      // If the clicked target was unmounted/detached during React state updates, ignore
      if (!document.documentElement.contains(event.target)) return

      const navbar = document.querySelector('.navbar')
      if (navbar && !navbar.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  // Scroll Spy Hook
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for navbar height

      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      
      let currentSection = 'home'
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId
            break
          }
        }
      }

      // If scrolled near bottom, force active section to contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact'
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <motion.div
        className="nav-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <a href="#home" className="nav-logo">KHEM R. JOSHI<span>.</span></a>

        <button
          className="menu-toggle"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => {
            const linkId = link.toLowerCase()
            const isActive = activeSection === linkId
            return (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${linkId}`}
                  className={isActive ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </motion.li>
            )
          })}
        </ul>
        <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
      </motion.div>
    </nav>
  )
}
