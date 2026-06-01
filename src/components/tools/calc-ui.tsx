export const inr = (n: number) =>
  new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)))

interface FieldProps {
  label: string
  value: number | string
  onChange: (v: number) => void
  prefix?: string
  suffix?: string
  min?: number
  step?: number
}

export function NumberField({ label, value, onChange, prefix, suffix, min = 0, step = 1 }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-navy/10 bg-white px-3 transition-colors focus-within:border-gold">
        {prefix && <span className="pr-1 text-sm font-semibold text-navy/50">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-2.5 text-sm font-medium text-navy outline-none"
        />
        {suffix && <span className="pl-1 text-sm font-medium text-navy/50">{suffix}</span>}
      </div>
    </label>
  )
}

export function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl px-4 py-3 ${
        highlight ? 'bg-navy text-white' : 'bg-cream'
      }`}
    >
      <span className={`text-sm ${highlight ? 'text-white/70' : 'text-navy/60'}`}>{label}</span>
      <span className={`text-base font-bold ${highlight ? 'text-gold' : 'text-navy'}`}>{value}</span>
    </div>
  )
}
