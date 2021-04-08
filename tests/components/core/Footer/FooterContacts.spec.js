import FooterContacts from '@/components/core/Footer/FooterContacts'
import { render, screen } from '@testing-library/vue'

describe('FooterContacts component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterContacts)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(FooterContacts)

    expect(screen.getByText(/Text us:/i)).toBeTruthy()
  })
})
