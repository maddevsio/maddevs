import Footer from '@/components/Cases/shared/CaseFooter'
import { render } from '@testing-library/vue'

describe('CaseFooter component', () => {
  it('should render correctly', () => {
    const { container } = render(Footer, {
      slots: {
        default: 'Main Content',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should have correct data in slot', () => {
    const { html } = render(Footer, {
      slots: {
        default: 'Main Content',
      },
    })
    expect(html()).toContain('Main Content')
  })
})
