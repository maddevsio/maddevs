import TextQuote from '@/components/Cases/shared/TextQuote'
import { render } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('TextQuote component', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuote, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })
})
