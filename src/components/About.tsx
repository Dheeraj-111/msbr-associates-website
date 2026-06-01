import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { slideLeft, slideRight, fadeUp, stagger, viewportOnce } from '../lib/motion'

const HIGHLIGHTS = [
  'LLP Established in 2018',
  '5 Chartered Accountant Partners',
  '15+ Professional Staff',
  '2500+ Client Engagements',
  'Multi-City Presence',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Who We Are"
          title={
            <>
              About <span className="text-gradient-gold">M S B R &amp; Associates LLP</span>
            </>
          }
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* illustration */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-card">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-2xl" />
              <svg viewBox="0 0 400 300" className="w-full" role="img" aria-label="Advisory team">
                <defs>
                  <linearGradient id="aboutBar" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#B8941F" />
                    <stop offset="1" stopColor="#E6C75A" />
                  </linearGradient>
                </defs>
                <rect x="30" y="40" width="340" height="220" rx="16" fill="#0A2545" stroke="#D4AF37" strokeWidth="1.5" />
                <rect x="52" y="64" width="120" height="12" rx="6" fill="#D4AF37" />
                <rect x="52" y="86" width="200" height="8" rx="4" fill="#ffffff" opacity="0.2" />
                {[
                  { x: 64, h: 60 },
                  { x: 104, h: 96 },
                  { x: 144, h: 78 },
                  { x: 184, h: 120 },
                  { x: 224, h: 100 },
                  { x: 264, h: 150 },
                ].map((b, i) => (
                  <motion.rect
                    key={b.x}
                    x={b.x}
                    width="26"
                    rx="5"
                    fill="url(#aboutBar)"
                    initial={{ height: 0, y: 236 }}
                    whileInView={{ height: b.h, y: 236 - b.h }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: 'backOut' }}
                  />
                ))}
                <motion.path
                  d="M64 200 104 150 144 168 184 120 224 138 264 92 310 70"
                  fill="none"
                  stroke="#E6C75A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.4 }}
                />
              </svg>
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-gold px-5 py-3 shadow-card">
              <div className="text-2xl font-bold leading-none text-navy">July 2018</div>
              <div className="text-xs font-medium text-navy/70">Firm Established</div>
            </div>
          </motion.div>

          {/* content */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <p className="text-base leading-relaxed text-navy/70">
              Established in July 2018, M S B R &amp; ASSOCIATES LLP is a Chartered Accountancy firm
              committed to excellence in Audit, Assurance, GST, Income Tax, Corporate Law and Business
              Advisory Services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              The firm is led by five Chartered Accountants and supported by a professional team serving
              businesses across multiple industries.
            </p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {HIGHLIGHTS.map((h) => (
                <motion.li
                  key={h}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-navy/5 bg-cream/60 px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-navy">{h}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
