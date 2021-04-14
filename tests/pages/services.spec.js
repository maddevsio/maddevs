import { render, screen } from '@testing-library/vue'
import MainServices from '@/pages/services'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'We deliver software engineering and mobile app development services, software testing and QA services, DevOps and IT consulting services to businesses of any size.',
  'og:url': 'https://maddevs.io/services/',
  'og:type': 'website',
  'og:title': 'Mad Devs: Custom Software Development and Mobile App Creation Services',
  'og:description': 'We deliver software engineering and mobile app development services, software testing and QA services, DevOps and IT consulting services to businesses of any size.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
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
