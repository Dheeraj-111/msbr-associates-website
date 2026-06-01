export interface Partner {
  name: string
  qualifications: string
  experience: string
  focus: string[]
  /**
   * Path to a real partner photograph placed in /public/partners/.
   * IMPORTANT: use real photographs only — no AI-generated faces.
   * Until a real image is supplied, the UI falls back to a monogram avatar.
   */
  photo?: string
}

export const PARTNERS: Partner[] = [
  {
    name: 'CA. Mayur Sharma',
    qualifications: 'FCA, DISA, CCAB, B.Com',
    experience: '6+ Years Experience',
    focus: ['Audit & Assurance', 'Direct Taxation', 'GST Advisory'],
    photo: '/partners/mayur-sharma.jpg',
  },
  {
    name: 'CA. Bharat Rachwani',
    qualifications: 'FCA, DISA, FAFD, CCAB, MBA, B.Com',
    experience: '5+ Years Experience',
    focus: ['Audit & Assurance', 'Direct Taxation', 'Financial Advisory'],
    photo: '/partners/bharat-rachwani.jpg',
  },
  {
    name: 'CA. Pranjal Chipped',
    qualifications: 'ACA, B.Com',
    experience: '3.5+ Years Experience',
    focus: ['Audit & Assurance', 'Direct Taxation'],
    photo: '/partners/pranjal-chipped.jpg',
  },
  {
    name: 'CA. Prachi Tale',
    qualifications: 'ACA, B.Com',
    experience: '1+ Year Experience',
    focus: ['Audit & Assurance', 'Internal Audit'],
    photo: '/partners/prachi-tale.jpg',
  },
  {
    name: 'CA. Jayant Doliya',
    qualifications: 'ACA, B.Com',
    experience: '1+ Year Experience',
    focus: ['Audit & Assurance', 'Internal Audit', 'Direct Taxation'],
    photo: '/partners/jayant-doliya.jpg',
  },
]
