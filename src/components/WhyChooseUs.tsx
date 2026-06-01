import { motion } from 'framer-motion'
import { Award, Layers, HeartHandshake, Clock, ShieldCheck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const REASONS = [
  {
    icon: Award,
    title: 'Expert Professionals',
    desc: 'Qualified CA experts with deep domain knowledge across finance and law.',
  },
  {
    icon: Layers,
    title: 'One Stop Solution',
    desc: 'All professional services delivered seamlessly under one roof.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Focused',
    desc: 'Personalised solutions tailored to each business and its goals.',
  },
  {
    icon: Clock,
    title: 'Timely Compliance',
    desc: 'On-time filing and reliable compliance assurance, every cycle.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Trust',
    desc: 'Transparent, reliable and ethical practice you can depend on.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Businesses Trust Us"
          title="Built on Expertise & Integrity"
          subtitle="Five reasons leading businesses across India choose M S B R & Associates as their financial partner."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-navy/5 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(7,27,54,0.4)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <r.icon size={26} />
              </span>
              <h3 className="text-base font-bold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
