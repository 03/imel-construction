'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@/lib/site'
import { useLanguage } from '@/components/language-provider'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t.home.heroBody}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              {t.home.heroPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.home.heroSecondary}
            </Link>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
          <Image
            src="/images/hero-home.jpg"
            alt={t.home.heroImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border bg-secondary">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
        {t.home.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-serif text-3xl tracking-tight">{stat.value}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function About() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-3/4 w-full overflow-hidden bg-muted lg:sticky lg:top-28 lg:self-start">
          <Image
            src="/images/about-craft.png"
            alt={t.home.aboutImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>{t.home.aboutEyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            {t.home.aboutTitle}
          </h2>
          <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            {t.home.aboutBody.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <Eyebrow>{t.home.dmEyebrow}</Eyebrow>
            <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-balance">{t.home.dmTitle}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.home.dmBody}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.home.dmPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>{t.home.servicesEyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            {t.home.servicesTitle}
          </h2>
        </div>

        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.home.services.map((service, index) => {
            const slug = SERVICES[index]?.slug
            return (
              <li key={service.title} className="flex flex-col gap-3 bg-background p-7">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl leading-snug tracking-tight">
                  {slug ? (
                    <Link href={`/services/${slug}`} className="transition-colors hover:text-accent">
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function WhyChoose() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>{t.home.whyEyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            {t.home.whyTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.home.whyBody}</p>
        </div>

        <ul className="flex flex-col">
          {t.home.whyPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-4 border-b border-border py-5 first:border-t first:border-border"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function VisionMission() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
        <div className="bg-background px-6 py-14 md:px-10">
          <Eyebrow>{t.home.visionLabel}</Eyebrow>
          <p className="mt-5 font-serif text-2xl leading-snug tracking-tight text-pretty">{t.home.visionBody}</p>
        </div>
        <div className="bg-background px-6 py-14 md:px-10">
          <Eyebrow>{t.home.missionLabel}</Eyebrow>
          <p className="mt-5 font-serif text-2xl leading-snug tracking-tight text-pretty">{t.home.missionBody}</p>
        </div>
      </div>
    </section>
  )
}

export function HomeCta() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/townhouse-row.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
          {t.home.ctaTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          {t.home.ctaBody}
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          {t.home.ctaButton}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
