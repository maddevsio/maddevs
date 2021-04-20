import { render, screen } from '@testing-library/vue'
import Mainnda from '@/pages/nda'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
  'og:url': 'https://maddevs.io/nda/',
  'og:type': 'website',
  'og:title': 'Mad Devs: Work Under NDA',
  'og:description': 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
}

describe('Nda page', () => {
  it('should render correctly', () => {
    render(Mainnda, {
    })

    expect(screen.getByText(/All staff members, including contractors and consultants working for/i)).toBeTruthy()
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
