import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface Props {
  onComplete: () => void
}

export default function Preloader({ onComplete }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)
  const graphRef = useRef<SVGPolylineElement>(null)
  const barsRef = useRef<SVGGElement>(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ring = ringRef.current
    const graph = graphRef.current

    if (ring) {
      const len = ring.getTotalLength()
      gsap.set(ring, { strokeDasharray: len, strokeDashoffset: len })
    }
    if (graph) {
      const len = graph.getTotalLength()
      gsap.set(graph, { strokeDasharray: len, strokeDashoffset: len })
    }

    const counter = { v: 0 }
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        gsap.to(root.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete,
        })
      },
    })

    if (prefersReduced) {
      setPercent(100)
      tl.to({}, { duration: 0.4 })
      return () => {
        tl.kill()
      }
    }

    tl.from('.pl-logo', { scale: 0.6, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' })
      .to(ring, { strokeDashoffset: 0, duration: 1.1, ease: 'power1.inOut' }, '-=0.2')
      .to(graph, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out' }, '-=0.7')
      .from(
        barsRef.current?.children ? Array.from(barsRef.current.children) : [],
        { scaleY: 0, transformOrigin: 'bottom', duration: 0.5, stagger: 0.1 },
        '-=0.6',
      )
      .from('.pl-text', { y: 16, opacity: 0, duration: 0.5 }, '-=0.4')

    tl.to(
      counter,
      {
        v: 100,
        duration: 2.1,
        ease: 'power1.inOut',
        onUpdate: () => setPercent(Math.round(counter.v)),
      },
      0,
    )

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
      aria-label="Loading"
      role="status"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="pl-logo relative">
        <svg width="180" height="180" viewBox="0 0 200 200">
          <circle
            ref={ringRef}
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="1" />

          {/* growing financial graph */}
          <polyline
            ref={graphRef}
            points="56,128 82,100 104,114 144,68"
            fill="none"
            stroke="#E6C75A"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="130,68 144,68 144,82"
            fill="none"
            stroke="#E6C75A"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* bars */}
          <g ref={barsRef}>
            <rect x="60" y="132" width="9" height="18" rx="2" fill="#D4AF37" opacity="0.85" />
            <rect x="80" y="124" width="9" height="26" rx="2" fill="#D4AF37" opacity="0.85" />
            <rect x="100" y="118" width="9" height="32" rx="2" fill="#D4AF37" opacity="0.85" />
            <rect x="120" y="108" width="9" height="42" rx="2" fill="#D4AF37" opacity="0.85" />
          </g>
        </svg>
      </div>

      <div className="pl-text mt-6 text-center">
        <div className="font-serif text-2xl font-bold tracking-wide text-white">
          <span className="text-gradient-gold">MSBR</span> &amp; Associates LLP
        </div>
        <p className="mt-2 text-sm text-white/60">Preparing Financial Excellence…</p>
      </div>

      {/* progress */}
      <div className="pl-text mt-8 w-56">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-[width] duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-2 text-right text-xs font-semibold tabular-nums text-gold">{percent}%</div>
      </div>
    </div>
  )
}
