import { motion } from 'framer-motion'
import { SKILLS } from '../data/content'
import SectionHeading from './SectionHeading'

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.03, duration: 0.35 },
  }),
}

function SkillPills({ items, startIndex = 0 }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {items.map((skill, i) => (
        <motion.span
          key={skill}
          custom={startIndex + i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={pillVariants}
          whileHover={{ scale: 1.04, borderColor: 'var(--accent)' }}
          className="glass-card cursor-default rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-container py-20 sm:py-28">
      <SectionHeading
        label="Skills"
        title="Technical & interpersonal"
        description="Tools and strengths built through factory-floor experience."
      />

      <div className="space-y-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
            Technical
          </p>
          <SkillPills items={SKILLS.technical} />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
            Soft Skills
          </p>
          <SkillPills items={SKILLS.soft} startIndex={SKILLS.technical.length} />
        </div>
      </div>
    </section>
  )
}
