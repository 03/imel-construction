import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IMEL Construction Pty Ltd — Melbourne Residential Builders',
    template: '%s | IMEL Construction Pty Ltd',
  },
  description:
    'IMEL Construction Pty Ltd is a Melbourne-based residential construction company delivering custom homes, multi-unit townhouse developments, renovations, extensions and development management. Building Quality. Delivering Confidence.',
  keywords: [
    'Melbourne builder',
    'custom homes Melbourne',
    'townhouse developments',
    'home renovations',
    'home extensions',
    'knockdown rebuild',
    'development management',
    'IMEL Construction',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f7f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`bg-background ${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
