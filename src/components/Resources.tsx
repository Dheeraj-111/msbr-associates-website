import { motion } from 'framer-motion'
import { Newspaper, ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { RESOURCES } from '../data/resources'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Resources() {
  return (
    <section id="resources" className="bg-cream py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Resources"
          title="Latest Updates & Insights"
          subtitle="Stay informed with the latest in GST, Income Tax and corporate compliance."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {RESOURCES.map((cat) => (
            <motion.article
              key={cat.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-[0_14px_40px_-26px_rgba(7,27,54,0.5)]"
            >
              <div className="flex items-center justify-between border-b border-navy/5 bg-navy px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-navy">
                    <Newspaper size={20} />
                  </span>
                  <h3 className="text-base font-bold text-white">{cat.category}</h3>
                </div>
                <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold">
                  {cat.accent}
                </span>
              </div>

              <ul className="flex flex-1 flex-col divide-y divide-navy/5 px-6">
                {cat.updates.map((u) => (
                  <li key={u.title} className="group flex gap-3 py-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/45">
                        {u.date}
                      </span>
                      <p className="text-sm leading-snug text-navy/75 transition-colors group-hover:text-navy">
                        {u.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                  Read updates <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
