import { dictionary } from '@/lib/i18n'
import { BUSINESS, SERVICES } from '@/lib/site'

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

// Short meta descriptions for search results (Google shows ~155 characters).
// The longer `description` in lib/i18n.ts is shown on the page itself.
const SEO_DESCRIPTIONS: Record<string, string> = {
  '369AuburnRd_Hawthorn':
    'Complete home renovation in Hawthorn by IMEL Construction, from demolition to turnkey handover in 6 months. View photos of this Melbourne renovation.',
  '5GeraldSt_Murrumbeena':
    'Three double-storey townhouses in Murrumbeena, built by IMEL Construction in 11 months. View photos of this Melbourne townhouse development.',
  '22SheahansRd_TemplestoweLower':
    'Steel-framed double-storey French Provincial home in Templestowe Lower, built by IMEL Construction in about 10 months. View project photos.',
  '1VerdiCourt_Templestowe':
    'Four double-storey townhouses with basement in Templestowe, built by IMEL Construction in about 17 months. View photos of this development.',
  '1305GlenHuntlyRd_Carnegie':
    'Four ultra-modern double-storey townhouses in Carnegie, built by IMEL Construction in 13 months. View photos of this Melbourne development.',
  '15CoolabahSt_Doncaster':
    'Two Victorian-style double-storey townhouses in Doncaster, custom built for the owners by IMEL Construction. View photos of this project.',
  '46YongalaSt_Balwyn':
    'French Provincial custom home in Balwyn, built by IMEL Construction over about 12 months. View photos of this bespoke Melbourne family home.',
  '89ClydeSt_Boxhill':
    'Three double-storey townhouses in Box Hill with brick and Hebel facades, built by IMEL Construction. View photos of this Melbourne development.',
}

export function projectSeoDescription(project: (typeof PROJECTS)[number]) {
  return (
    SEO_DESCRIPTIONS[project.imageAddr] ??
    `${project.title} in ${project.suburb}, Melbourne, built by IMEL Construction (${project.start} – ${project.finish}). View project photos.`
  )
}

export function projectsOfType(type: string | null) {
  return type ? PROJECTS.filter((project) => project.type === type) : []
}

export function serviceForProjectType(type: string) {
  return SERVICES.find((service) => service.projectType === type)
}

export function findProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug)
}
