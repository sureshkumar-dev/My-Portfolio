import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react'
import useTypewriter from '../hooks/useTypewriter'
import Magnetic from '../components/Magnetic'

export default function Hero() {
  const typedRole = useTypewriter([
    'Full Stack Developer',
    'MERN Stack Specialist',
    'TypeScript Enthusiast',
    'Creative Problem Solver',
  ])

  // Framer Motion entry variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  } as const

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  } as const


  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-dark"
    >
      {/* Background Radial Glow (Apple/Stripe Inspired) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/10 text-xs font-semibold tracking-wider text-accent-blue uppercase mb-6"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </motion.div>

          {/* Developer Name */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-white mb-6 uppercase"
          >
            SURESHKUMAR <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-purple-400"></span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            variants={childVariants}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 mb-6 font-display h-[40px] flex items-center justify-center gap-1.5"
          >
            <span>I am a</span>
            <span className="text-accent-blue border-r-2 border-accent-blue/80 pr-1 py-0.5 animate-pulse font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
              {typedRole}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={childVariants}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 max-w-3xl mb-4 font-sans leading-snug"
          >
            Building modern web experiences with MERN Stack and TypeScript.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={childVariants}
            className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mb-10 leading-relaxed font-light"
          >
            Passionate about creating scalable full-stack applications, elegant user experiences, and real-world solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 items-center mb-12"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-accent-blue/20 hover:shadow-accent-purple/30 transition-all duration-300 border border-white/5"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel hover:bg-white/10 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 border border-white/10"
              >
                Contact Me
                <MessageSquare className="w-4 h-4" />
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={childVariants} className="flex gap-5 items-center">
            <Magnetic>
              <a
                href="https://github.com/sureshkumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-text-muted hover:text-white border-white/10 transition-colors flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://www.linkedin.com/in/sureshkumar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-text-muted hover:text-white border-white/10 transition-colors flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
