export interface ComplianceItem {
  code: string
  title: string
  due: string
  frequency: string
  description: string
}

/**
 * Static, JSON-style compliance calendar. Dates reflect the standard statutory
 * due dates and can be edited here without any backend.
 */
export const COMPLIANCE: ComplianceItem[] = [
  {
    code: 'GSTR-1',
    title: 'Outward Supplies Return',
    due: '11th of every month',
    frequency: 'Monthly',
    description: 'Details of outward supplies of taxable goods and services.',
  },
  {
    code: 'GSTR-3B',
    title: 'Summary Return & Tax Payment',
    due: '20th of every month',
    frequency: 'Monthly',
    description: 'Summary return with self-assessed tax liability and payment.',
  },
  {
    code: 'TDS Return',
    title: 'Quarterly TDS Statement',
    due: '31st of the month after each quarter',
    frequency: 'Quarterly',
    description: 'Statement of tax deducted at source for the quarter (24Q / 26Q).',
  },
  {
    code: 'Advance Tax',
    title: 'Advance Tax Instalment',
    due: '15th of Jun, Sep, Dec & Mar',
    frequency: 'Quarterly',
    description: 'Instalment-based payment of income tax for the financial year.',
  },
]
