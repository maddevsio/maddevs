import FooterNavbarMobile from '@/components/core/Footer/FooterNavbarMobile'
import { render } from '@testing-library/vue'

describe('FooterNavbarMobile component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterNavbarMobile)

    expect(container).toMatchSnapshot()
  })

  it('should render with current year', () => {
    const { html } = render(FooterNavbarMobile)

    expect(html()).toContain(` © Mad Devs - ${new Date().getFullYear()}`)
  })
})
