import { render, screen } from '@testing-library/vue'
import MainProjects from '@/pages/projects.vue'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',
  'og:url': 'https://maddevs.io/projects/',
  'og:type': 'website',
  'og:title': 'Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects',
  'og:description': 'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
}

const stubs = ['nuxt-link', 'NuxtLink']
const mocks = {
  $nuxt: {
    $emit: jest.fn(),
  },
}

describe('projects page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(MainProjects, {
      stubs,
      mocks,
    })

    expect(screen.getByText(/Check out our/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
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