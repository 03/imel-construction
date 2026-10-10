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

type ServiceText = {
  name: string
  shortName: string
  intro: string
  includes: readonly string[]
  faqs: readonly { q: string; a: string }[]
}

// Chinese copy for the service pages. Metadata and structured data stay in English.
export const SERVICES_ZH: Record<Service['slug'], ServiceText> = {
  'custom-homes': {
    name: '墨尔本定制住宅建造',
    shortName: '定制住宅',
    intro:
      '我们在墨尔本各区建造独立设计的家庭住宅，根据您的需求、地块条件和预算量身打造。由一个负责到底的团队统筹设计协调、建筑许可、施工和交付。',
    includes: [
      '评估您的需求、地块与预算',
      '与您的建筑师、结构工程师和建筑测量师协调',
      '固定总价或成本加成（cost-plus）建筑合同',
      '全面的施工管理与现场监督',
      '每个阶段的高端装修与质量检查',
      '交付、缺陷保修期及后续支持',
    ],
    faqs: [
      {
        q: '在墨尔本建一栋定制住宅需要多长时间？',
        a: '大多数双层定制住宅从开工到交付需要 12 到 18 个月，具体取决于面积、设计复杂程度和天气。在此之前还需要完成规划和许可审批。',
      },
      {
        q: '可以使用我自己的建筑师吗？',
        a: '可以。我们经常按照独立建筑师和设计师的图纸施工，也可以为您介绍我们信任的设计师。',
      },
      {
        q: '你们在哪些区域施工？',
        a: '我们的项目遍布墨尔本，包括东区和东南区，例如 Hawthorn、Balwyn、Box Hill、Doncaster、Templestowe、Carnegie 和 Murrumbeena。',
      },
    ],
  },
  'townhouse-developments': {
    name: '联排别墅与多单元开发',
    shortName: '联排别墅开发',
    intro:
      '我们为墨尔本各地的业主和开发商建造双拼（dual-occupancy）、联排别墅及多单元住宅项目。我们注重工期、成本控制和完工品质，让每个单元都更易于出售或出租。',
    includes: [
      '可行性分析与可建造性评估',
      '城市规划与开发管理支持',
      '建筑许可协调',
      '分阶段施工计划与成本报告',
      '分户（subdivision）及公用设施部门协调',
      '交付即可出售或出租',
    ],
    faqs: [
      {
        q: '规划许可获批之前你们能提供帮助吗？',
        a: '可以。尽早让建筑商参与，可以在提交市政府之前就确保设计已经核算成本并且可以建造，避免日后代价高昂的重新设计。',
      },
      {
        q: '开发项目可以采用成本加成合同吗？',
        a: '可以。我们提供账目公开、报告清晰的成本加成合同，也提供固定总价合同。',
      },
    ],
  },
  renovations: {
    name: '墨尔本房屋翻新',
    shortName: '房屋翻新',
    intro:
      '我们用心翻新墨尔本的现有住宅，从单个房间的升级到整栋房屋的改造，采用高端装修材料，并保持施工现场整洁有序。',
    includes: ['整栋或局部翻新', '厨房、浴室和起居空间升级', '结构改动与格局调整', '遗产保护建筑的相关工程', '按需协调许可审批'],
    faqs: [
      {
        q: '翻新期间我们可以继续住在房子里吗？',
        a: '这取决于工程范围。较小的翻新通常可以。我们会在规划阶段如实告知，并分阶段施工以减少对您生活的影响。',
      },
    ],
  },
  extensions: {
    name: '墨尔本房屋加建',
    shortName: '房屋加建',
    intro: '我们负责协调设计并建造首层及二层加建，使新空间与原有房屋自然融合，让您无需搬家就能获得家庭所需的空间。',
    includes: ['首层及后院加建', '加建二层', '结构设计与许可协调', '新旧装修无缝衔接'],
    faqs: [
      {
        q: '在维州加建房屋需要建筑许可吗？',
        a: '几乎都需要。部分加建还需要规划许可。我们会代您协调建筑测量师和各项许可。',
      },
    ],
  },
  'knockdown-rebuild': {
    name: '墨尔本推倒重建',
    shortName: '推倒重建',
    intro:
      '喜欢您的街区，却不满意现在的房子？我们全程负责推倒重建：拆除、许可、设计协调，并在您现有的地块上建造一栋全新的定制住宅。',
    includes: ['场地评估与拆除协调', '断开公用设施与公共资产保护', '设计协调与建筑许可', '建造您的全新定制住宅'],
    faqs: [
      {
        q: '推倒重建比大规模翻新更便宜吗？',
        a: '通常费用相当甚至更划算，尤其是需要结构维修的老房子。我们可以针对您的房产比较两种方案。',
      },
    ],
  },
}

// Service copy in the visitor's language.
export function serviceText(service: Service, locale: 'en' | 'zh'): ServiceText {
  return locale === 'zh' ? SERVICES_ZH[service.slug] : service
}
