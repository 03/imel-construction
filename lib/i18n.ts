export type Locale = 'en' | 'zh'

const en = {
    localeName: 'English',
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Start a project',
    },
    company: {
      name: 'IMEL Construction Pty Ltd',
      short: 'IMEL Construction',
      tagline: 'Building Quality. Delivering Confidence.',
    },
    home: {
      eyebrow: 'Building Quality. Delivering Confidence. — Est. 2021',
      heroTitle: 'Melbourne Builders for Custom Homes, Townhouses & Renovations',
      heroBody:
        'IMEL Construction Pty Ltd is a Melbourne-based residential construction company delivering custom homes, townhouse developments, renovations and extensions with professionalism, integrity and attention to detail.',
      heroPrimary: 'Discuss your project',
      heroSecondary: 'View our portfolio',
      heroImageAlt:
        'Recently completed contemporary Melbourne home',
      stats: [
        { value: '2021', label: 'Established in Melbourne' },
        { value: 'End-to-end', label: 'Design through handover' },
        { value: 'One point', label: 'Of contact per project' },
        { value: '100%', label: 'Australian standards compliant' },
      ],
      aboutEyebrow: 'About us',
      aboutTitle: 'A builder trusted by homeowners, investors and developers',
      aboutBody: [
        'Established in 2021, IMEL Construction Pty Ltd is committed to delivering high-quality building solutions with professionalism, integrity, and attention to detail. Since our establishment we have built a strong reputation for reliable construction services tailored to the unique needs of homeowners, investors and property developers.',
        'We specialise in custom homes, multi-unit townhouse developments, home renovations and extensions, delivering projects that combine practical functionality with exceptional craftsmanship. Whether building a new family home, transforming an existing property, or developing multi-residential projects, our experienced team is dedicated to achieving outstanding results from concept to completion.',
      ],
      aboutImageAlt:
        'Precisely built timber wall framing on a clean concrete slab at a residential construction site',
      dmEyebrow: 'Design & Development Management',
      dmTitle: 'One team coordinating every stage of your development',
      dmBody:
        'Beyond construction, IMEL Construction offers comprehensive Design and Development Management Services. We work closely with architects, designers, engineers, consultants and local authorities to coordinate every stage of the development process — giving clients a single point of contact for the entire project lifecycle.',
      dmPoints: [
        'Planning and design management',
        'Permit coordination',
        'Project administration',
        'Construction management',
        'Cost control and reporting',
        'Final handover',
      ],
      servicesEyebrow: 'Our services',
      servicesTitle: 'Complete residential construction and development delivery',
      services: [
        {
          title: 'Custom Residential Homes',
          body: 'Individually designed family homes built to your brief, site and budget.',
        },
        {
          title: 'Multi-Unit Townhouse Developments',
          body: 'Multi-residential developments delivered with disciplined programming and cost control.',
        },
        {
          title: 'Home Renovations',
          body: 'Thoughtful transformation of existing homes with premium finishes.',
        },
        {
          title: 'Home Extensions',
          body: 'Additional living space integrated seamlessly with the existing dwelling.',
        },
        {
          title: 'Knockdown & Rebuild Projects',
          body: 'Replace an ageing home with a new build on the land you already love.',
        },
        {
          title: 'Design Coordination',
          body: 'Architects, designers, engineers and consultants aligned from day one.',
        },
        {
          title: 'Town Planning & Development Management',
          body: 'Planning strategy and authority liaison through to approval.',
        },
        {
          title: 'Building Permit Coordination',
          body: 'Documentation, surveyors and permits managed on your behalf.',
        },
        {
          title: 'Construction Project Management',
          body: 'Programme, trades, quality and site safety actively managed.',
        },
        {
          title: 'Cost Plus Building Contracts',
          body: 'Transparent, open-book contracting with clear reporting.',
        },
        {
          title: 'End-to-End Project Delivery',
          body: 'A single accountable team from first concept to final handover.',
        },
      ],
      whyEyebrow: 'Why choose IMEL',
      whyTitle: 'Careful planning, transparent communication, exceptional workmanship',
      whyBody:
        'At IMEL Construction we believe every project deserves careful planning, transparent communication and exceptional workmanship. Our commitment is built upon:',
      whyPoints: [
        'Professional and personalised service',
        'Quality workmanship and premium finishes',
        'Honest and transparent project management',
        'Strong relationships with trusted trades and consultants',
        'Efficient project delivery from design through construction',
        'Compliance with all relevant Australian building standards and regulations',
      ],
      visionLabel: 'Our vision',
      visionBody:
        "To become one of Melbourne's trusted residential builders by consistently delivering homes and developments that exceed our clients' expectations in quality, value, and service.",
      missionLabel: 'Our mission',
      missionBody:
        'To provide a complete construction and development solution that simplifies the building process while delivering outstanding quality, innovative solutions, and long-term value for every client.',
      ctaTitle: 'Passionate about turning ideas into reality',
      ctaBody:
        'From the initial concept through planning, construction and final completion, we are committed to delivering projects our clients can be proud of for years to come.',
      ctaButton: 'Talk to our team',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Selected projects',
      intro:
        'A snapshot of the work we deliver across Melbourne — custom homes, townhouse developments, renovations and extensions.',
      filtersLabel: 'Project types',
      filters: ['All', 'Custom Homes', 'Townhouses', 'Renovations', 'Extensions'],
      placeholderLabel: 'Project photography coming soon',
      projects: [
        { title: 'Home Renovation', meta: '369 Auburn road Hawthorn', start: 'Jan 2026', finish: 'May 2026', type: 'Renovations', imageAddr: '369AuburnRd_Hawthorn', numOfImages: 30,
          description: 'A complete home renovation project delivered by IMEL Construction. The works included demolition through to full construction and finishing, with the project completed within 6 months and handed over as a turnkey home.' },
        { title: 'Custom Home', meta: '5 Gerald st Murrumbeena', start: 'Jul 2025', finish: 'Jun 2026', type: 'Custom Homes', imageAddr: '5GeraldSt_Murrumbeena', numOfImages: 15},
        { title: 'Custom Home', meta: '22 Sheahans road Templestowe Lower', start: 'Aug 2022', finish: 'Jul 2023', type: 'Custom Homes', imageAddr: '22SheahansRd_TemplestoweLower', numOfImages: 22 },
        { title: 'Custom Home', meta: '1 Verdi court, Templestowe ', start: 'Nov 2021', finish: 'May 2023', type: 'Custom Homes', imageAddr: '1VerdiCourt_Templestowe', numOfImages: 10 },
        { title: 'Custom Home', meta: '1305 Glen huntly road Carnegie', start: 'Feb 2021', finish: 'Mar 2022', type: 'Custom Homes', imageAddr: '1305GlenHuntlyRd_Carnegie', numOfImages: 11 },
        { title: 'Custom Home', meta: '15 Coolabah st Doncaster', start: 'Mar 2020', finish: 'Apr 2021', type: 'Custom Homes', imageAddr: '15CoolabahSt_Doncaster', numOfImages: 13 },
        { title: 'Custom Home', meta: '46 Yongala st Balwyn', start: 'Mar 2020', finish: 'Apr 2021', type: 'Custom Homes', imageAddr: '46YongalaSt_Balwyn', numOfImages: 19,
          description: 'A stunning French Provincial-style residential project delivered by IMEL Construction from start to finish. The project was completed over approximately 12 months, with our team managing the construction process, quality, trades and finishes to achieve a high-quality bespoke family home.' },
        { title: 'Custom Home', meta: '89 Clyde st Box Hill', start: 'Feb 2020', finish: 'Feb 2021', type: 'Custom Homes', imageAddr: '89ClydeSt_Boxhill', numOfImages: 8 },
        // { title: 'Townhouse Development', meta: 'Melbourne, VIC', type: 'Townhouses' },
        // { title: 'Full Home Renovation', meta: 'Melbourne, VIC', type: 'Renovations' },
        // { title: 'Rear Extension', meta: 'Melbourne, VIC', type: 'Extensions' },
        // { title: 'Knockdown & Rebuild', meta: 'Melbourne, VIC', type: 'Custom Homes' },
        // { title: 'Multi-Unit Development', meta: 'Melbourne, VIC', type: 'Townhouses' },
      ],
      processTitle: 'How a project runs',
      process: [
        { step: '01', title: 'Consultation', body: 'We review your brief, site, budget and timeframe.' },
        { step: '02', title: 'Design & planning', body: 'Design coordination, planning and permit management.' },
        { step: '03', title: 'Construction', body: 'Programmed, supervised construction with quality checks.' },
        { step: '04', title: 'Handover', body: 'Final inspections, documentation and warranty support.' },
      ],
      ctaTitle: 'Have a site or a set of plans?',
      ctaBody: 'Send us the details and we will come back to you with the next steps.',
      ctaButton: 'Enquire now',
      viewProject: 'View project',
      backToPortfolio: 'All projects',
      projectIn: 'in',
      startLabel: 'Start',
      finishLabel: 'Finish',
      photosLabel: 'photos',
      projectBody:
        'A new custom home built by IMEL Construction in {suburb}, Melbourne. We managed the project from site start through construction to handover.',
      moreProjects: 'More projects',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your build',
      intro:
        'Tell us about your project — new home, townhouse development, renovation or extension. We will respond with a clear view of the next steps.',
      detailsTitle: 'Company details',
      addressLabel: 'Office',
      addressValue: 'Melbourne, Victoria, Australia',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      hoursValue: 'Monday – Friday, 9:00am – 5:00pm AEST',
      acnLabel: 'ACN',
      licenceLabel: 'Building licence',
      placeholderNote:
        'Placeholder details — replace with your registered address, phone, ABN and building licence number.',
      formTitle: 'Project enquiry',
      formNote:
        'This form opens your email application with the details pre-filled, so nothing is stored on this website.',
      fields: {
        name: 'Name',
        email: 'Email address',
        phone: 'Phone',
        type: 'Project type',
        suburb: 'Project suburb',
        message: 'Project details',
      },
      sendReply: {
        heading: 'Message Sent!',
        message: 'Thank you for reaching out. We will get back to you shortly.'
      },
      typeOptions: [
        'Custom home',
        'Townhouse development',
        'Renovation',
        'Extension',
        'Knockdown & rebuild',
        'Development management',
        'Other',
      ],
      messagePlaceholder: 'Tell us about the site, stage of design, budget range and timeframe.',
      submit: 'Send enquiry',
      serviceAreaTitle: 'Service area',
      serviceAreaBody:
        'We build across metropolitan Melbourne and surrounding suburbs. If you are unsure whether your site is within our area, get in touch and we will let you know.',
    },
    footer: {
      blurb:
        'Melbourne-based residential construction and development management. Custom homes, townhouses, renovations and extensions.',
      navTitle: 'Site',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      languageTitle: 'Language',
      rights: 'All rights reserved.',
      switchTo: 'Switch language to',
    },
}

