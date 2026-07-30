import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact IMEL Construction Pty Ltd about your Melbourne custom home, townhouse development, renovation or extension project.',
}

export default function ContactPage() {
  return <ContactContent />
}
