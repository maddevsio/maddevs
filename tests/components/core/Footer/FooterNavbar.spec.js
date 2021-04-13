import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import { render } from '@testing-library/vue'

const stubs = ['client-only', 'NuxtLink']

describe('FooterNavbar component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterNavbar, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with current year', () => {
    const { html } = render(FooterNavbar, {
      stubs,
    })

    expect(html()).toContain(` © Mad Devs - ${new Date().getFullYear()}`)
  })
})
