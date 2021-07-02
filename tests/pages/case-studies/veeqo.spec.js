import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Veeqo from '@/pages/case-studies/veeqo'

const DESCRIPTION = 'Infrastructure Case Study: How to optimize and reduce infrastructure costs? Read Veeqo’s story of optimizing the costs along with improving the system’s performance.'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs: Software & Mobile App Development Company | Blog Author',
  'og:url': 'https://maddevs.io/case-studies/veeqo/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Veeqo an inventory management platform for e-commerce',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/veeqo-case.jpg',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Veeqo an inventory management platform for e-commerce',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/veeqo-case.jpg',
  'twitter:url': 'https://maddevs.io/case-studies/veeqo/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Veeqo an Inventory Management Platform for E-commerce", "description": "Infrastructure Case Study: How to optimize and reduce infrastructure costs? Read Veeqo’s story of optimizing the costs along with improving the system’s performance.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/blog.png',
}

const stubs = ['NuxtLink', 'Main']

describe('Veeqo root component', () => {
  it('should render correctly', () => {
    const { container } = render(Veeqo, {
      mocks,
      stubs,
    })

    expect(screen.getByText('Optimization for Veeqo')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Veeqo, {
      mocks,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
