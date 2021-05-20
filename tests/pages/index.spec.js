import { render, screen } from '@testing-library/vue'
import About from '@/pages/index'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
  'og:url': 'https://maddevs.io/',
  'og:type': 'website',
  'og:site_name': 'Mad Devs: Software & Mobile App Development Company',
  'og:title': 'Custom Software Development Company | Mad Devs',
  'og:description': 'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Custom Software Development Company | Mad Devs',
  'twitter:description': 'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/',
}

const stubs = ['client-only', 'NuxtLink']

describe('About page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    render(About, {
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
        $lazyLoad: {
          init: () => {},
        },
      },
    })

    expect(screen.getByText(/Your Growth/i)).toBeTruthy()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(About, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
        $lazyLoad: {
          init: () => {},
        },
      },
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
