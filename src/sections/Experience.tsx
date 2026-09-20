import { motion } from 'framer-motion'
import { Briefcase, Calendar, Building2, CheckCircle2, Database, Code2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  icon: React.ReactNode
  accentColor: string
  glowColor: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  responsibilities: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 'alchem-digital',
    role: 'Full-Stack Developer Trainee',
    company: 'Alchem Digital',
    period: 'Jun 2026 – Aug 2026',
    type: 'Traineeship',
    icon: <Code2 className="w-5 h-5 text-accent-blue" />,
    accentColor: 'text-accent-blue',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    badgeBg: 'bg-accent-blue/10',
    badgeBorder: 'border-accent-blue/30',
    badgeText: 'text-accent-blue',
    responsibilities: [
      'Developed and tested full-stack web application features using React.js, TypeScript, Node.js, Express.js, and MongoDB as part of a structured MERN development program.',
      'Built and integrated REST APIs with React.js frontend components, implementing JWT authentication, protected routes, and role-based access control.',
    ],
    skills: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'RBAC'],
  },
  {
    id: 'hitakey-infosys',
    role: 'Data Analyst Intern',
    company: 'Hitakey Infosys',
    period: 'Aug 2025 – Nov 2025',
    type: 'Internship',
    icon: <Database className="w-5 h-5 text-accent-purple" />,
    accentColor: 'text-accent-purple',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    badgeBg: 'bg-accent-purple/10',
    badgeBorder: 'border-accent-purple/30',
    badgeText: 'text-accent-purple',
    responsibilities: [
      'Queried and analyzed structured data using SQL, MySQL, and MongoDB for reporting, data validation, and database-related tasks.',
      'Worked with relational and NoSQL databases, practicing database design, indexing, and query optimization across MySQL and MongoDB.',
    ],
    skills: ['SQL', 'MySQL', 'MongoDB', 'Database Design', 'Indexing', 'Query Optimization', 'Data Validation', 'Reporting'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Subtle Ambient Glow */}
      <div className="glow-spot bg-accent-blue left-[-5%] top-[25%] w-[400px] h-[400px]" />
      <div className="glow-spot bg-accent-purple right-[-5%] bottom-[20%] w-[400px] h-[400px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Experience"
          title="Professional Journey & Industry Work"
          subtitle="Hands-on experience building full-stack applications, integrating secure APIs, and managing high-performance databases."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring', stiffness: 90 }}
              className="h-full"
            >
              <GlassCard
                glowColor={item.glowColor}
                className="h-full flex flex-col justify-between p-7 md:p-8 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  {/* Top Header with Company, Role & Type Badges */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-white tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-text-muted">
                          <Building2 className="w-3.5 h-3.5 text-text-muted/70" />
                          <span className="font-medium text-white/90">{item.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${item.badgeBg} ${item.badgeBorder} ${item.badgeText}`}
                      >
                        <Briefcase className="w-3 h-3" />
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-text-muted font-mono mb-6">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{item.period}</span>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-3.5 mb-8">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 mt-1 shrink-0 ${item.accentColor}`} />
                        <p className="text-sm text-slate-300 leading-relaxed font-normal">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <div className="text-xs uppercase tracking-wider font-semibold text-text-muted/80 mb-3 font-mono">
                    Technologies & Domains
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
