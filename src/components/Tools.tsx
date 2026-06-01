import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calculator, Receipt, Landmark, Home, FileText } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import GstCalculator from './tools/GstCalculator'
import IncomeTaxCalculator from './tools/IncomeTaxCalculator'
import EmiCalculator from './tools/EmiCalculator'
import HraCalculator from './tools/HraCalculator'
import TdsCalculator from './tools/TdsCalculator'
import { fadeUp, viewportOnce } from '../lib/motion'

const TABS = [
  { id: 'gst', label: 'GST Calculator', icon: Receipt, Comp: GstCalculator },
  { id: 'income', label: 'Income Tax', icon: Landmark, Comp: IncomeTaxCalculator },
  { id: 'emi', label: 'EMI Calculator', icon: Calculator, Comp: EmiCalculator },
  { id: 'hra', label: 'HRA Calculator', icon: Home, Comp: HraCalculator },
  { id: 'tds', label: 'TDS Calculator', icon: FileText, Comp: TdsCalculator },
]

export default function Tools() {
  const [active, setActive] = useState('gst')
  const ActiveComp = TABS.find((t) => t.id === active)?.Comp ?? GstCalculator

  return (
    <section id="tools" className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Financial Tools"
          title="Free Online Calculators"
          subtitle="Quick, accurate estimates — all computed instantly in your browser."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-4xl"
        >
          {/* tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map((t) => {
              const isActive = active === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-navy text-gold shadow-card'
                      : 'bg-cream text-navy/60 hover:bg-navy/5'
                  }`}
                >
                  <t.icon size={16} />
                  {t.label}
                </button>
              )
            })}
          </div>

          {/* panel */}
          <div className="mt-8 rounded-3xl border border-navy/5 bg-cream/40 p-6 shadow-card sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveComp />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
