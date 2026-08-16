import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import useScrollSpy from '../hooks/useScrollSpy'
import Magnetic from '../components/Magnetic'

const navLinks = [
  { label: 'Hero', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#tech', id: 'tech' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy(navLinks.map((link) => link.id))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-bg-dark/70 backdrop-blur-md border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}

      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <Magnetic>
            <a 
              href="#hero" 
              className="text-lg font-bold font-display tracking-tight text-white flex items-center gap-1.5"
            >
              <span>SURESHKUMAR</span>
              
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-2 py-1.5 rounded-full glass-panel border-white/5 bg-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Magnetic key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-200 z-10 ${
                      isActive ? 'text-white' : 'text-text-muted hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 bg-accent-blue/15 border border-accent-blue/30 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </Magnetic>
              )
            })}
          </nav>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-accent-blue/20 hover:shadow-accent-purple/30 transition-all duration-300"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/5 border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-dark/95 backdrop-blur-lg z-30 md:hidden flex flex-col justify-center items-center p-6"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  key={link.id}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold font-display tracking-wide uppercase ${
                      activeSection === link.id ? 'text-accent-blue' : 'text-text-muted hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-accent-blue/20"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
