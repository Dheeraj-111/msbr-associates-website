import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  to: number
  suffix?: string
  duration?: number
  /** When false, the number is rendered without locale grouping (e.g. years). */
  format?: boolean
}

export default function Counter({ to, suffix = '', duration = 2000, format = true }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let start: number | null = null
    const animate = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {format ? value.toLocaleString('en-IN') : value}
      {suffix}
    </span>
  )
}
