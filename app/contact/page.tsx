import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact a Melbourne Builder',
  description:
    'Contact IMEL Construction Pty Ltd about your Melbourne custom home, townhouse development, renovation or extension project.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactContent />
}
