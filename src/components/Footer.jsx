import { SITE } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center text-xs text-[var(--text-secondary)] sm:flex-row sm:text-left">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p>Built with React · Vite · Tailwind · Framer Motion</p>
      </div>
    </footer>
  )
}
