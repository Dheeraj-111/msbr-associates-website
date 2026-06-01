import { motion } from 'framer-motion'
import { CalendarClock } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { COMPLIANCE } from '../data/compliance'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function ComplianceCalendar() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[130px]" />
      <div className="container-xl relative">
        <SectionHeading
          light
          eyebrow="Stay Compliant"
          title="Compliance Calendar"
          subtitle="Never miss a statutory deadline — key recurring due dates at a glance."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          {/* timeline line
          <span className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:block" /> */}

          <div className="grid gap-5 md:grid-cols-2">
            {COMPLIANCE.map((c) => (
              <motion.div
                key={c.code}
                variants={fadeUp}
                className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-gold/40"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                  <CalendarClock size={20} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-white">{c.code}</h3>
                    <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-gold">
                      {c.frequency}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-white/80">{c.title}</p>
                  <p className="mt-2 text-xs text-white/55">{c.description}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-gold">
                    Due: {c.due}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
