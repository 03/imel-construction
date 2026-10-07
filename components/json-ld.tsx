import { BUSINESS, SERVICES, SITE_URL } from '@/lib/site'

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const businessId = `${SITE_URL}/#business`

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
  '@id': businessId,
  name: BUSINESS.name,
  alternateName: BUSINESS.shortName,
  description: BUSINESS.description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-light.png`,
  image: `${SITE_URL}/images/hero-home.jpg`,
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  foundingDate: BUSINESS.foundingDate,
  address: {
    '@type': 'PostalAddress',
    ...Object.fromEntries(Object.entries(BUSINESS.address).filter(([, value]) => value)),
  },
  geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
  areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'City', name: `${name}, VIC` })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Residential construction services',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.shortName,
        url: `${SITE_URL}/services/${service.slug}`,
      },
    })),
  },
}
