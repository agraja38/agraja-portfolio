import { motion } from 'framer-motion'
import { Camera, Code, Heart, Music, Users, Waves } from 'lucide-react'
import { INTERESTS, VOLUNTEERING } from '../data/content'
import SectionHeading from './SectionHeading'

const interestIcons = {
  Programming: Code,
  Photography: Camera,
  Swimming: Waves,
}

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          label="Beyond work"
          title="Volunteering & interests"
          description="Community involvement and personal pursuits outside the factory floor."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Volunteering</h3>
            </div>
            <ul className="space-y-3">
              {VOLUNTEERING.map((item) => (
                <li
                  key={item.org}
                  className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm">{item.org}</span>
                  <span className="shrink-0 text-xs text-[var(--text-secondary)]">{item.period}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Heart className="h-4 w-4 text-[var(--accent)]" />
              <h3 className="font-semibold">Interests</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {INTERESTS.map((interest) => {
                const Icon = interestIcons[interest] || Music
                return (
                  <div
                    key={interest}
                    className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-white/5 p-4 text-center"
                  >
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm font-medium">{interest}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
