import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ShoppingBag, Eye, CheckCircle2, MessageSquare, Clipboard } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  features: string[]
  githubUrl: string
  demoUrl: string
  glowColor: string
  mockup: React.ReactNode // Custom interactive widget mockup
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  
  // Custom Demo Interactive States
  const [farmGuardAlert, setFarmGuardAlert] = useState(false)
  const [cartCount, setCartCount] = useState(1)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [isPaying, setIsPaying] = useState(false)
  
  const [cheatingLogs, setCheatingLogs] = useState([
    { time: '12:04:10', type: 'info', msg: 'Exam session started' },
    { time: '12:05:40', type: 'info', msg: 'Face detection active' },
  ])

  const triggerCheatLog = () => {
    const alerts = [
      { time: '12:07:12', type: 'warning', msg: 'Copy/Paste action detected' },
      { time: '12:08:05', type: 'critical', msg: 'Tab switch detected! Outside window' },
      { time: '12:08:45', type: 'warning', msg: 'Multiple faces in frame' },
      { time: '12:09:10', type: 'critical', msg: 'Focus lost. Recording flagged' },
    ]
    
    if (cheatingLogs.length < 6) {
      setCheatingLogs([...cheatingLogs, alerts[cheatingLogs.length - 2]])
    } else {
      setCheatingLogs([
        { time: '12:04:10', type: 'info', msg: 'Exam session started' },
        { time: '12:05:40', type: 'info', msg: 'Face detection active' },
      ])
    }
  }

  const triggerPayment = () => {
    setIsPaying(true)
    setTimeout(() => {
      setIsPaying(false)
      setPaymentSuccess(true)
      setTimeout(() => setPaymentSuccess(false), 3000)
    }, 1500)
  }

  const projects: Project[] = [
    {
      id: 'farmguard',
      title: 'FarmGuard',
      description: 'Crop Disease Early Warning System protecting harvest yields through automated climate checks and Twilio warnings.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Twilio'],
      features: ['Environmental Monitoring', 'Disease Alerts', 'SMS Notifications'],
      githubUrl: 'https://github.com/sureshkumar-dev/FarmAlert.git',
      demoUrl: 'https://farmguard-in-website.vercel.app',
      glowColor: 'rgba(34, 197, 94, 0.15)', // Green glow
      mockup: (
        <div className="w-full h-[220px] bg-[#0E1322] border border-white/5 rounded-xl p-4 flex flex-col justify-between font-sans overflow-hidden">
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              FarmGuard Sensor Active
            </span>
            <span className="text-[9px] text-text-muted">Zone B-12</span>
          </div>

          {/* Gauges */}
          <div className="grid grid-cols-3 gap-2 py-3">
            <div className="bg-white/3 border border-white/5 rounded p-2 text-center">
              <div className="text-[9px] text-text-muted">Temp</div>
              <div className="text-sm font-bold text-white">28.4°C</div>
            </div>
            <div className="bg-white/3 border border-white/5 rounded p-2 text-center">
              <div className="text-[9px] text-text-muted">Humidity</div>
              <div className="text-sm font-bold text-white">82%</div>
            </div>
            <div className="bg-white/3 border border-white/5 rounded p-2 text-center">
              <div className="text-[9px] text-text-muted">Blight Risk</div>
              <div className="text-sm font-bold text-red-400">High</div>
            </div>
          </div>

          {/* SMS Notification Trigger */}
          <div className="relative">
            <button
              onClick={() => setFarmGuardAlert(!farmGuardAlert)}
              className="w-full py-1.5 px-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] tracking-wide uppercase transition-colors"
            >
              {farmGuardAlert ? 'Reset Environment' : 'Simulate Twilio Alert'}
            </button>

            <AnimatePresence>
              {farmGuardAlert && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-12 left-0 right-0 p-3 rounded-lg bg-[#1a2333] border border-emerald-500/40 shadow-xl flex items-start gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <div className="text-[9px] font-bold text-emerald-400">SMS RECEIVED</div>
                    <div className="text-[10px] text-white leading-normal font-mono">
                      "[FarmGuard Alert] Blight Risk in Zone B-12 exceeds 80%. Run irrigation."
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ),
    },
    {
      id: 'vendr',
      title: 'Vendr',
      description: 'Ultra-fast, fully responsive E-Commerce platform integrated with Secure Razorpay processing, carts, and user profiles.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
      features: ['Secure Authentication', 'Fluid Shopping Cart', 'Razorpay Online Payments'],
      githubUrl: 'https://github.com/sureshkumar-dev/VENDR-ECOM-WEBSITE.git',
      demoUrl: 'https://vendr-shopping-website.vercel.app',
      glowColor: 'rgba(59, 130, 246, 0.15)', // Blue glow
      mockup: (
        <div className="w-full h-[220px] bg-[#0E1322] border border-white/5 rounded-xl p-4 flex flex-col justify-between font-sans">
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-accent-blue flex items-center gap-1">
              <ShoppingBag className="w-3.5 h-3.5" />
              Vendr Checkout
            </span>
            <span className="text-[10px] font-bold text-white">Total: $148.00</span>
          </div>

          {/* Cart item representation */}
          <div className="flex items-center justify-between py-2.5 px-3 rounded bg-white/3 border border-white/5">
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-white">Pro Mechanical Keyboard</span>
              <span className="text-[9px] text-text-muted">Quantity: {cartCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => cartCount > 1 && setCartCount(cartCount - 1)}
                className="w-5 h-5 rounded bg-white/5 text-white flex items-center justify-center text-xs hover:bg-white/10"
              >
                -
              </button>
              <button 
                onClick={() => setCartCount(cartCount + 1)}
                className="w-5 h-5 rounded bg-white/5 text-white flex items-center justify-center text-xs hover:bg-white/10"
              >
                +
              </button>
            </div>
          </div>

          {/* Pay Button */}
          <div className="relative">
            <button
              onClick={triggerPayment}
              disabled={isPaying || paymentSuccess}
              className={`w-full py-2 px-3 rounded font-bold text-[10px] tracking-wide uppercase transition-all flex items-center justify-center gap-1.5 ${
                paymentSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-accent-blue hover:bg-blue-500 text-white'
              }`}
            >
              {isPaying ? (
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : paymentSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Razorpay Success
                </>
              ) : (
                'Pay with Razorpay'
              )}
            </button>

            {/* Simulated Razorpay Overlay */}
            <AnimatePresence>
              {isPaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#0B0F19]/90 rounded flex flex-col items-center justify-center text-center p-2 border border-accent-blue/30"
                >
                  <div className="text-[10px] font-mono text-accent-blue animate-pulse">
                    Connecting to Razorpay gateway...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ),
    },
    {
      id: 'malpractice',
      title: 'Exam Malpractice Monitor',
      description: 'Security toolkit for digital assessments to record student focus losses, tab switches, and illegal clipboard actions.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Security API'],
      features: ['Tab Switch Tracking', 'Copy/Paste Intercept', 'Database Violation Logs'],
      githubUrl: 'https://github.com/sureshkumar-dev/smart-exam-proctoring.git',
      demoUrl: 'https://smart-exam-proctoring-gamma.vercel.app/',
      glowColor: 'rgba(139, 92, 246, 0.15)', // Purple glow
      mockup: (
        <div className="w-full h-[220px] bg-[#0E1322] border border-white/5 rounded-xl p-4 flex flex-col justify-between font-mono text-[9px] overflow-hidden">
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-accent-purple flex items-center gap-1">
              <Clipboard className="w-3.5 h-3.5" />
              MALPRACTICE LOGS
            </span>
            <button 
              onClick={triggerCheatLog}
              className="px-2 py-0.5 rounded bg-accent-purple/20 border border-accent-purple/30 text-white hover:bg-accent-purple/30 text-[8px]"
            >
              Trigger Event
            </button>
          </div>

          {/* Logs Terminal Body */}
          <div className="flex-1 my-2 overflow-y-auto space-y-1.5 text-left pr-1 scrollbar-thin">
            {cheatingLogs.map((log, idx) => (
              <div key={idx} className="flex gap-1.5 items-start">
                <span className="text-text-muted shrink-0">[{log.time}]</span>
                <span
                  className={
                    log.type === 'critical'
                      ? 'text-red-400 font-bold'
                      : log.type === 'warning'
                      ? 'text-yellow-400'
                      : 'text-emerald-400'
                  }
                >
                  {log.type === 'critical' ? 'CRIT' : log.type === 'warning' ? 'WARN' : 'INFO'}
                </span>
                <span className="text-white/80">{log.msg}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-1.5 flex items-center justify-between text-text-muted">
            <span>Violations: {cheatingLogs.filter(l => l.type === 'critical').length}</span>
            <span className="flex items-center gap-1">
              Status: 
              <span className={cheatingLogs.some(l => l.type === 'critical') ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                {cheatingLogs.some(l => l.type === 'critical') ? 'FLAGGED' : 'CLEAN'}
              </span>
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background radial blurs */}
      <div className="glow-spot bg-accent-blue left-[-15%] top-[40%] w-[500px] h-[500px]" />
      <div className="glow-spot bg-accent-purple right-[-10%] bottom-[10%] w-[450px] h-[450px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Featured Work"
          title="Building Real-World Full Stack Solutions"
          subtitle="Explore some of my core projects, featuring full-stack development, interactive dashboards, and security modules."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard
                glowColor={project.glowColor}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                className={`flex flex-col h-full hover:border-white/20 hover:scale-[1.01] transition-all duration-300 ${
                  activeProject === project.id ? 'border-accent-blue/40 shadow-2xl' : 'border-white/5'
                }`}
              >
                {/* Tech Widget Mockup Preview */}
                <div className="relative mb-6 rounded-xl overflow-hidden group">
                  {project.mockup}
                  {/* Subtle hover icon overlay */}
                  <div className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white flex items-center gap-1.5 text-xs font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      Interact with Demo
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col items-start text-left">
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Feature Bullets */}
                  <ul className="text-left w-full space-y-2 mb-6 border-t border-white/5 pt-4">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[11px] text-text-muted font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-3 w-full border-t border-white/5 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-xs text-white font-bold hover:shadow-lg hover:shadow-accent-blue/10 transition-all"
                      onClick={(e) => {
                        // Let users click the demo link if they want
                        if (project.demoUrl.startsWith('#')) {
                          e.preventDefault()
                          setActiveProject(activeProject === project.id ? null : project.id)
                        } else {
                          e.stopPropagation()
                        }
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
