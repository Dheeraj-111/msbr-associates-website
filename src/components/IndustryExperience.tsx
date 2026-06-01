import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Counter from './ui/Counter'
import { INDUSTRIES, ENGAGEMENT_STATS } from '../data/industries'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function IndustryExperience() {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section id="experience" className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Industry Experience"
            title="Experience Across Industries"
            subtitle="We have successfully served organisations across multiple industries."
          />
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:bg-navy hover:text-gold"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:bg-navy hover:text-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* horizontal scroller */}
        <div
          ref={scroller}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex min-w-[180px] snap-start flex-col items-center justify-center rounded-2xl border border-navy/5 bg-cream/50 p-7 text-center transition-colors hover:border-gold/40 sm:min-w-[200px]"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <ind.icon size={30} />
              </span>
              <span className="text-sm font-bold text-navy">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        {/* key engagements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-navy">Our Key Engagements</h3>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {ENGAGEMENT_STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-2xl border border-navy/5 bg-white p-6 text-center shadow-[0_10px_30px_-22px_rgba(7,27,54,0.5)]"
            >
              <div className="text-3xl font-bold text-gradient-gold sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
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
