import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { EDUCATION } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic foundation"
          description="Building engineering fundamentals alongside practical industry exposure."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.qualification}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card group rounded-2xl p-5 transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)]/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{item.institution}</h3>
              <p className="mt-1 text-sm text-[var(--accent)]">{item.qualification}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.level}</p>
              <p className="mt-3 text-xs text-[var(--text-secondary)]">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
