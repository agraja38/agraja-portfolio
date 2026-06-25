import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-12"
    >
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
