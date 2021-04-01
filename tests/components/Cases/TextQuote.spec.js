import TextQuote from '@/components/Cases/TextQuote'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('TextQuote component', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuote, {
      slots,
    })

    expect(screen.getByText(slots.default).innerHTML).toBe(slots.default)
    expect(container).toMatchSnapshot()
  })
})
