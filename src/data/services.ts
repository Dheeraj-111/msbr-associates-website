import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  ShieldCheck,
  Receipt,
  FileText,
  Scale,
  TrendingUp,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  summary: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'Business Setup & Registration',
    summary: 'End-to-end incorporation and registration for new and growing businesses.',
    points: ['Company Incorporation', 'LLP Registration', 'GST Registration', 'MSME Registration'],
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Assurance',
    summary: 'Independent, rigorous assurance that builds stakeholder confidence.',
    points: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Due Diligence'],
  },
  {
    icon: Receipt,
    title: 'GST Advisory & Compliance',
    summary: 'Complete GST lifecycle support from registration to litigation.',
    points: ['GST Registration', 'GST Return Filing', 'GST Assessments', 'GST Litigation Support'],
  },
  {
    icon: FileText,
    title: 'Income Tax Services',
    summary: 'Strategic tax planning and compliance for individuals and corporates.',
    points: ['Income Tax Returns', 'Tax Planning', 'TDS Compliance', 'Appeals & Litigation'],
  },
  {
    icon: Scale,
    title: 'Corporate Law',
    summary: 'Secretarial and regulatory compliance across the corporate lifecycle.',
    points: ['ROC Compliance', 'Secretarial Services', 'Mergers & Amalgamation', 'Corporate Advisory'],
  },
  {
    icon: TrendingUp,
    title: 'Business Advisory',
    summary: 'Insight-driven advisory to manage risk and accelerate growth.',
    points: ['Financial Advisory', 'Risk Advisory', 'Process Consulting', 'Growth Strategy'],
  },
]
