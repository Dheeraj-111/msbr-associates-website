import { motion } from 'framer-motion'

const float = (delay: number, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' as const, delay },
})

/**
 * Lightweight, fully vector hero illustration:
 * laptop + financial dashboard, growing graph, and floating
 * Audit / GST / Tax / Compliance badges.
 */
export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <svg viewBox="0 0 560 460" className="w-full" role="img" aria-label="Financial dashboard illustration">
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0E2F57" />
            <stop offset="1" stopColor="#071B36" />
          </linearGradient>
          <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#B8941F" />
            <stop offset="1" stopColor="#E6C75A" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#E6C75A" />
          </linearGradient>
        </defs>

        {/* soft background blob */}
        <ellipse cx="290" cy="380" rx="220" ry="26" fill="#071B36" opacity="0.06" />

        {/* dotted orbit accents */}
        <circle cx="290" cy="220" r="200" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 10" opacity="0.4" />

        {/* laptop */}
        <g>
          <rect x="120" y="120" width="320" height="210" rx="14" fill="url(#screenGrad)" stroke="#D4AF37" strokeWidth="2" />
          <rect x="138" y="138" width="284" height="174" rx="8" fill="#0A2545" />

          {/* dashboard header */}
          <rect x="154" y="152" width="120" height="10" rx="5" fill="#D4AF37" opacity="0.85" />
          <rect x="154" y="170" width="70" height="7" rx="3.5" fill="#ffffff" opacity="0.25" />
          <circle cx="402" cy="160" r="8" fill="#D4AF37" opacity="0.85" />

          {/* animated line chart */}
          <motion.polyline
            points="158,250 200,222 238,236 280,200 322,212 366,174 406,186"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
          />
          {/* area under line */}
          <motion.path
            d="M158,250 200,222 238,236 280,200 322,212 366,174 406,186 V300 H158 Z"
            fill="#D4AF37"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1, delay: 1.4 }}
          />

          {/* bars */}
          {[
            { x: 168, h: 26 },
            { x: 196, h: 40 },
            { x: 224, h: 32 },
            { x: 252, h: 52 },
          ].map((b, i) => (
            <motion.rect
              key={b.x}
              x={b.x}
              width="14"
              rx="3"
              fill="url(#barGrad)"
              initial={{ height: 0, y: 300 }}
              animate={{ height: b.h, y: 300 - b.h }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.12, ease: 'backOut' }}
            />
          ))}
        </g>

        {/* laptop base */}
        <path d="M96 330 H464 L484 358 H76 Z" fill="#0E2F57" stroke="#D4AF37" strokeWidth="2" />
        <rect x="236" y="330" width="88" height="6" rx="3" fill="#071B36" />
      </svg>

      {/* floating glass badges */}
      <motion.div
        {...float(0)}
        className="absolute -left-2 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card sm:-left-6"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3Z" strokeLinejoin="round" />
            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <div className="text-xs font-bold text-navy">Audit Shield</div>
          <div className="text-[10px] text-navy/50">Assurance</div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.1)}
        className="absolute -right-1 top-2 flex items-center gap-2 rounded-2xl bg-navy px-4 py-3 shadow-card sm:-right-4"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold font-bold text-navy">₹</span>
        <div>
          <div className="text-xs font-bold text-white">Tax</div>
          <div className="text-[10px] text-white/50">Planning</div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.8)}
        className="absolute -right-2 bottom-16 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card sm:right-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-xs font-bold text-gold-dark">
          GST
        </span>
        <div>
          <div className="text-xs font-bold text-navy">GST Filing</div>
          <div className="text-[10px] text-navy/50">Compliant</div>
        </div>
      </motion.div>

      <motion.div
        {...float(0.6)}
        className="absolute -left-2 bottom-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card sm:left-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <div className="text-xs font-bold text-navy">Compliance</div>
          <div className="text-[10px] text-navy/50">On-time</div>
        </div>
      </motion.div>
    </div>
  )
}
