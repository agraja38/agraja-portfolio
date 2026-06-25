import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, User } from 'lucide-react'
import { SITE } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20 pb-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -10%, var(--accent-muted), transparent 65%)`,
          opacity: 0.45,
        }}
      />

      <div className="section-container relative grid items-center gap-12 py-12 sm:gap-14 sm:py-16 lg:grid-cols-[1.1fr_auto] lg:gap-16 lg:py-20">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 text-sm font-medium text-[var(--accent)]"
          >
            {SITE.location}
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 text-lg font-medium text-[var(--text-secondary)] sm:text-xl"
          >
            {SITE.title}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-2.5 sm:gap-3"
          >
            <button type="button" onClick={() => scrollTo('about')} className="btn-primary">
              <User className="h-4 w-4" />
              About Me
            </button>
            <button type="button" onClick={() => scrollTo('experience')} className="btn-secondary">
              Experience
            </button>
            <a href={SITE.cvPath} download className="btn-secondary">
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto lg:mx-0"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[var(--accent)]/10 blur-2xl" />
            <div className="glass-card relative h-56 w-56 overflow-hidden rounded-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Agraja Wijayawardane"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent)]/10 text-3xl font-semibold text-[var(--accent)]">
                  AW
                </div>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  Add your photo as{' '}
                  <code className="rounded bg-black/10 px-1 py-0.5 text-[10px] dark:bg-white/10">
                    public/profile.jpg
                  </code>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to about section"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  )
}
