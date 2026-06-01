# M S B R & Associates LLP — Website

Premium, fully responsive marketing site for **M S B R & ASSOCIATES LLP**
(Chartered Accountants · Tax Advisors · Business Consultants).

Built as a fast, static, single-page React app — no backend, no database.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** (component / scroll animations)
- **GSAP** (preloader + hero timeline)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build
```

## Project Structure

```
src/
├── App.tsx               # composes all sections + preloader
├── index.css             # Tailwind v4 theme tokens & global styles
├── data/                 # static JSON-style content (no CMS)
│   ├── site.ts           # contact info, nav links, offices
│   ├── services.ts       # service cards
│   ├── partners.ts       # partner profiles (+ photo paths)
│   ├── industries.ts     # industries + engagement stats
│   ├── compliance.ts     # compliance calendar
│   └── resources.ts      # GST / IT / MCA updates
├── hooks/useScrollSpy.ts # active-section indicator + smooth scroll
├── lib/motion.ts         # shared Framer Motion variants
└── components/
    ├── Preloader, Navbar, Hero, TrustStats, About, WhyChooseUs,
    │   Services, IndustryExperience, Partners, Tools,
    │   ComplianceCalendar, Resources, Contact, Footer, FloatingWhatsApp
    ├── tools/            # 5 client-side calculators (GST, IT, EMI, HRA, TDS)
    ├── ui/               # SectionHeading, Counter, Logo, icons
    └── illustrations/    # HeroIllustration (pure SVG)
```

## Content Editing

All copy lives in `src/data/*.ts` — edit those files, no rebuild config needed.

### Partner Photographs

Place **real** partner photos in `public/partners/` (see the README there for
filenames). Until added, the UI falls back to gold monogram avatars — never use
AI-generated or stock faces.

## Calculators

The GST, Income Tax, EMI, HRA and TDS calculators run entirely in the browser.
The Income Tax calculator uses the **New Tax Regime, FY 2025-26 (AY 2026-27)**
slabs — update `src/components/tools/IncomeTaxCalculator.tsx` when slabs change.

## Deployment (Vercel)

Static deploy — framework preset **Vite**. `vercel.json` is included with SPA
rewrites and long-term caching for hashed assets.

```
Build command:  npm run build
Output dir:     dist
```

## Notes

- Mobile-first responsive across mobile / tablet / desktop / large screens.
- SEO meta, Open Graph, Twitter cards and JSON-LD (`AccountingService`) in `index.html`.
- Respects `prefers-reduced-motion`.
- SVG-first illustrations for fast loading.
