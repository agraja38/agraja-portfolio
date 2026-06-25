import { motion } from 'framer-motion'
import { ABOUT } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-container py-20 sm:py-28">
      <SectionHeading
        label="About"
        title="Engineering with purpose"
        description="Practical, motivated, and focused on real industrial problems."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 lg:col-span-3"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {ABOUT.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
