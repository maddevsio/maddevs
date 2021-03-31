export const meta = {
  index: {
    title: 'Mad Devs: Custom Software Development Company',
    description:
      'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
    url: 'https://maddevs.io/',
  },
  careers: {
    title: 'Mad Devs Careers: Work with Us',
    description:
      'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in software engineering, DevOps, or mobile app development.',
    url: 'https://maddevs.io/careers/',
  },
  faq: {
    title: 'Mad Devs: Frequently Asked Questions',
    description:
      "FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs' team, expertise, pricing, and more.",
    url: 'https://maddevs.io/faq/',
  },
  gdpr: {
    title: 'Mad Devs GDPR Compliance',
    description: 'Mad Devs’ General Data Protection Regulation (GDPR) Compliance Commitment.',
    url: 'https://maddevs.io/gdpr/',
  },
  nda: {
    title: 'Mad Devs: Work Under NDA',
    description: 'Non-Disclosure Agreement at Mad Devs',
    url: 'https://maddevs.io/nda/',
  },
  privacy: {
    title: 'Mad Devs Privacy Policy',
    description: 'Mad Devs’ Privacy Policy: Website Acceptable Use Terms.',
    url: 'https://maddevs.io/privacy/',
  },
  projects: {
    title: 'Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects',
    description:
      'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',
    url: 'https://maddevs.io/projects/',
  },
  services: {
    title: 'Mad Devs: Custom Software Development and Mobile App Creation Services',
    description:
      'We deliver software engineering and mobile app development services, software testing and QA services, DevOps and IT consulting services to businesses of any size.',
    url: 'https://maddevs.io/services/',
  },
  godee: {
    title: 'Mad Devs Case Study: GoDee - Convenient Shuttle Bus Service',
    description:
      'Case Study Shuttle Bus Service. Read GoDee’s story on building a public transportation app for passengers and drivers and a monitoring system for admins in Vietnam.',
    url: 'https://maddevs.io/case-studies/godee/',
  },
  nambafood: {
    title: 'Mad Devs Case Study: Namba Food Top Delivery Service',
    description:
      'FoodTech Case Study. How to make a delivery app from scratch? Read Namba Food’s story of developing a custom software top delivery service in Central Asia.',
    url: 'https://maddevs.io/case-studies/namba-food/',
  },
  sjmc: {
    title: 'Mad Devs Case Study: Sir John Monash Centre',
    description:
      'BYOD Case Study. Read how Mad Devs enhanced and developed new features for the Sir John Monash Centre’s software, mobile applications, and technological debt.',
  },
}

export const getMetadata = key => meta[key] || {}

export const buildHead = ({ title, description, url, image = 'https://maddevs.io/Open-Graph.png' }) => ({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
  ],
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML:
        '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
    },
  ],
})
