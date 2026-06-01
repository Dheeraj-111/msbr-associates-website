import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Building2, MessageCircle, Send, MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { SITE, OFFICES } from '../data/site'
import { SERVICES } from '../data/services'
import { slideLeft, slideRight, viewportOnce } from '../lib/motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation Enquiry — ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Discuss Your Requirements"
          subtitle="We are here to help. Reach out to us for any query or consultation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* contact info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-navy p-8 text-white shadow-card"
          >
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-2 text-sm text-white/60">Reach out and our team will respond within 24 working hours.</p>

            <div className="mt-7 space-y-4">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-4 text-sm transition-colors hover:text-gold">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs text-white/50">Phone</span>
                  {SITE.phone}
                </span>
              </a>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                  <Building2 size={18} />
                </span>
                <span>
                  <span className="block text-xs text-white/50">Office</span>
                  {SITE.office}
                </span>
              </div>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 text-sm transition-colors hover:text-gold">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                  <Mail size={18} />
                </span>
                <span className="break-all">
                  <span className="block text-xs text-white/50">Email</span>
                  {SITE.email}
                </span>
              </a>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold">Our Offices</h4>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.name} className="flex gap-3 text-sm">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                    <div>
                      <div className="font-semibold text-white">{o.name}</div>
                      <div className="text-xs leading-relaxed text-white/55">{o.lines.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* form */}
          <motion.form
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-navy/5 bg-cream/40 p-8 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Your Name" required value={form.name} onChange={set('name')} placeholder="Full name" />
              <Input label="Email" type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" />
              <Input label="Phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 …" />
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
                  Service Required
                </span>
                <select
                  value={form.service}
                  onChange={set('service')}
                  className="w-full rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-700"
            >
              <Send size={17} /> Send Message
            </button>
            {sent && (
              <p className="mt-3 text-center text-xs text-navy/55">
                Your email client should now be open. If not, write to us at {SITE.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/55">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold"
      />
    </label>
  )
}
