import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { QUALIFICATIONS } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Qualifications() {
  return (
    <section id="qualifications" className="section-container py-20 sm:py-28">
      <SectionHeading
        label="Qualifications"
        title="Professional certificates"
        description="Additional credentials beyond the engineering degree."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {QUALIFICATIONS.map((cert, index) => (
          <motion.div
            key={`${cert.issuer}-${cert.title}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="glass-card flex gap-3 rounded-xl p-4 transition-colors hover:border-[var(--accent)]/30"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
              <Award className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">{cert.title}</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{cert.issuer}</p>
              <p className="mt-1 text-xs text-[var(--accent)]">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
