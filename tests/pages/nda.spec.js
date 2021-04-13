import { render, screen } from '@testing-library/vue'
import Mainnda from '@/pages/nda.vue'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Non-Disclosure Agreement at Mad Devs',
  'og:url': 'https://maddevs.io/nda/',
  'og:type': 'website',
  'og:title': 'Mad Devs: Work Under NDA',
  'og:description': 'Non-Disclosure Agreement at Mad Devs',
  'og:image': 'https://maddevs.io/Open-Graph.png',
}

describe('Nda page', () => {
  it('should render correctly', () => {
    const { container } = render(Mainnda, {
    })

    expect(screen.getByText(/All staff members, including contractors and consultants working for/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Mainnda, {
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
