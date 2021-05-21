import { render, screen } from '@testing-library/vue'
import MainServices from '@/pages/services'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'We deliver software engineering and mobile app development services, DevOps and IT consulting services to businesses of any size.',
  'og:url': 'https://maddevs.io/services/',
  'og:type': 'website',
  'og:site_name': 'Mad Devs: Software & Mobile App Development Company',
  'og:title': 'Custom Software Development Services | Mad Devs',
  'og:description': 'We deliver software engineering and mobile app development services, DevOps and IT consulting services to businesses of any size.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Custom Software Development Services | Mad Devs',
  'twitter:description': 'We deliver software engineering and mobile app development services, DevOps and IT consulting services to businesses of any size.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/services/',
}

const stubs = ['ClientOnly', 'NuxtLink']

describe('Services page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    render(MainServices, {
      stubs,
    })

    expect(screen.getByText(/Get your trusted IT partner/i)).toBeTruthy()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainServices, {
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
