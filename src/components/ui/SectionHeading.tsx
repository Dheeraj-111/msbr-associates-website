import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'

interface Props {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  light?: boolean
  align?: 'center' | 'left'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-navy/60'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
