import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { SERVICES } from '../data/services'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { SITE } from '../data/site'

export default function Services() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-gold/10 blur-[140px]" />
      <div className="container-xl relative">
        <SectionHeading
          light
          eyebrow="Our Services"
          title="Comprehensive Financial & Advisory Solutions"
          subtitle="A full suite of professional services to help your business stay compliant and grow sustainably."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const isOpen = open === i
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                onMouseEnter={() => setOpen(i)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/40 bg-white/[0.07] shadow-glow'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                }`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                      isOpen ? 'bg-gold text-navy' : 'bg-white/10 text-gold'
                    }`}
                  >
                    <Icon size={26} />
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gold"
                  >
                    <Plus size={16} />
                  </motion.span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.summary}</p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 grid gap-2 border-t border-white/10 pt-5">
                        {service.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        Learn More <ArrowUpRight size={16} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold/20 bg-white/[0.04] p-7 sm:flex-row"
        >
          <div>
            <h3 className="text-lg font-bold text-white">Need a customized solution for your business?</h3>
            <p className="text-sm text-white/60">Talk to our experts today.</p>
          </div>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-glow"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
