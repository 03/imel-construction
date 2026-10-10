import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd, businessId } from '@/components/json-ld'
import { ServiceContent } from '@/components/service-content'
import { BUSINESS, SERVICES, SITE_URL } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

function findService(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug)
  if (!service) return {}

  const path = `/services/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: { title: service.title, description: service.description, url: path },
  }
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug)
  if (!service) notFound()

  const url = `${SITE_URL}/services/${service.slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${url}#service`,
              name: service.name,
              serviceType: service.shortName,
              description: service.description,
              url,
              provider: { '@id': businessId },
              areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'City', name: `${name}, VIC` })),
            },
            {
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
                { '@type': 'ListItem', position: 3, name: service.shortName, item: url },
              ],
            },
          ],
        }}
      />

      <ServiceContent slug={service.slug} />
    </>
  )
}
