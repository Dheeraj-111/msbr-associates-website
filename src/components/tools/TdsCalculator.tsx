import { useState } from 'react'
import { NumberField, ResultRow, inr } from './calc-ui'

/** Common TDS sections with rate and threshold (resident, no-PAN ignored). */
const SECTIONS = [
  { code: '194C', label: 'Contractor (Individual/HUF)', rate: 1, threshold: 30000 },
  { code: '194C', label: 'Contractor (Others)', rate: 2, threshold: 30000 },
  { code: '194J', label: 'Professional / Technical Fees', rate: 10, threshold: 30000 },
  { code: '194I', label: 'Rent — Plant & Machinery', rate: 2, threshold: 240000 },
  { code: '194I', label: 'Rent — Land / Building', rate: 10, threshold: 240000 },
  { code: '194H', label: 'Commission / Brokerage', rate: 2, threshold: 20000 },
]

export default function TdsCalculator() {
  const [amount, setAmount] = useState(100000)
  const [idx, setIdx] = useState(2)

  const section = SECTIONS[idx]
  const applicable = amount >= section.threshold
  const tds = applicable ? (amount * section.rate) / 100 : 0
  const net = amount - tds

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <NumberField label="Payment Amount" prefix="₹" value={amount} onChange={setAmount} step={1000} />
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
            Nature of Payment
          </span>
          <select
            value={idx}
            onChange={(e) => setIdx(Number(e.target.value))}
            className="w-full rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-sm font-medium text-navy outline-none transition-colors focus:border-gold"
          >
            {SECTIONS.map((s, i) => (
              <option key={`${s.code}-${i}`} value={i}>
                {s.code} — {s.label} ({s.rate}%)
              </option>
            ))}
          </select>
        </label>
        <p className="rounded-xl bg-cream px-4 py-3 text-xs leading-relaxed text-navy/55">
          Threshold for this section: ₹ {inr(section.threshold)}. TDS applies only when the payment meets
          or exceeds the threshold. Rates assume a valid PAN is furnished.
        </p>
      </div>

      <div className="space-y-3">
        <ResultRow label="Section" value={section.code} />
        <ResultRow label="TDS Rate" value={`${section.rate}%`} />
        <ResultRow label="Threshold Met" value={applicable ? 'Yes' : 'No'} />
        <ResultRow label="TDS Deducted" value={`₹ ${inr(tds)}`} highlight />
        <ResultRow label="Net Payable" value={`₹ ${inr(net)}`} />
      </div>
    </div>
  )
}
