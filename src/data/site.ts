export const SITE = {
  name: 'M S B R & ASSOCIATES LLP',
  shortName: 'MSBR',
  tagline: 'Chartered Accountants | Tax Advisors | Business Consultants',
  phone: '+91 78984 18415',
  phoneRaw: '917898418415',
  office: '0731-4988932',
  email: 'ca.mayursharma108@gmail.com',
  linkedin: 'https://www.linkedin.com/company/m-s-b-r-associates-llp',
  whatsapp:
    'https://wa.me/917898418415?text=Hello%20I%20would%20like%20to%20book%20a%20consultation',
} as const

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Partners', id: 'partners' },
  { label: 'Resources', id: 'resources' },
  { label: 'Contact', id: 'contact' },
] as const

export const OFFICES = [
  {
    name: 'Head Office — Indore (M.P.)',
    lines: ['416 Trade House, Above HDFC Bank', 'South Tukoganj', 'Indore – 452001 (M.P.)'],
  },
  {
    name: 'Branch Office — Ujjain (M.P.)',
    lines: ['103 Mahakal Kanak Complex', 'Near Dewas Gate Bus Stand', 'Ujjain – 456001 (M.P.)'],
  },
  {
    name: 'Branch Office — Pratapgarh (Raj.)',
    lines: ['Near Laxmi Store, Krishi Mandi Road', 'Next to Bus Stand', 'Pratapgarh – 312605 (R.J.)'],
  },
] as const
