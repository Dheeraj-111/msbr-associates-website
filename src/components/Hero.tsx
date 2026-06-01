import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import HeroIllustration from './illustrations/HeroIllustration'
import { SITE } from '../data/site'
import { scrollToId } from '../hooks/useScrollSpy'
import { fadeUp, stagger } from '../lib/motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-[72px] text-white">
      {/* ambient gradient + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-xl relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
          >
            Chartered Accountants · Tax Advisors · Consultants
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
          >
            Your Trusted Partner in{' '}
            <span className="text-gradient-gold">Audit, Taxation</span> &amp; Business Compliance
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            M S B R &amp; ASSOCIATES LLP is a leading Chartered Accountancy firm delivering Audit, GST,
            Income Tax, Corporate Law and Business Advisory services across India.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-[0_10px_30px_-8px_rgba(212,175,55,0.7)] transition-all hover:bg-gold-light hover:shadow-glow"
            >
              <MessageCircle size={18} />
              Book Consultation
            </a>
            <button
              onClick={() => scrollToId('services')}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              Explore Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Established 2018
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 5 CA Partners
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 3 Offices
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* wave divider into light section */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80 H1440 V32 C1080 80 360 0 0 40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