export type Dictionary = typeof en

// @ts-ignore
// @ts-ignore
const zh: Dictionary = {
    localeName: '中文',
    nav: {
      home: '首页',
      portfolio: '项目案例',
      contact: '联系我们',
      cta: '开始项目咨询',
    },
    company: {
      name: 'IMEL Construction Pty Ltd（艾梅建筑）',
      short: 'IMEL Construction',
      tagline: '品质建造，值得信赖。',
    },
    home: {
      eyebrow: '品质建造，值得信赖 — 成立于 2021 年',
      heroTitle: '墨尔本住宅建筑商：定制住宅、联排别墅与房屋翻新',
      heroBody:
        'IMEL Construction Pty Ltd 是一家位于墨尔本的住宅建筑公司，以专业、诚信和对细节的重视，提供定制住宅、联排别墅开发、房屋翻新与加建服务。',
      heroPrimary: '咨询您的项目',
      heroSecondary: '查看项目案例',
      heroImageAlt: '刚刚完工的墨尔本现代住宅',
      stats: [
        { value: '2021', label: '于墨尔本成立' },
        { value: '全流程', label: '从设计到交付' },
        { value: '单一', label: '项目对接联系人' },
        { value: '100%', label: '符合澳洲建筑规范' },
      ],
      aboutEyebrow: '关于我们',
      aboutTitle: '业主、投资者与开发商信赖的建筑伙伴',
      aboutBody: [
        'IMEL Construction Pty Ltd 成立于 2021 年，致力于以专业、诚信和严谨的细节把控，提供高品质的建筑解决方案。成立以来，我们凭借可靠的施工服务，赢得了业主、投资者与房地产开发商的良好口碑。',
        '我们专注于定制住宅、多单元联排别墅开发、房屋翻新与加建工程，让项目兼具实用性与卓越工艺。无论是建造全新家庭住宅、改造现有物业，还是开发多户住宅项目，我们经验丰富的团队都致力于从概念到竣工交付出色成果。',
      ],
      aboutImageAlt: '住宅施工现场整齐精准的木结构墙体框架与干净的混凝土地坪',
      dmEyebrow: '设计与开发管理',
      dmTitle: '一个团队，统筹开发的每一个阶段',
      dmBody:
        '除施工之外，IMEL Construction 还提供全面的设计与开发管理服务。我们与建筑师、设计师、工程师、顾问及地方政府部门紧密协作，统筹开发流程的每个阶段，让客户在整个项目周期中只需对接一个联系人。',
      dmPoints: [
        '规划与设计管理',
        '施工许可协调',
        '项目行政管理',
        '施工管理',
        '成本控制与报告',
        '竣工交付',
      ],
      servicesEyebrow: '服务范围',
      servicesTitle: '完整的住宅建造与开发交付服务',
      services: [
        { title: '定制住宅', body: '根据您的需求、地块条件与预算，量身设计建造家庭住宅。' },
        { title: '多单元联排别墅开发', body: '以严谨的工期安排与成本控制交付多户住宅开发项目。' },
        { title: '房屋翻新', body: '以优质饰面精心改造现有住宅。' },
        { title: '房屋加建', body: '新增居住空间，与原有建筑自然衔接。' },
        { title: '推倒重建项目', body: '在您熟悉的地块上，用全新住宅取代老旧房屋。' },
        { title: '设计协调', body: '建筑师、设计师、工程师与顾问从第一天起同步协作。' },
        { title: '城市规划与开发管理', body: '规划策略与政府部门沟通，直至获得审批。' },
        { title: '建筑许可协调', body: '代为处理图纸文件、验房师与各类许可申请。' },
        { title: '施工项目管理', body: '主动管理工期、分包、质量与工地安全。' },
        { title: '成本加成建筑合同', body: '透明的开放式账目合同与清晰的费用报告。' },
        { title: '端到端项目交付', body: '从概念构思到最终交付，由一个负责到底的团队完成。' },
      ],
      whyEyebrow: '为何选择 IMEL',
      whyTitle: '周密规划、透明沟通、卓越工艺',
      whyBody:
        '在 IMEL Construction，我们相信每个项目都值得周密的规划、透明的沟通与卓越的工艺。我们的承诺建立在以下基础之上：',
      whyPoints: [
        '专业且个性化的服务',
        '优质工艺与高端饰面',
        '诚实透明的项目管理',
        '与可靠分包及顾问团队的稳固合作',
        '从设计到施工的高效交付',
        '严格遵守澳洲相关建筑标准与法规',
      ],
      visionLabel: '我们的愿景',
      visionBody:
        '成为墨尔本值得信赖的住宅建筑商之一，持续交付在品质、价值与服务上超越客户期望的住宅与开发项目。',
      missionLabel: '我们的使命',
      missionBody:
        '提供完整的建造与开发解决方案，简化建房流程，同时为每一位客户带来出色的品质、创新的方案与长期价值。',
      ctaTitle: '热忱地将构想变为现实',
      ctaBody:
        '从最初的概念，到规划、施工与最终竣工，我们致力于交付让客户多年后依然引以为傲的项目。',
      ctaButton: '联系我们的团队',
    },
    portfolio: {
      eyebrow: '项目案例',
      title: '精选项目',
      intro:
        '这是我们在墨尔本各区交付作品的概览 — 定制住宅、联排别墅开发、翻新与加建工程。',
      filtersLabel: '项目类型',
      filters: ['全部', '定制住宅', '联排别墅', '房屋翻新', '房屋加建'],
      placeholderLabel: '项目实拍照片即将上线',
      projects: [
        { title: '房屋翻新', meta: '369 Auburn road Hawthorn', start: 'Jan 2026', finish: 'May 2026', type: 'Renovations', imageAddr: '369AuburnRd_Hawthorn', numOfImages: 30,
          description: '由 IMEL Construction 交付的整体住宅翻新项目。工程涵盖从拆除到全面施工及装修收尾的全过程，项目在 6 个月内完工，并以拎包入住的交钥匙形式交付。' },
        { title: '定制住宅', meta: '5 Gerald st Murrumbeena', start: 'Jul 2025', finish: 'Jun 2026', type: 'Custom Homes', imageAddr: '5GeraldSt_Murrumbeena', numOfImages: 15},
        { title: '定制住宅', meta: '22 Sheahans road Templestowe Lower', start: 'Aug 2022', finish: 'Jul 2023', type: 'Custom Homes', imageAddr: '22SheahansRd_TemplestoweLower', numOfImages: 22 },
        { title: '定制住宅', meta: '1 Verdi court, Templestowe ', start: 'Nov 2021', finish: 'May 2023', type: 'Custom Homes', imageAddr: '1VerdiCourt_Templestowe', numOfImages: 10 },
        { title: '定制住宅', meta: '1305 Glen huntly road Carnegie', start: 'Feb 2021', finish: 'Mar 2022', type: 'Custom Homes', imageAddr: '1305GlenHuntlyRd_Carnegie', numOfImages: 11 },
        { title: '定制住宅', meta: '15 Coolabah st Doncaster', start: 'Mar 2020', finish: 'Apr 2021', type: 'Custom Homes', imageAddr: '15CoolabahSt_Doncaster', numOfImages: 13 },
        { title: '定制住宅', meta: '46 Yongala st Balwyn', start: 'Mar 2020', finish: 'Apr 2021', type: 'Custom Homes', imageAddr: '46YongalaSt_Balwyn', numOfImages: 19,
          description: '由 IMEL Construction 从开工到竣工全程交付的法式乡村风格（French Provincial）精品住宅项目。项目历时约 12 个月完成，我们的团队全面管理施工流程、质量把控、各工种协调及装修收尾，打造出一座高品质的定制家庭住宅。' },
        { title: '定制住宅', meta: '89 Clyde st Box Hill', start: 'Feb 2020', finish: 'Feb 2021', type: 'Custom Homes', imageAddr: '89ClydeSt_Boxhill', numOfImages: 8 },
        /*{
          title: '定制住宅', meta: '维州 墨尔本', type: '定制住宅',
          start: "",
          finish: "",
          imageAddr: ""
        },
        {
          title: '联排别墅开发', meta: '维州 墨尔本', type: '联排别墅',
          start: "",
          finish: "",
          imageAddr: ""
        },
        {
          title: '住宅整体翻新', meta: '维州 墨尔本', type: '房屋翻新',
          start: "",
          finish: "",
          imageAddr: ""
        },
        {
          title: '后方加建工程', meta: '维州 墨尔本', type: '房屋加建',
          start: "",
          finish: "",
          imageAddr: ""
        },
        {
          title: '推倒重建项目', meta: '维州 墨尔本', type: '定制住宅',
          start: "",
          finish: "",
          imageAddr: ""
        },
        {
          title: '多单元开发项目', meta: '维州 墨尔本', type: '联排别墅',
          start: "",
          finish: "",
          imageAddr: ""
        },*/
      ],
      processTitle: '项目流程',
      process: [
        { step: '01', title: '初步沟通', body: '了解您的需求、地块、预算与时间安排。' },
        { step: '02', title: '设计与规划', body: '设计协调、规划审批与许可管理。' },
        { step: '03', title: '施工建造', body: '按计划推进施工，全程监理与质量检查。' },
        { step: '04', title: '竣工交付', body: '最终验收、文件移交与质保支持。' },
      ],
      ctaTitle: '已有地块或图纸？',
      ctaBody: '把项目资料发给我们，我们会尽快回复并说明下一步安排。',
      ctaButton: '立即咨询',
      viewProject: '查看项目',
      backToPortfolio: '全部项目',
      projectIn: '·',
      startLabel: '开工',
      finishLabel: '竣工',
      photosLabel: '张照片',
      projectBody:
        '由 IMEL Construction 在墨尔本 {suburb} 建造的全新定制住宅。我们负责从开工、施工到交付的全过程管理。',
      moreProjects: '更多项目',
    },
    contact: {
      eyebrow: '联系我们',
      title: '与我们聊聊您的建造计划',
      intro:
        '请告诉我们您的项目情况 — 新建住宅、联排别墅开发、翻新或加建。我们会回复并清晰说明下一步安排。',
      detailsTitle: '公司信息',
      addressLabel: '办公地址',
      addressValue: '澳大利亚 维多利亚州 墨尔本',
      phoneLabel: '电话',
      emailLabel: '邮箱',
      hoursLabel: '办公时间',
      hoursValue: '周一至周五 9:00 – 17:00（澳东时间）',
      acnLabel: '澳洲公司号码 (ACN)',
      licenceLabel: '建筑执照',
      placeholderNote: '以上为示例信息，请替换为公司注册地址、电话、ABN 与建筑执照编号。',
      formTitle: '项目咨询',
      formNote: '提交后将打开您的邮件客户端并自动填入内容，本网站不会保存任何信息。',
      fields: {
        name: '名字',
        email: '电子邮箱',
        phone: '联系电话',
        type: '项目类型',
        suburb: '项目所在区',
        message: '项目详情',
      },
      sendReply: {
        heading: '消息已发送!',
        message: '感谢您的联络，我们将尽快与您联系。'
      },
      typeOptions: [
        '定制住宅',
        '联排别墅开发',
        '房屋翻新',
        '房屋加建',
        '推倒重建',
        '开发管理',
        '其他',
      ],
      messagePlaceholder: '请简述地块情况、设计进度、预算范围与期望工期。',
      submit: '发送咨询',
      serviceAreaTitle: '服务区域',
      serviceAreaBody:
        '我们服务于墨尔本市区及周边各区。如不确定您的地块是否在服务范围内，欢迎联系我们确认。',
    },
    footer: {
      blurb:
        '位于墨尔本的住宅建造与开发管理公司，专注定制住宅、联排别墅、房屋翻新与加建。',
      navTitle: '网站导航',
      servicesTitle: '服务范围',
      contactTitle: '联系方式',
      languageTitle: '语言',
      rights: '版权所有。',
      switchTo: '切换语言至',
    },
}

export const dictionary: Record<Locale, Dictionary> = { en, zh }

export const contactDetails = {
  phone: '0433 750 622',
  phoneHref: 'tel:+61433750622',
  email: 'info@imelconstruction.com.au',
  acn: '654 783 025',
  licence: 'CDB-U 102211',
}
