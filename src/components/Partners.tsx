import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { LinkedInIcon } from './ui/icons'
import SectionHeading from './ui/SectionHeading'
import { PARTNERS, type Partner } from '../data/partners'
import { slideLeft, slideRight, fadeUp, viewportOnce } from '../lib/motion'

function initials(name: string) {
  return name
    .replace(/^CA\.?\s*/i, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function PartnerAvatar({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false)
  const showImg = partner.photo && !failed
  return (
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-navy">
      {showImg ? (
        <img
          src={partner.photo}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          width={96}
          height={96}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy">
          <span className="font-serif text-2xl font-bold text-gold">{initials(partner.name)}</span>
        </div>
      )}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/30" />
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="bg-cream py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Partners"
          title="Led by Experienced Chartered Accountants"
          subtitle="A team of qualified professionals committed to delivering excellence."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {PARTNERS.map((partner, i) => (
            <motion.article
              key={partner.name}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={{ y: -6 }}
              className={`group flex gap-5 rounded-2xl border border-navy/5 bg-white p-6 shadow-[0_14px_40px_-26px_rgba(7,27,54,0.5)] transition-shadow hover:shadow-card ${
                i === PARTNERS.length - 1 && PARTNERS.length % 2 !== 0 ? 'sm:col-span-2 sm:mx-auto sm:max-w-md' : ''
              }`}
            >
              <PartnerAvatar partner={partner} />
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-navy">{partner.name}</h3>
                <p className="text-xs font-medium text-gold-dark">{partner.qualifications}</p>
                <p className="mt-0.5 text-xs text-navy/50">{partner.experience}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {partner.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-navy/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${partner.name} on LinkedIn`}
                  className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-gold transition-colors hover:bg-gold hover:text-navy"
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* staff banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4 rounded-2xl bg-navy px-8 py-6 text-center shadow-card"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
            <Users size={24} />
          </span>
          <p className="text-base font-semibold text-white sm:text-lg">
            <span className="text-gradient-gold text-xl font-bold">15+</span> Professional Staff Members
            Supporting Our Vision
          </p>
        </motion.div>
      </div>
    </section>
  )
}
