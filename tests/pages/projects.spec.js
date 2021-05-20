import { render, screen } from '@testing-library/vue'
import MainProjects from '@/pages/projects'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Check out our software and mobile app solutions for companies from transportation, logistic, edtech, cloudtech, security, advertising, and finance industries.',
  'og:url': 'https://maddevs.io/projects/',
  'og:type': 'website',
  'og:site_name': 'Mad Devs: Software & Mobile App Development Company',
  'og:title': 'Key Customers, Case Studies and Open Source Projects | Mad Devs',
  'og:description': 'Check out our software and mobile app solutions for companies from transportation, logistic, edtech, cloudtech, security, advertising, and finance industries.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Key Customers, Case Studies and Open Source Projects | Mad Devs',
  'twitter:description': 'Check out our software and mobile app solutions for companies from transportation, logistic, edtech, cloudtech, security, advertising, and finance industries.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/projects/',
}

const mocks = {
  $nuxt: {
    $emit: jest.fn(),
  },
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: () => {},
  },
}

const stubs = ['client-only', 'NuxtLink']

describe('Projects page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    render(MainProjects, {
      stubs,
      mocks,
    })

    expect(screen.getByText(/Check out our/i)).toBeTruthy()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainProjects, {
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
