import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, MapPin } from 'lucide-react'
import { EXPERIENCE } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Hands-on industrial training"
          description="Real factory environments, real engineering challenges."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--border)] to-transparent sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCE.map((job, index) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-12"
              >
                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--surface)] sm:flex">
                  <Briefcase className="h-4 w-4 text-[var(--accent)]" />
                </div>

                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <p className="mt-1 text-sm text-[var(--accent)]">
                        {job.role} · {job.department}
                      </p>
                    </div>
                    <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                      {job.period}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)]">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-[var(--accent)]"
                    >
                      Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
