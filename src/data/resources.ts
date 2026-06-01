export interface ResourceCategory {
  category: string
  accent: string
  updates: { date: string; title: string }[]
}

/**
 * Local JSON-style resource data. No CMS / backend — edit entries inline.
 */
export const RESOURCES: ResourceCategory[] = [
  {
    category: 'Latest GST Updates',
    accent: 'GST',
    updates: [
      { date: '15 May 2026', title: 'Revised GSTR-1 reporting thresholds notified for FY 2026-27.' },
      { date: '02 May 2026', title: 'Clarification on Input Tax Credit for capital goods issued.' },
      { date: '20 Apr 2026', title: 'New e-invoicing limit applicable to ₹5 Cr+ turnover.' },
    ],
  },
  {
    category: 'Income Tax Updates',
    accent: 'IT',
    updates: [
      { date: '18 May 2026', title: 'ITR forms for AY 2026-27 released with pre-filled schedules.' },
      { date: '06 May 2026', title: 'Updated TDS rate chart effective from current financial year.' },
      { date: '28 Apr 2026', title: 'Extended due date guidance for tax audit assessees.' },
    ],
  },
  {
    category: 'MCA Updates',
    accent: 'MCA',
    updates: [
      { date: '12 May 2026', title: 'MCA-21 V3 portal enhancements for LLP filings rolled out.' },
      { date: '30 Apr 2026', title: 'Revised director KYC (DIR-3 KYC) compliance timeline.' },
      { date: '22 Apr 2026', title: 'New disclosure norms for related-party transactions.' },
    ],
  },
]
