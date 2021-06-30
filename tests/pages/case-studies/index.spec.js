import { render } from '@testing-library/vue'
import Index from '@/pages/case-studies/index'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'og:url': 'https://maddevs.io/case-studies/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Custom Software Development Company',
  'og:description': 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Custom Software Development Company',
  'twitter:description': 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/case-studies/',
}

const stubs = ['TitleDesc', 'CasesList', 'Customers', 'BuildDevTeam']

const mocks = {
  $lazyLoad: {
    init: jest.fn(),
  },
}

describe('Index page', () => {
  it('should render correctly', () => {
    const { container } = render(Index, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Index, {
      stubs,
      mocks,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
