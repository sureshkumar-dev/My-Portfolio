import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'
import Magnetic from '../components/Magnetic'
import confetti from 'canvas-confetti'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setIsSubmitting(false)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Trigger premium celebration confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#8B5CF6', '#FFFFFF'],
      })
    } catch {
      setIsSubmitting(false)
      setStatus('error')
    }
  }
  

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background ambient spot */}
      <div className="glow-spot bg-accent-blue right-[10%] top-[40%] w-[380px] h-[380px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something Amazing Together"
          subtitle="Feel free to reach out for project collaboration, job openings, or just to say hello."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          {/* Left Column: Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white text-left mb-6">
              Connect Channels
            </h3>
            
            <div className="space-y-4">
              {/* Email Card */}
              <GlassCard
                glowColor="rgba(59, 130, 246, 0.08)"
                className="p-5 flex items-center gap-4 hover:border-accent-blue/30 transition-colors border-white/5"
              >
                <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Direct Email</span>
                  <a onClick={()=>{window.open(
  "https://mail.google.com/mail/?view=cm&fs=1&to=sureshpackirisamy05@gmail.com",
  "_blank"
)}}
                    href="mailto:sureshpackirisamy05@gmail.com"
                    className="block text-sm md:text-base font-semibold text-white hover:text-accent-blue transition-colors font-mono"
                  >
                    sureshpackirisamy05@gmail.com
                  </a>
                </div>
              </GlassCard>

              {/* GitHub Card */}
              <GlassCard
                glowColor="rgba(255, 255, 255, 0.05)"
                className="p-5 flex items-center gap-4 hover:border-white/20 transition-colors border-white/5"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Repository Port</span>
                  <a
                    href="https://github.com/sureshkumar-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm md:text-base font-semibold text-white hover:text-accent-blue transition-colors font-mono"
                  >
                    github.com/sureshkumar-dev
                  </a>
                </div>
              </GlassCard>

              {/* LinkedIn Card */}
              <GlassCard
                glowColor="rgba(139, 92, 246, 0.08)"
                className="p-5 flex items-center gap-4 hover:border-accent-purple/30 transition-colors border-white/5"
              >
                <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-accent-purple flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Professional Network</span>
                  <a
                    href="https://www.linkedin.com/in/sureshkumar-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm md:text-base font-semibold text-white hover:text-accent-blue transition-colors font-mono"
                  >
                    linkedin.com/in/sureshkumar-dev
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard
              glowColor="rgba(139, 92, 246, 0.08)"
              className="p-8 border-white/5 hover:border-white/10 transition-all"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16]/80 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16]/80 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16]/80 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Message sent successfully! Confetti launched.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred. Please try emailing directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <Magnetic>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-xs tracking-widest uppercase shadow-lg shadow-accent-blue/20 hover:shadow-accent-purple/30 transition-all border border-white/5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
