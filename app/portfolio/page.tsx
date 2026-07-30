import type { Metadata } from 'next'
import PortfolioContent from '@/components/portfolio-content'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected residential projects by IMEL Construction Pty Ltd across Melbourne — custom homes, multi-unit townhouse developments, renovations and extensions.',
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
