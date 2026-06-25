import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { SITE } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section-container py-20 sm:py-28">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Reach out for opportunities, collaborations, or engineering conversations."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-10"
      >
        <p className="text-lg font-medium">{SITE.name}</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{SITE.title}</p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
          <MapPin className="h-4 w-4" />
          {SITE.location}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
          <a href={SITE.cvPath} download className="btn-secondary">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="btn-secondary !px-4"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            aria-label="LinkedIn profile"
            className="btn-secondary !px-4 opacity-60"
            onClick={(e) => {
              if (SITE.linkedin === '#') e.preventDefault()
            }}
            title={SITE.linkedin === '#' ? 'LinkedIn link coming soon' : 'LinkedIn'}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {SITE.linkedin === '#' && (
          <p className="mt-4 text-xs text-[var(--text-secondary)]">
            Update your LinkedIn URL in <code className="text-[var(--accent)]">src/data/content.js</code>
          </p>
        )}
      </motion.div>
    </section>
  )
}
