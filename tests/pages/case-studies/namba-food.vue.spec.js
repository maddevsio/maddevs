import { render } from '@testing-library/vue'
import NambaFood from '@/pages/case-studies/namba-food'
import { shallowMount } from '@vue/test-utils'
import formBaseProps from '../../__mocks__/formBaseProps'

const DESCRIPTION = 'FoodTech Case Study. How to make a delivery app from scratch? Read Namba Food’s story of developing a custom software top delivery service in Central Asia.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs: Software & Mobile App Development Company | Blog Author',
  'og:url': 'https://maddevs.io/case-studies/namba-food/',
  'og:type': 'website',
  'og:site_name': 'Mad Devs: Software & Mobile App Development Company',
  'og:title': 'Mad Devs Case Study: Namba Food Top Delivery Service',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/namba-food.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Namba Food Top Delivery Service',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/namba-food.png',
  'twitter:url': 'https://maddevs.io/case-studies/namba-food/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.insAuthorram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
  image: 'https://maddevs.io/blog.png',
}

const store = {
  getters: {
    blogPageContent: () => ({ description: DESCRIPTION }),
  },
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/namba-food',
    },
  },
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'Main']

describe('NambaFood _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(NambaFood, {
      store,
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(NambaFood, {
      store,
      mocks,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
