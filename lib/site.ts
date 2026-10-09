import { contactDetails } from '@/lib/i18n'

// Canonical production URL. Override with NEXT_PUBLIC_SITE_URL if the domain differs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.imelconstruction.com.au').replace(/\/$/, '')

export const BUSINESS = {
  name: 'IMEL Construction Pty Ltd',
  shortName: 'IMEL Construction',
  description:
    'Melbourne residential builder delivering custom homes, multi-unit townhouse developments, knockdown rebuilds, renovations and extensions.',
  phone: contactDetails.phone,
  phoneE164: '+61433750622',
  email: contactDetails.email,
  // TODO: replace with the registered business address (keep identical to Google Business Profile).
  address: {
    streetAddress: '',
    addressLocality: 'Glen Iris',
    addressRegion: 'VIC',
    postalCode: '3146',
    addressCountry: 'AU',
  },
  geo: { latitude: -37.8585, longitude: 145.0597 }, // Glen Iris
  foundingDate: '2021',
  // Suburbs where IMEL has built or wants to win work. Drives structured data and service-page copy.
  areaServed: [
    'Melbourne',
    'Glen Iris',
    'Hawthorn',
    'Balwyn',
    'Box Hill',
    'Doncaster',
    'Templestowe',
    'Templestowe Lower',
    'Carnegie',
    'Murrumbeena',
  ],
}

// Same order as the first entries of t.home.services in lib/i18n.ts, so the home page can link to them.
export const SERVICES = [
  {
    slug: 'custom-homes',
    // Portfolio project type shown on this page (see type in lib/i18n.ts projects).
    projectType: 'Custom Homes',
    name: 'Custom Home Builder Melbourne',
    shortName: 'Custom Homes',
    title: 'Custom Home Builder Melbourne',
    description:
      'IMEL Construction builds individually designed custom homes across Melbourne — from design coordination and permits to construction and handover.',
    intro:
      'We build individually designed family homes across Melbourne, shaped around your brief, your block and your budget. One accountable team manages the design coordination, building permit, construction and handover.',
    includes: [
      'Review of your brief, site and budget',
      'Coordination with your architect, engineer and building surveyor',
      'Fixed-price or cost-plus building contracts',
      'Full construction management and site supervision',
      'Premium finishes and quality inspections at every stage',
      'Handover, defects liability period and ongoing support',
    ],
    faqs: [
      {
        q: 'How long does it take to build a custom home in Melbourne?',
        a: 'Most double-storey custom homes take 12 to 18 months from site start to handover, depending on size, design complexity and the weather. Planning and permits come before that.',
      },
      {
        q: 'Do you work with my own architect?',
        a: 'Yes. We regularly build from plans prepared by independent architects and designers, and we can also introduce you to designers we trust.',
      },
      {
        q: 'Which suburbs do you build in?',
        a: 'We build across Melbourne, including the eastern and south-eastern suburbs such as Hawthorn, Balwyn, Box Hill, Doncaster, Templestowe, Carnegie and Murrumbeena.',
      },
    ],
  },
  {
    slug: 'townhouse-developments',
    projectType: 'Townhouses',
    name: 'Townhouse & Multi-Unit Developments',
    shortName: 'Townhouse Developments',
    title: 'Townhouse & Multi-Unit Builder Melbourne',
    description:
      'Multi-unit townhouse developments in Melbourne delivered by IMEL Construction, with town planning support, disciplined programming and cost control.',
    intro:
      'We build dual-occupancy, townhouse and multi-unit developments for owners and developers across Melbourne. Our focus is on programme, cost control and a finish that helps every dwelling sell or lease well.',
    includes: [
      'Feasibility input and buildability reviews',
      'Town planning and development management support',
      'Building permit coordination',
      'Staged construction programming and cost reporting',
      'Subdivision and service authority coordination',
      'Handover ready for sale or lease',
    ],
    faqs: [
      {
        q: 'Can you help before the planning permit is approved?',
        a: 'Yes. Getting a builder involved early means the design is costed and buildable before it goes to council, which avoids expensive redesigns later.',
      },
      {
        q: 'Do you offer cost-plus contracts for developments?',
        a: 'Yes. We offer open-book cost-plus contracts with clear reporting, as well as fixed-price contracts.',
      },
    ],
  },
  {
    slug: 'renovations',
    projectType: 'Renovations',
    name: 'Home Renovations Melbourne',
    shortName: 'Renovations',
    title: 'Home Renovation Builder Melbourne',
    description:
      'Quality home renovations in Melbourne by IMEL Construction — kitchens, bathrooms, living areas and full-home transformations with premium finishes.',
    intro:
      'We renovate existing Melbourne homes with care, from single-room upgrades to full-home transformations, using premium finishes and a tidy, well-managed site.',
    includes: [
      'Whole-home and partial renovations',
      'Kitchen, bathroom and living-area upgrades',
      'Structural changes and layout reconfiguration',
      'Heritage-sensitive work',
      'Permit coordination where required',
    ],
    faqs: [
      {
        q: 'Can we live in the house during the renovation?',
        a: 'It depends on the scope. For smaller renovations it is often possible. We will tell you honestly during planning and stage the work to reduce disruption.',
      },
    ],
  },
  {
    slug: 'extensions',
    projectType: 'Extensions',
    name: 'Home Extensions Melbourne',
    shortName: 'Extensions',
    title: 'Home Extension Builder Melbourne',
    description:
      'Home extensions in Melbourne by IMEL Construction — ground-floor and second-storey additions integrated seamlessly with your existing home.',
    intro:
      'We design-coordinate and build ground-floor and second-storey extensions that blend seamlessly with your existing home, adding the space your family needs without moving.',
    includes: [
      'Ground-floor and rear extensions',
      'Second-storey additions',
      'Structural engineering and permit coordination',
      'Seamless integration of new and existing finishes',
    ],
    faqs: [
      {
        q: 'Do I need a building permit for an extension in Victoria?',
        a: 'Almost always, yes. Some extensions also need a planning permit. We coordinate the building surveyor and permits on your behalf.',
      },
    ],
  },
  {
    slug: 'knockdown-rebuild',
    projectType: null,
    name: 'Knockdown Rebuild Melbourne',
    shortName: 'Knockdown Rebuild',
    title: 'Knockdown Rebuild Builder Melbourne',
    description:
      'Knockdown rebuild projects in Melbourne by IMEL Construction — demolition, permits and a brand-new custom home on the land you already own.',
    intro:
      'Love your street but not your house? We manage the whole knockdown rebuild — demolition, permits, design coordination and construction of a new custom home on your existing block.',
    includes: [
      'Site assessment and demolition coordination',
      'Service disconnections and asset protection',
      'Design coordination and building permits',
      'Construction of your new custom home',
    ],
    faqs: [
      {
        q: 'Is a knockdown rebuild cheaper than a major renovation?',
        a: 'Often it is comparable or better value, especially for older homes that need structural work. We can compare both options for your property.',
      },
    ],
  },
] as const

export type Service = (typeof SERVICES)[number]
