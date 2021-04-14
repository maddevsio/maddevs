import { render, screen } from '@testing-library/vue'
import MainGdpr from '@/pages/gdpr'
import { shallowMount } from '@vue/test-utils'

const META_DATA = {
  description: 'Mad Devs’ General Data Protection Regulation (GDPR) Compliance Commitment.',
  'og:url': 'https://maddevs.io/gdpr/',
  'og:type': 'website',
  'og:title': 'Mad Devs GDPR Compliance',
  'og:description': 'Mad Devs’ General Data Protection Regulation (GDPR) Compliance Commitment.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
}

describe('Gdpr page', () => {
  it('should render correctly', () => {
    render(MainGdpr, {})

    expect(screen.getByText(/Compliance Commitment/i).className).toBe('gdpr__title')
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainGdpr, {})

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
