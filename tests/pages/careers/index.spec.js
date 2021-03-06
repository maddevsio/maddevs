import { render } from '@testing-library/vue'
import Index from '@/pages/careers/index'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in cloud and software engineering.',
  'og:url': 'https://maddevs.io/careers/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Careers: Work with Us',
  'og:description': 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in cloud and software engineering.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Careers: Work with Us',
  'twitter:description': 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in cloud and software engineering.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/careers/',
}

const mocks = {
  $lazyLoad: {
    init: jest.fn(),
  },
  featureFlag: jest.fn(),
}

const stubs = ['Main']

describe('Index page', () => {
  it('should render correctly', () => {
    const { container } = render(Index, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Index, {
      mocks,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
