import type { Metadata } from 'next'
import PortfolioContent from '@/components/portfolio-content'

export const metadata: Metadata = {
  title: 'Our Projects — Custom Homes Built Across Melbourne',
  description:
    'Selected residential projects by IMEL Construction Pty Ltd across Melbourne — custom homes, multi-unit townhouse developments, renovations and extensions.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
