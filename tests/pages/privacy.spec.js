import { render, screen } from '@testing-library/vue'
import MainPrivacy from '@/pages/privacy'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Mad Devs’ Privacy Policy: Website Acceptable Use Terms.',
  'og:url': 'https://maddevs.io/privacy/',
  'og:type': 'website',
  'og:title': 'Mad Devs Privacy Policy',
  'og:description': 'Mad Devs’ Privacy Policy: Website Acceptable Use Terms.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
}

describe('Privacy page', () => {
  it('should render correctly', () => {
    render(MainPrivacy, {
    })

    expect(screen.getByText(/Privacy Policy: Website/i)).toBeTruthy()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainPrivacy, {
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
