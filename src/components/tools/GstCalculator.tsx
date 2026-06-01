import { useState } from 'react'
import { NumberField, ResultRow, inr } from './calc-ui'

const RATES = [5, 12, 18, 28]

export default function GstCalculator() {
  const [amount, setAmount] = useState(10000)
  const [rate, setRate] = useState(18)
  const [mode, setMode] = useState<'exclusive' | 'inclusive'>('exclusive')

  let base: number, gst: number, total: number
  if (mode === 'exclusive') {
    base = amount
    gst = (amount * rate) / 100
    total = base + gst
  } else {
    base = amount / (1 + rate / 100)
    gst = amount - base
    total = amount
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <NumberField label="Amount" prefix="₹" value={amount} onChange={setAmount} step={100} />

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
            GST Rate
          </span>
          <div className="flex flex-wrap gap-2">
            {RATES.map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  rate === r ? 'bg-navy text-gold' : 'bg-cream text-navy/60 hover:bg-navy/5'
                }`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
            Amount Type
          </span>
          <div className="grid grid-cols-2 gap-2">
            {(['exclusive', 'inclusive'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                  mode === m ? 'bg-gold text-navy' : 'bg-cream text-navy/60 hover:bg-navy/5'
                }`}
              >
                {m === 'exclusive' ? 'GST Exclusive' : 'GST Inclusive'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <ResultRow label="Base Amount" value={`₹ ${inr(base)}`} />
        <ResultRow label={`CGST (${rate / 2}%)`} value={`₹ ${inr(gst / 2)}`} />
        <ResultRow label={`SGST (${rate / 2}%)`} value={`₹ ${inr(gst / 2)}`} />
        <ResultRow label="Total GST" value={`₹ ${inr(gst)}`} />
        <ResultRow label="Total Amount" value={`₹ ${inr(total)}`} highlight />
      </div>
    </div>
  )
}
