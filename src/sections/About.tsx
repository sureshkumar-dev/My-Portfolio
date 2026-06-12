import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Terminal, Code, Cpu, Shield, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = '', duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    if (start === end) return

    const totalFrames = 60 * duration
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const current = Math.min(Math.floor(end * progress), end)
      setCount(current)

      if (frame >= totalFrames) {
        clearInterval(timer)
      }
    }, 1000 / 60) // 60 FPS

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-white">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const terminalRef = useRef(null)
  const isTerminalInView = useInView(terminalRef, { once: true, margin: '-100px' })

  const topics = [
    {
      icon: <Code className="w-5 h-5 text-accent-blue" />,
      title: 'MERN Developer',
      description: 'Building full-stack web applications using MongoDB, Express, React, and Node.js.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      title: 'React Enthusiast',
      description: 'Crafting responsive, high-performance user interfaces with clean components and fluid animations.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent-blue" />,
      title: 'Backend Development',
      description: 'Designing secure RESTful APIs, structuring databases, and managing server state.',
    },
    {
      icon: <Shield className="w-5 h-5 text-accent-purple" />,
      title: 'Problem Solving',
      description: 'Breaking down complex requirements into clean, maintainable, and optimized code.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-accent-blue" />,
      title: 'Continuous Learning',
      description: 'Keeping pace with modern web ecosystems, TypeScript, and software engineering practices.',
    },
  ]

  const stats = [
    { value: 5, suffix: '+', label: 'Projects Built' },
    { value: 12, suffix: '+', label: 'Technologies Used' },
    { value: 24, suffix: '+', label: 'Months of Learning' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background ambient light */}
      <div className="glow-spot bg-accent-purple left-[-10%] top-[30%] w-[350px] h-[350px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Translating Complex Requirements Into Elegant Code"
          subtitle="Passionate developer engineering modern full-stack web products with a focus on details and performance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          {/* Left Column: Topics list */}
          <div className="lg:col-span-6 space-y-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard
                  glowColor="rgba(139, 92, 246, 0.08)"
                  className="p-5 flex items-start gap-4 hover:border-accent-purple/20 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base md:text-lg mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Code Terminal Picture Placeholder */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.div
              ref={terminalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isTerminalInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full relative"
            >
              {/* Vercel-style glowing outline */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-2xl blur-xl opacity-30 -z-10" />

              {/* Developer Glass Terminal */}
              <div className="glass-panel rounded-2xl overflow-hidden border-white/10 shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-white/5 border-b border-white/5 px-4 py-3.5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] text-text-muted font-mono flex items-center gap-1.5 uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-accent-blue" />
                    sureshkumar.json
                  </div>
                  <div className="w-10" /> {/* Spacer */}
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-[11px] md:text-xs text-left overflow-x-auto space-y-2 leading-relaxed bg-[#0F1322]/80">
                  <p className="text-emerald-400">// Dynamic Profile Information</p>
                  <p className="text-purple-400">
                    <span className="text-accent-blue">const</span> developer = <span className="text-yellow-300">{`{`}</span>
                  </p>
                  <p className="pl-4 text-white">
                    name: <span className="text-amber-300">"SURESHKUMAR "</span>,
                  </p>
                  <p className="pl-4 text-white">
                    title: <span className="text-amber-300">"Full Stack Developer"</span>,
                  </p>
                  <p className="pl-4 text-white">
                    education: <span className="text-yellow-300">{`{`}</span>
                  </p>
                  <p className="pl-8 text-white">
                    degree: <span className="text-amber-300">"B.E. Computer Science Engineering"</span>,
                  </p>
                  <p className="pl-8 text-white">
                    period: <span className="text-amber-300">"2022 - 2026"</span>
                  </p>
                  <p className="pl-4 text-yellow-300">{`},`}</p>
                  <p className="pl-4 text-white">
                    focusArea: <span className="text-amber-300">"MERN Stack & TypeScript Dev"</span>,
                  </p>
                  <p className="pl-4 text-white">
                    philosophy: <span className="text-amber-300">"Clean code, pixel-perfection, fast load-times"</span>,
                  </p>
                  <p className="pl-4 text-white">
                    currentlySeeking: <span className="text-emerald-400">true</span>
                  </p>
                  <p className="text-yellow-300">{`}`}</p>
                  <p className="pt-2 text-text-muted">
                    <span className="text-accent-purple">console</span>.<span className="text-accent-blue">log</span>(developer.philosophy)
                  </p>
                  <p className="text-white bg-white/5 p-2 rounded border border-white/5 mt-1 font-sans text-xs">
                    "Clean code, pixel-perfection, fast load-times"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    glowColor="rgba(59, 130, 246, 0.08)"
                    className="p-4 flex flex-col items-center justify-center text-center border-white/5 bg-white/5 py-6"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <span className="text-[10px] md:text-xs font-bold text-text-muted mt-2 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
