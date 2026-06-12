import React, { useRef, useState } from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string // e.g. rgba(59,130,246,0.15)
  onClick?: () => void
}

export default function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.15)',
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`glass-panel rounded-2xl relative overflow-hidden transition-all duration-300 p-6 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Interactive Hover Glow Background */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Subtle border shine (Vercel style) */}
      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
