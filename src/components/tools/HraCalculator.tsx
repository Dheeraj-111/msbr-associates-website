import { useState } from 'react'
import { NumberField, ResultRow, inr } from './calc-ui'

/**
 * HRA exemption u/s 10(13A) = least of:
 *  1. Actual HRA received
 *  2. Rent paid − 10% of (Basic + DA)
 *  3. 50% of (Basic + DA) for metro, else 40%
 * Figures here are annual.
 */
export default function HraCalculator() {
  const [basic, setBasic] = useState(600000)
  const [hra, setHra] = useState(300000)
  const [rent, setRent] = useState(240000)
  const [metro, setMetro] = useState(true)

  const cond1 = hra
  const cond2 = Math.max(0, rent - 0.1 * basic)
  const cond3 = (metro ? 0.5 : 0.4) * basic
  const exempt = Math.min(cond1, cond2, cond3)
  const taxable = Math.max(0, hra - exempt)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <NumberField label="Basic + DA (annual)" prefix="₹" value={basic} onChange={setBasic} step={10000} />
        <NumberField label="HRA Received (annual)" prefix="₹" value={hra} onChange={setHra} step={10000} />
        <NumberField label="Rent Paid (annual)" prefix="₹" value={rent} onChange={setRent} step={10000} />
        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
            City Type
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setMetro(true)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                metro ? 'bg-gold text-navy' : 'bg-cream text-navy/60 hover:bg-navy/5'
              }`}
            >
              Metro (50%)
            </button>
            <button
              onClick={() => setMetro(false)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                !metro ? 'bg-gold text-navy' : 'bg-cream text-navy/60 hover:bg-navy/5'
              }`}
            >
              Non-Metro (40%)
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <ResultRow label="Actual HRA Received" value={`₹ ${inr(cond1)}`} />
        <ResultRow label="Rent − 10% of Basic" value={`₹ ${inr(cond2)}`} />
        <ResultRow label={`${metro ? '50' : '40'}% of Basic`} value={`₹ ${inr(cond3)}`} />
        <ResultRow label="HRA Exempt" value={`₹ ${inr(exempt)}`} highlight />
        <ResultRow label="Taxable HRA" value={`₹ ${inr(taxable)}`} />
      </div>
    </div>
  )
}
