'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl leading-none tracking-tight">IMEL</span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Construction
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t.footer.navTitle}>
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-1 text-sm font-medium transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" aria-hidden="true" />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            {t.nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label={t.footer.navTitle}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'py-3 text-base font-medium',
                  pathname === link.href ? 'text-accent' : 'text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher className="mt-3" />
          </nav>
        </div>
      )}
    </header>
  )
}
