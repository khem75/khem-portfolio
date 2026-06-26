import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particle properties
    const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of screen width
      y: Math.random() * 100, // percentage of screen height
      size: Math.random() * 60 + 10, // size from 10px to 70px
      duration: Math.random() * 20 + 20, // drift duration 20s to 40s
      delay: Math.random() * -20, // negative delay so they start immediately at different positions
      opacity: Math.random() * 0.12 + 0.03, // subtle opacity
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 212, 0, 0.25) 0%, rgba(255, 212, 0, 0.03) 70%)',
            border: '1px solid rgba(255, 212, 0, 0.08)',
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 100, 0], // drift vertically
            x: [0, 50, -50, 0], // drift horizontally
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
