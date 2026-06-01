import { motion } from 'framer-motion'
import { CalendarCheck, Users, Award, UserCog, MapPin } from 'lucide-react'
import Counter from './ui/Counter'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const STATS = [
  { icon: CalendarCheck, to: 2018, suffix: '', label: 'Year Established', format: false },
  { icon: Users, to: 2500, suffix: '+', label: 'Client Engagements', format: true },
  { icon: Award, to: 5, suffix: '', label: 'CA Partners', format: true },
  { icon: UserCog, to: 15, suffix: '+', label: 'Professional Staff', format: true },
  { icon: MapPin, to: 3, suffix: '', label: 'Office Locations', format: true },
]

export default function TrustStats() {
  return (
    <section className="relative -mt-2 bg-white pb-4">
      <div className="container-xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 rounded-3xl border border-navy/5 bg-cream/60 p-6 shadow-card sm:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:p-8"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                <s.icon size={22} />
              </span>
              <div className="text-3xl font-bold text-navy sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} format={s.format} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-navy/55 sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
