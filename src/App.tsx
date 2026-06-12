import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import FloatingBg from './components/FloatingBg'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Contact from './sections/Contact'

export default function App() {
  // Scroll progress indicator (Framer Motion)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-bg-dark text-white selection:bg-accent-purple/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Global Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Background Canvas Particles & Glow blurs */}
      <FloatingBg />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Layout Content */}
      <main className="relative z-10">
        {/* Hero Landing */}
        <Hero />

        {/* About Profile & Counter Stats */}
        <About />

        {/* Tech Stack Grids */}
        <TechStack />

        {/* Case Studies & Interactive Demos */}
        <Projects />

        {/* History Timeline */}
        <Journey />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Compact Premium Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-bg-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-sm font-bold font-display tracking-tight text-white uppercase">
              SURESHKUMAR <span className="text-accent-blue font-light">P.</span>
            </span>
            <p className="text-xs text-text-muted mt-1.5 font-light">
              © {new Date().getFullYear()} SureshKumar. All rights reserved. Built with React + TS + Tailwind.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-text-muted uppercase tracking-wider font-semibold font-mono">
            <a href="#hero" className="hover:text-accent-blue transition-colors">Top</a>
            <a href="#about" className="hover:text-accent-blue transition-colors">About</a>
            <a href="#projects" className="hover:text-accent-blue transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
