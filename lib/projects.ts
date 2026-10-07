import { dictionary } from '@/lib/i18n'
import { BUSINESS } from '@/lib/site'

type Project = (typeof dictionary.en.portfolio.projects)[number]

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z]/g, '')

// '369AuburnRd_Hawthorn' -> '369-auburn-rd-hawthorn'
export function projectSlug(imageAddr: string) {
  return imageAddr
    .replace(/_/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .toLowerCase()
}

// Suburb from the folder name, e.g. '22SheahansRd_TemplestoweLower' -> 'Templestowe Lower'.
// Prefers the spelling in BUSINESS.areaServed so 'Boxhill' becomes 'Box Hill'.
export function projectSuburb(imageAddr: string) {
  const raw = imageAddr.split('_').pop() ?? ''
  const known = BUSINESS.areaServed.find((suburb) => normalize(suburb) === normalize(raw))
  return known ?? raw.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export function projectImages(project: Project) {
  return Array.from({ length: project.numOfImages }, (_, idx) => `/images/props/${project.imageAddr}/image${idx + 1}.jpg`)
}

export function projectMainImage(project: Project) {
  return `/images/props/${project.imageAddr}/main.jpg`
}

// The English dictionary is the source of truth for routes, metadata and the sitemap.
export const PROJECTS = dictionary.en.portfolio.projects.map((project) => ({
  ...project,
  slug: projectSlug(project.imageAddr),
  suburb: projectSuburb(project.imageAddr),
}))

export function findProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug)
}
