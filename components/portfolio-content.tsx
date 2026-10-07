'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { dictionary } from '@/lib/i18n'
import { projectSlug } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Image from "next/image";

function PortfolioContent() {
  const { t, locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // project.type always holds the English label, so match against the English filter
  // at the same index rather than the translated one.
  const activeType = dictionary.en.portfolio.filters[activeFilter]
  const projects =
      activeFilter === 0
          ? t.portfolio.projects
          : t.portfolio.projects.filter((project) => project.type === activeType)

  // Show "Back to Top" button when user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
      <>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.portfolio.eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              {t.portfolio.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.portfolio.intro}</p>
          </div>
        </section>

        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <ul key={`${locale}-${activeFilter}`} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                  <li key={`${project.title}-${index}`} className="group flex flex-col">
                    <Link
                        href={`/portfolio/${projectSlug(project.imageAddr)}`}
                        className="block overflow-hidden border border-dashed border-border bg-background"
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image
                            src={'/images/props/' + `${project.imageAddr}` + '/main.jpg'}
                            alt={`${project.title} — ${project.meta.trim()}`}
                            priority={index < 3}
                            width={500}
                            height={300}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="mt-4 border-t border-border pt-4">
                      <Link
                          href={`/portfolio/${projectSlug(project.imageAddr)}`}
                          className="flex items-start justify-between gap-4 text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-accent"
                      >
                        <span>
                          {project.meta} <br /> {t.portfolio.startLabel}: {project.start} - {t.portfolio.finishLabel}: {project.finish}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0" aria-label={t.portfolio.viewProject} />
                      </Link>
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              {t.portfolio.processTitle}
            </h2>
            <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {t.portfolio.process.map((item) => (
                  <li key={item.step} className="flex flex-col gap-3 bg-background p-7">
                    <span className="font-mono text-xs text-accent">{item.step}</span>
                    <h3 className="font-serif text-xl leading-snug tracking-tight">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </li>
              ))}
            </ol>
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

        {/* Floating Back to Top Button */}
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
                "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </>
  )
}

export default PortfolioContent