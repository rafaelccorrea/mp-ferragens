import { useEffect, useRef } from 'react'

/**
 * Fundo animado do hero: faíscas de solda saindo de um ponto à direita,
 * com brilho pulsante. Leve (canvas 2D), respeita prefers-reduced-motion.
 */
function SparksCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    const sparks = []
    let origin = { x: 0, y: 0 }
    let t = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const mobile = w < 760
      origin = { x: mobile ? w * 0.78 : w * 0.72, y: mobile ? h * 0.3 : h * 0.52 }
    }

    const spawn = (n) => {
      for (let i = 0; i < n; i++) {
        const ang = -Math.PI * 0.15 + (Math.random() - 0.5) * Math.PI * 1.1
        const sp = 2.5 + Math.random() * 6
        sparks.push({
          x: origin.x,
          y: origin.y,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp - 2,
          life: 1,
          decay: 0.008 + Math.random() * 0.02,
          size: 0.8 + Math.random() * 1.6,
          hue: 20 + Math.random() * 25,
        })
      }
    }

    const drawGlow = () => {
      const pulse = 0.75 + Math.sin(t * 0.25) * 0.25
      const r = 140 * pulse
      const g = ctx.createRadialGradient(origin.x, origin.y, 0, origin.x, origin.y, r)
      g.addColorStop(0, 'rgba(255,230,180,0.9)')
      g.addColorStop(0.08, 'rgba(255,170,60,0.55)')
      g.addColorStop(0.35, 'rgba(255,120,20,0.14)')
      g.addColorStop(1, 'rgba(255,120,20,0)')
      ctx.fillStyle = g
      ctx.fillRect(origin.x - r, origin.y - r, r * 2, r * 2)
    }

    const frame = () => {
      t += 1
      ctx.clearRect(0, 0, w, h)
      drawGlow()

      if (!reduce) {
        const burst = Math.random() < 0.08 ? 18 : 0
        spawn(3 + burst)
      }

      ctx.globalCompositeOperation = 'lighter'
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.16
        s.vx *= 0.985
        s.life -= s.decay
        if (s.life <= 0 || s.y > h + 20) {
          sparks.splice(i, 1)
          continue
        }
        const a = Math.max(0, s.life)
        ctx.strokeStyle = `hsla(${s.hue}, 100%, ${55 + a * 35}%, ${a})`
        ctx.lineWidth = s.size
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * 2.2, s.y - s.vy * 2.2)
        ctx.stroke()
      }
      ctx.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="hero-sparks" aria-hidden="true" />
}

export default SparksCanvas
