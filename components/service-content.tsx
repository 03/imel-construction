'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { PROJECTS, projectMainImage, projectsOfType } from '@/lib/projects'
import { BUSINESS, SERVICES, serviceText } from '@/lib/site'

export function ServiceContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const sp = t.servicePage

  const service = SERVICES.find((item) => item.slug === slug)!
  const text = serviceText(service, locale)
  const others = SERVICES.filter((other) => other.slug !== service.slug)
  const projects = projectsOfType(service.projectType)
  // Localised project title, matched on the image folder.
  const projectTitle = (project: (typeof PROJECTS)[number]) =>
    t.portfolio.projects.find((item) => item.imageAddr === project.imageAddr)?.title ?? project.title

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-accent">
              {sp.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-accent">
              {sp.services}
            </Link>
            <span className="mx-2">/</span>
            <span>{text.shortName}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {sp.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {text.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{text.intro}</p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            {sp.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl leading-tight tracking-tight">{sp.includesTitle}</h2>
            <ul className="mt-8 flex flex-col gap-4">
              {text.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-tight tracking-tight">{sp.areasTitle}</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {sp.areasBody.replace('{suburbs}', BUSINESS.areaServed.slice(1).join(', '))}
            </p>
            <Link href="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              {sp.seeProjects}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="font-serif text-3xl leading-tight tracking-tight">{sp.recentProjects}</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const title = projectTitle(project)
                return (
                <li key={project.slug}>
                  <Link href={`/portfolio/${project.slug}`} className="group block">
                    <div className="relative aspect-4/3 w-full overflow-hidden border border-border bg-background">
                      <Image
                        src={projectMainImage(project)}
                        alt={`${title} ${t.portfolio.projectIn} ${project.suburb}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight group-hover:text-accent">
                      {title} {t.portfolio.projectIn} {project.suburb}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {project.start} – {project.finish}
                    </p>
                  </Link>
                </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight">{sp.faqTitle}</h2>
          <dl className="mt-8 flex flex-col divide-y divide-border border-y border-border">
            {text.faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-serif text-xl leading-snug">{faq.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{sp.otherServices}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-flex border border-foreground/20 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {serviceText(other, locale).name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
