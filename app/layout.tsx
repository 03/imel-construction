import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'
import { JsonLd, businessJsonLd } from '@/components/json-ld'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SITE_URL } from '@/lib/site'
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

const defaultTitle = 'IMEL Construction — Melbourne Builders | Custom Homes & Townhouses'
const defaultDescription =
  'IMEL Construction is a Melbourne builder delivering custom homes, townhouse developments, knockdown rebuilds, renovations and extensions across Hawthorn, Balwyn, Box Hill, Doncaster and surrounds.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s | IMEL Construction Melbourne',
  },
  description: defaultDescription,
  keywords: [
    'builder Melbourne',
    'Melbourne builders',
    'construction company Melbourne',
    'residential construction Melbourne',
    'custom home builder Melbourne',
    'townhouse builder Melbourne',
    'knockdown rebuild Melbourne',
    'home renovations Melbourne',
    'home extensions Melbourne',
    'IMEL Construction',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: 'IMEL Construction',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/images/hero-home.jpg', alt: 'Contemporary Melbourne home built by IMEL Construction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/hero-home.jpg'],
  },
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
        <JsonLd data={businessJsonLd} />
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
