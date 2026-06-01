interface Props {
  className?: string
  light?: boolean
  showText?: boolean
}

export default function Logo({ className = '', light = false, showText = true }: Props) {
  const text = light ? '#FFFFFF' : '#071B36'
  const sub = light ? 'rgba(255,255,255,0.6)' : 'rgba(7,27,54,0.55)'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="29" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="23" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <path
          d="M16 42 L25 31 L33 37 L48 20"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41 20 H48 V27"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="18" y="44" width="4" height="6" rx="1" fill="#E6C75A" />
        <rect x="29" y="40" width="4" height="10" rx="1" fill="#E6C75A" />
        <rect x="40" y="36" width="4" height="14" rx="1" fill="#E6C75A" />
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="font-serif text-lg font-bold" style={{ color: text }}>
            <span className="text-gradient-gold font-bold">MSBR</span> &amp; Associates{' '}
            <span style={{ color: text }}>LLP</span>
          </div>
          <div
            className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: sub }}
          >
            Chartered Accountants
          </div>
        </div>
      )}
    </div>
  )
}
