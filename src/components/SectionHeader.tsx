import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-16 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      {/* Small Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-white/10 text-xs font-semibold tracking-wider text-accent-blue uppercase mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
        {badge}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4 max-w-2xl leading-[1.15]"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Futuristic accent underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-6"
      />
    </div>
  )
}
