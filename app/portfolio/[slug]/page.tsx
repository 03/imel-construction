import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd, businessId } from '@/components/json-ld'
import { ProjectContent } from '@/components/project-content'
import { PROJECTS, findProject, projectImages, projectMainImage } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug)
  if (!project) return {}

  const title = `${project.title} in ${project.suburb}, Melbourne`
  const description = `New custom home built by IMEL Construction at ${project.meta.trim()} VIC (${project.start} – ${project.finish}). See ${project.numOfImages} photos of this Melbourne build.`
  const path = `/portfolio/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: projectMainImage(project), alt: `${project.title} in ${project.suburb}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [projectMainImage(project)] },
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug)
  if (!project) notFound()

  const url = `${SITE_URL}/portfolio/${project.slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ImageGallery',
              '@id': `${url}#gallery`,
              name: `${project.title} in ${project.suburb}, Melbourne`,
              url,
              about: {
                '@type': 'House',
                name: `${project.title} — ${project.suburb}`,
                address: { '@type': 'PostalAddress', addressLocality: project.suburb, addressRegion: 'VIC', addressCountry: 'AU' },
              },
              creator: { '@id': businessId },
              image: projectImages(project).map((src) => `${SITE_URL}${src}`),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
                { '@type': 'ListItem', position: 3, name: `${project.title} in ${project.suburb}`, item: url },
              ],
            },
          ],
        }}
      />
      <ProjectContent slug={project.slug} />
    </>
  )
}
