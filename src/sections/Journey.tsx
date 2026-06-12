import { motion } from 'framer-motion'
import { GraduationCap, Code2, Layers, Briefcase } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  side: 'left' | 'right'
}

const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'Started Computer Science Engineering',
    description: 'Enrolled in B.E. Computer Science and Engineering, building a core foundation in algorithms, data structures, and computing systems.',
    icon: <GraduationCap className="w-5 h-5 text-accent-blue" />,
    side: 'left',
  },
  {
    year: '2023',
    title: 'Started Full Stack Development',
    description: 'Dived headfirst into the Javascript ecosystem, focusing heavily on modern front-end concepts (React, ES6+) and asynchronous backend runtimes.',
    icon: <Code2 className="w-5 h-5 text-accent-purple" />,
    side: 'right',
  },
  {
    year: '2026',
    title: 'Built Multiple Full Stack Projects',
    description: 'Developed crop alert platforms (FarmGuard), secure e-commerce ecosystems (Vendr), and student malpractice detectors using MERN, JWT, and cloud tools.',
    icon: <Layers className="w-5 h-5 text-accent-blue" />,
    side: 'left',
  },
  {
    year: '2026',
    title: 'Graduated & Seeking Opportunities',
    description: 'Graduating as an engineer. Actively looking for a Full Stack Developer role at a top-tier team to build scalable and performant software products.',
    icon: <Briefcase className="w-5 h-5 text-accent-purple" />,
    side: 'right',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background glow ambient */}
      <div className="glow-spot bg-accent-purple left-[20%] top-[40%] w-[380px] h-[380px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="My Journey"
          title="Milestones & Timeline"
          subtitle="A summary of my engineering education, skill acquisition milestones, and professional development path."
        />

        <div className="relative mt-12 md:mt-20">
          {/* Central Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-bg-dark -translate-x-[1px]" />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, idx) => {
              const isLeft = item.side === 'left'

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Left spacer / Card (desktop only) */}
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                      >
                        <GlassCard glowColor="rgba(59, 130, 246, 0.08)" className="hover:border-accent-blue/20">
                          <span className="inline-block px-3 py-1 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-bold font-mono uppercase mb-3">
                            {item.year}
                          </span>
                          <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                          <p className="text-text-muted text-xs md:text-sm leading-relaxed">{item.description}</p>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Node (centered or left-aligned on mobile) */}
                  <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/10 bg-[#0E1322] -translate-x-1/2 z-20 shadow-lg">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="p-3 rounded-full bg-white/5 border border-white/5"
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Right spacer / Card (desktop/mobile) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 text-left">
                    {(!isLeft || window.innerWidth < 768) && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                      >
                        <GlassCard glowColor="rgba(139, 92, 246, 0.08)" className="hover:border-accent-purple/20">
                          <span className="inline-block px-3 py-1 rounded bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-bold font-mono uppercase mb-3">
                            {item.year}
                          </span>
                          <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                          <p className="text-text-muted text-xs md:text-sm leading-relaxed">{item.description}</p>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
