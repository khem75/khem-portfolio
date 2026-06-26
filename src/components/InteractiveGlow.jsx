import React from 'react'

export default function InteractiveGlow() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(to right, rgba(23, 23, 23, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(23, 23, 23, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 1,
        opacity: 0.8,
      }}
      aria-hidden="true"
    />
  )
}
