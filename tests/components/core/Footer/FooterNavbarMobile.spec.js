import FooterNavbarMobile from '@/components/core/Footer/FooterNavbarMobile'
import { render } from '@testing-library/vue'

const stubs = ['client-only', 'NuxtLink']

describe('FooterNavbarMobile component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterNavbarMobile, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with current year', () => {
    const { html } = render(FooterNavbarMobile, {
      stubs,
    })

    expect(html()).toContain(` © Mad Devs - ${new Date().getFullYear()}`)
  })
})
