import type { LucideIcon } from 'lucide-react'
import {
  Factory,
  HeartPulse,
  GraduationCap,
  Hotel,
  Cpu,
  Landmark,
  Store,
  Building,
} from 'lucide-react'

export interface Industry {
  icon: LucideIcon
  name: string
}

export const INDUSTRIES: Industry[] = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Hotel, name: 'Hospitality' },
  { icon: Cpu, name: 'Information Technology' },
  { icon: Landmark, name: 'Finance' },
  { icon: Store, name: 'Trading' },
  { icon: Building, name: 'Real Estate' },
]

export interface EngagementStat {
  value: number
  suffix: string
  label: string
}

export const ENGAGEMENT_STATS: EngagementStat[] = [
  { value: 2500, suffix: '+', label: 'Client Engagements' },
  { value: 100, suffix: '+', label: 'Industries Served' },
  { value: 250, suffix: '+', label: 'Audit Assignments' },
  { value: 50, suffix: '+', label: 'Bank Audits' },
]
