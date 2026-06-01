import { useState } from 'react'
import { NumberField, ResultRow, inr } from './calc-ui'

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(2500000)
  const [rate, setRate] = useState(9)
  const [years, setYears] = useState(20)

  const months = years * 12
  const r = rate / 12 / 100
  const emi = r === 0 ? principal / months : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  const totalPayable = emi * months
  const totalInterest = totalPayable - principal

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <NumberField label="Loan Amount" prefix="₹" value={principal} onChange={setPrincipal} step={50000} />
        <NumberField label="Interest Rate (p.a.)" suffix="%" value={rate} onChange={setRate} step={0.1} />
        <NumberField label="Tenure" suffix="years" value={years} onChange={setYears} step={1} />
      </div>

      <div className="space-y-3">
        <ResultRow label="Monthly EMI" value={`₹ ${inr(emi)}`} highlight />
        <ResultRow label="Principal Amount" value={`₹ ${inr(principal)}`} />
        <ResultRow label="Total Interest" value={`₹ ${inr(totalInterest)}`} />
        <ResultRow label="Total Payable" value={`₹ ${inr(totalPayable)}`} />

        {/* visual split */}
        <div className="pt-2">
          <div className="flex h-3 overflow-hidden rounded-full bg-cream">
            <div
              className="bg-navy"
              style={{ width: `${(principal / totalPayable) * 100}%` }}
              title="Principal"
            />
            <div className="bg-gold" style={{ width: `${(totalInterest / totalPayable) * 100}%` }} title="Interest" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-navy/55">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-navy" /> Principal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-gold" /> Interest
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
