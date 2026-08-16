import { motion } from 'framer-motion'
import { Layout, Server, Database, Code2, Wrench } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

interface Skill {
  name: string
  color: string // Glow color
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5 text-accent-blue" />,
    skills: [
      { name: 'JavaScript', color: 'rgba(247, 223, 30, 0.15)' },
      { name: 'TypeScript', color: 'rgba(49, 120, 198, 0.15)' },
      { name: 'SQL', color: 'rgba(51, 102, 153, 0.15)' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    icon: <Layout className="w-5 h-5 text-accent-purple" />,
    skills: [
      { name: 'React.js', color: 'rgba(97, 218, 251, 0.15)' },
      { name: 'Tailwind CSS', color: 'rgba(56, 189, 248, 0.15)' },
      { name: 'HTML5', color: 'rgba(227, 76, 38, 0.15)' },
      { name: 'CSS3', color: 'rgba(38, 77, 228, 0.15)' },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5 text-accent-blue" />,
    skills: [
      { name: 'Node.js', color: 'rgba(104, 159, 99, 0.15)' },
      { name: 'Express.js', color: 'rgba(255, 255, 255, 0.12)' },
    ],
  },
  {
    title: 'Database',
    icon: <Database className="w-5 h-5 text-accent-purple" />,
    skills: [
      { name: 'MongoDB', color: 'rgba(71, 162, 72, 0.15)' },
      { name: 'Mongoose ODM', color: 'rgba(141, 0, 0, 0.15)' },
      { name: 'MySQL', color: 'rgba(0, 117, 143, 0.15)' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench className="w-5 h-5 text-accent-blue" />,
    skills: [
      { name: 'Git', color: 'rgba(240, 80, 50, 0.15)' },
      { name: 'GitHub', color: 'rgba(255, 255, 255, 0.12)' },
      { name: 'Postman', color: 'rgba(255, 108, 54, 0.15)' },
      { name: 'Vercel', color: 'rgba(255, 255, 255, 0.15)' },
    ],
  },
]

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  } as const


  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background blurs */}
      <div className="glow-spot bg-accent-blue right-[-10%] top-[20%] w-[400px] h-[400px]" />
      <div className="glow-spot bg-accent-purple left-[-10%] bottom-[10%] w-[350px] h-[350px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Tech Stack"
          title="Engineered With Modern Technologies"
          subtitle="A curated stack of frameworks, languages, and developer tools designed to build high-performance applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <GlassCard
                glowColor="rgba(59, 130, 246, 0.06)"
                className="h-full flex flex-col p-6 hover:border-accent-blue/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <GlassCard
                      key={sIdx}
                      glowColor={skill.color}
                      className="p-3.5 flex items-center justify-center text-center rounded-xl bg-white/3 border-white/5 hover:border-white/20 transition-all"
                    >
                      <span className="text-xs md:text-sm font-semibold tracking-wide text-white/90">
                        {skill.name}
                      </span>
                    </GlassCard>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Grid Line Footer */}
        <div className="w-full flex justify-center mt-20">
          <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}
