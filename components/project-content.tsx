'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { PROJECTS, projectImages, projectMainImage, serviceForProjectType } from '@/lib/projects'

export function ProjectContent({ slug }: { slug: string }) {
  const { t } = useLanguage()

  const index = PROJECTS.findIndex((project) => project.slug === slug)
  const base = PROJECTS[index]
  // Localised title/meta for the current language, matched on the image folder.
  const project = t.portfolio.projects.find((item) => item.imageAddr === base.imageAddr) ?? base
  const heading = `${project.title} ${t.portfolio.projectIn} ${base.suburb}`
  const service = serviceForProjectType(base.type)
  const others = [1, 2, 3].map((offset) => PROJECTS[(index + offset) % PROJECTS.length]).filter((p) => p.slug !== slug)

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.portfolio.backToPortfolio}
          </Link>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">{heading}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted-foreground">
            {project.meta.trim()} &middot; {t.portfolio.startLabel}: {project.start} &middot; {t.portfolio.finishLabel}:{' '}
            {project.finish} &middot; {project.numOfImages} {t.portfolio.photosLabel}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description ?? t.portfolio.projectBody.replace('{suburb}', base.suburb)}
          </p>
          {service && (
            <Link
              href={`/services/${service.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
            >
              {t.portfolio.relatedService} {service.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:py-16">
          {projectImages(base).map((src, idx) => (
            <div key={src} className="relative aspect-16/9 w-full overflow-hidden rounded-sm border border-border bg-background">
              <Image
                src={src}
                alt={`${heading}, Melbourne — ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1152px) 100vw, 1104px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight">{t.portfolio.moreProjects}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={`/portfolio/${other.slug}`} className="group block">
                  <div className="relative aspect-4/3 w-full overflow-hidden border border-border bg-background">
                    <Image
                      src={projectMainImage(other)}
                      alt={`${other.title} ${t.portfolio.projectIn} ${other.suburb}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground group-hover:text-accent">
                    {other.suburb} &middot; {other.finish}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl leading-tight tracking-tight text-balance sm:text-3xl">
              {t.portfolio.ctaTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.portfolio.ctaBody}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            {t.portfolio.ctaButton}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
