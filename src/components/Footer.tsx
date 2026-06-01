import { Phone, Mail, MapPin } from 'lucide-react'
import { LinkedInIcon } from './ui/icons'
import Logo from './ui/Logo'
import { SITE, NAV_LINKS } from '../data/site'
import { SERVICES } from '../data/services'
import { scrollToId } from '../hooks/useScrollSpy'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A Chartered Accountancy firm delivering Audit, GST, Income Tax, Corporate Law and Business
              Advisory services across India since 2018.
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToId(l.id)} className="transition-colors hover:text-gold">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button onClick={() => scrollToId('services')} className="text-left transition-colors hover:text-gold">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-white/55">416 Trade House, Above HDFC Bank, South Tukoganj, Indore – 452001</span>
              </li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Phone size={16} className="shrink-0 text-gold" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-gold">
                  <Mail size={16} className="shrink-0 text-gold" /> {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="text-center text-sm font-medium text-gold">
            Audit | GST | Income Tax | Corporate Law | Business Advisory
          </p>
          <p className="mt-3 text-center text-xs text-white/40">
            © {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
