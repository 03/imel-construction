'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { contactDetails } from '@/lib/i18n'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl leading-none">IMEL</span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Construction
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{t.footer.blurb}</p>
            <p className="mt-4 font-serif text-lg text-primary-foreground/90">{t.company.tagline}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                {t.footer.navTitle}
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <li>
                  <Link href="/" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {t.nav.portfolio}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                {t.footer.contactTitle}
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                  <span>{t.contact.addressValue}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                  <a href={contactDetails.phoneHref} className="hover:text-primary-foreground">
                    {contactDetails.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-primary-foreground">
                    {contactDetails.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                {t.footer.languageTitle}
              </h2>
              <LanguageSwitcher className="mt-4 [&_button]:border-primary-foreground/20 [&_button]:text-primary-foreground/70 [&_button[aria-pressed=true]]:border-accent [&_button[aria-pressed=true]]:bg-accent/20 [&_button[aria-pressed=true]]:text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {t.company.name}. {t.footer.rights}
          </p>
          <p>
            {t.contact.acnLabel} {contactDetails.acn} &middot; {t.contact.licenceLabel} {contactDetails.licence}
          </p>
        </div>
      </div>
    </footer>
  )
}
