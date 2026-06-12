import { useEffect, useRef } from 'react'

export default function FloatingBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      decay: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.radius = Math.random() * 1.5 + 0.5
        this.alpha = Math.random() * 0.5 + 0.1
        this.decay = 0.002
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around boundaries
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(c: CanvasRenderingContext2D) {
        c.save()
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = `rgba(148, 163, 184, ${this.alpha})`
        c.fill()
        c.restore()
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 15000), 100)
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)'
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background canvas for fine particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Floating blur gradients */}
      <div className="glow-spot bg-accent-blue left-[-10%] top-[10%] animate-pulse-slow w-[400px] h-[400px]" />
      <div className="glow-spot bg-accent-purple right-[-5%] top-[40%] animate-pulse-slow w-[500px] h-[500px]" style={{ animationDelay: '-3s' }} />
      <div className="glow-spot bg-accent-blue left-[20%] bottom-[10%] animate-pulse-slow w-[450px] h-[450px]" style={{ animationDelay: '-5s' }} />
    </div>
  )
}
