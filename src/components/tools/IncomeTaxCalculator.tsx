import { useState } from 'react'
import { NumberField, ResultRow, inr } from './calc-ui'

/**
 * Income Tax under the New Tax Regime (FY 2025-26 / AY 2026-27).
 * Slabs: 0-4L nil, 4-8L 5%, 8-12L 10%, 12-16L 15%, 16-20L 20%, 20-24L 25%, 24L+ 30%.
 * Standard deduction ₹75,000 for salaried. Rebate u/s 87A makes tax nil up to ₹12L
 * taxable income. Health & Education cess @ 4%.
 */
const SLABS = [
  { upto: 400000, rate: 0 },
  { upto: 800000, rate: 0.05 },
  { upto: 1200000, rate: 0.1 },
  { upto: 1600000, rate: 0.15 },
  { upto: 2000000, rate: 0.2 },
  { upto: 2400000, rate: 0.25 },
  { upto: Infinity, rate: 0.3 },
]

function computeTax(taxable: number) {
  let tax = 0
  let last = 0
  for (const slab of SLABS) {
    if (taxable > last) {
      const amt = Math.min(taxable, slab.upto) - last
      tax += amt * slab.rate
      last = slab.upto
    } else break
  }
  return tax
}

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1500000)
  const [salaried, setSalaried] = useState(true)

  const stdDeduction = salaried ? 75000 : 0
  const taxable = Math.max(0, income - stdDeduction)
  let tax = computeTax(taxable)
  // Section 87A rebate (new regime): nil tax up to ₹12,00,000 taxable income
  const rebate = taxable <= 1200000 ? tax : 0
  tax = Math.max(0, tax - rebate)
  const cess = tax * 0.04
  const total = tax + cess

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <NumberField label="Annual Income" prefix="₹" value={income} onChange={setIncome} step={10000} />
        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
            Income Source
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSalaried(true)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                salaried ? 'bg-gold text-navy' : 'bg-cream text-navy/60 hover:bg-navy/5'
              }`}
            >
              Salaried
            </button>
            <button
              onClick={() => setSalaried(false)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                !salaried ? 'bg-gold text-navy' : 'bg-cream text-navy/60 hover:bg-navy/5'
              }`}
            >
              Non-Salaried
            </button>
          </div>
        </div>
        <p className="rounded-xl bg-cream px-4 py-3 text-xs leading-relaxed text-navy/55">
          New Tax Regime, FY 2025-26. Includes ₹75,000 standard deduction for salaried individuals and
          rebate u/s 87A. For indicative purposes — consult us for a precise assessment.
        </p>
      </div>

      <div className="space-y-3">
        <ResultRow label="Standard Deduction" value={`₹ ${inr(stdDeduction)}`} />
        <ResultRow label="Taxable Income" value={`₹ ${inr(taxable)}`} />
        <ResultRow label="Tax before Rebate" value={`₹ ${inr(computeTax(taxable))}`} />
        <ResultRow label="Rebate u/s 87A" value={`– ₹ ${inr(rebate)}`} />
        <ResultRow label="Health & Edu. Cess (4%)" value={`₹ ${inr(cess)}`} />
        <ResultRow label="Total Tax Payable" value={`₹ ${inr(total)}`} highlight />
      </div>
    </div>
  )
}
