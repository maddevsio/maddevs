import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import { render } from '@testing-library/vue'

describe('FooterNavbar component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterNavbar)

    expect(container).toMatchSnapshot()
  })

  it('should render with current year', () => {
    const { html } = render(FooterNavbar)

    expect(html()).toContain(` © Mad Devs - ${new Date().getFullYear()}`)
  })
})
