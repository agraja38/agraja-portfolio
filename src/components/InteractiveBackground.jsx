import { useEffect, useRef } from 'react'

const PARTICLE_COUNT_DESKTOP = 140
const PARTICLE_COUNT_MOBILE = 65

function createParticles(count, width, height) {
  return Array.from({ length: count }, (_, i) => {
    const isStar = i % 3 !== 0
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: isStar ? Math.random() * 0.7 + 0.25 : Math.random() * 1.4 + 0.6,
      vx: (Math.random() - 0.5) * (isStar ? 0.22 : 0.14),
      vy: (Math.random() - 0.5) * (isStar ? 0.22 : 0.14),
      alpha: isStar ? Math.random() * 0.45 + 0.25 : Math.random() * 0.4 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.002 + 0.0008,
      isStar,
    }
  })
}

export default function InteractiveBackground() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.5, smoothX: 0.5, smoothY: 0.5 })
  const particles = useRef([])
  const rafId = useRef(0)
  const time = useRef(0)
  const state = useRef({
    reducedMotion: false,
    isDark: true,
    isMobile: false,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const readState = () => {
      state.current.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      state.current.isDark = document.documentElement.classList.contains('dark')
      state.current.isMobile = window.matchMedia('(max-width: 768px)').matches
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { innerWidth: w, innerHeight: h } = window
      state.current.width = w
      state.current.height = h
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = state.current.isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
      particles.current = createParticles(count, w, h)
    }

    const onPointerMove = (e) => {
      if (state.current.isMobile) return
      mouse.current.x = e.clientX / window.innerWidth
      mouse.current.y = e.clientY / window.innerHeight
    }

    const drawGrid = (w, h, isDark) => {
      const spacing = 48
      ctx.strokeStyle = isDark ? 'rgba(96, 165, 250, 0.04)' : 'rgba(59, 130, 246, 0.035)'
      ctx.lineWidth = 1

      const offsetX = (mouse.current.smoothX * 12) % spacing
      const offsetY = (mouse.current.smoothY * 12) % spacing

      for (let x = -spacing; x < w + spacing; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x + offsetX, 0)
        ctx.lineTo(x + offsetX, h)
        ctx.stroke()
      }
      for (let y = -spacing; y < h + spacing; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y + offsetY)
        ctx.lineTo(w, y + offsetY)
        ctx.stroke()
      }
    }

    const drawSpotlight = (w, h, isDark) => {
      const cx = mouse.current.smoothX * w
      const cy = mouse.current.smoothY * h
      const radius = Math.max(w, h) * (isDark ? 0.42 : 0.35)

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
      if (isDark) {
        gradient.addColorStop(0, 'rgba(96, 165, 250, 0.14)')
        gradient.addColorStop(0.35, 'rgba(139, 92, 246, 0.06)')
        gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.03)')
        gradient.addColorStop(1, 'rgba(10, 10, 15, 0)')
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)')
        gradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.04)')
        gradient.addColorStop(1, 'rgba(248, 249, 252, 0)')
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)
    }

    const drawParticles = (w, h, isDark, dt, reduced) => {
      const list = particles.current
      const baseColor = isDark ? '147, 197, 253' : '37, 99, 235'
      const accentColor = isDark ? '196, 181, 253' : '79, 70, 229'
      const lightBoost = isDark ? 1 : 1.15

      for (const p of list) {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          p.pulse += dt * p.pulseSpeed

          if (p.x < -4) p.x = w + 4
          if (p.x > w + 4) p.x = -4
          if (p.y < -4) p.y = h + 4
          if (p.y > h + 4) p.y = -4

          const dx = mouse.current.smoothX * w - p.x
          const dy = mouse.current.smoothY * h - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const pullRadius = p.isStar ? 220 : 180
          if (dist < pullRadius && dist > 0) {
            const strength = p.isStar ? 0.1 : 0.07
            p.x += (dx / dist) * strength
            p.y += (dy / dist) * strength
          }
        }

        const flicker = reduced ? 1 : 0.55 + Math.sin(p.pulse) * 0.45
        const color = p.isStar && Math.sin(p.pulse * 1.3) > 0.6 ? accentColor : baseColor
        const opacity = Math.min(p.alpha * flicker * lightBoost, isDark ? 0.85 : 0.72)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${opacity})`
        ctx.fill()

        if (p.isStar && !reduced) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color}, ${opacity * (isDark ? 0.18 : 0.12)})`
          ctx.fill()
        }
      }
    }

    const drawNoise = (w, h, isDark) => {
      const count = isDark ? 40 : 55
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.012)' : 'rgba(37, 99, 235, 0.04)'
      for (let i = 0; i < count; i++) {
        const x = (Math.sin(i * 12.9898 + time.current * 0.0002) * 0.5 + 0.5) * w
        const y = (Math.cos(i * 78.233 + time.current * 0.00015) * 0.5 + 0.5) * h
        ctx.fillRect(x, y, 1, 1)
      }
    }

    let last = performance.now()

    const animate = (now) => {
      const { width: w, height: h } = state.current
      const { reducedMotion, isDark, isMobile } = state.current
      const dt = now - last
      last = now
      time.current = now

      if (isMobile && !reducedMotion) {
        mouse.current.x = 0.5 + Math.sin(now * 0.0004) * 0.22
        mouse.current.y = 0.5 + Math.cos(now * 0.00035) * 0.18
      }

      const lerp = reducedMotion ? 1 : 0.06
      mouse.current.smoothX += (mouse.current.x - mouse.current.smoothX) * lerp
      mouse.current.smoothY += (mouse.current.y - mouse.current.smoothY) * lerp

      container.style.setProperty('--mx', `${mouse.current.smoothX * 100}%`)
      container.style.setProperty('--my', `${mouse.current.smoothY * 100}%`)

      ctx.clearRect(0, 0, w, h)
      drawSpotlight(w, h, isDark)
      drawGrid(w, h, isDark)
      drawParticles(w, h, isDark, dt, reducedMotion)
      if (!reducedMotion) drawNoise(w, h, isDark)

      rafId.current = requestAnimationFrame(animate)
    }

    readState()
    resize()

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const themeObserver = new MutationObserver(readState)

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    motionQuery.addEventListener('change', readState)
    mobileQuery.addEventListener('change', () => {
      readState()
      resize()
    })

    rafId.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      motionQuery.removeEventListener('change', readState)
      mobileQuery.removeEventListener('change', resize)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="interactive-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      style={{ '--mx': '50%', '--my': '50%' }}
    >
      <div className="interactive-bg__base absolute inset-0" />

      <div className="interactive-bg__blob interactive-bg__blob--1" />
      <div className="interactive-bg__blob interactive-bg__blob--2" />
      <div className="interactive-bg__blob interactive-bg__blob--3" />

      <div
        className="interactive-bg__radial absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at var(--mx) var(--my), var(--bg-glow), transparent 65%)`,
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
