import TextQuoteBox from '@/components/Cases/TextQuoteBox'
import { render } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('TextQuoteBox', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuoteBox, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(TextQuoteBox, {
      slots,
    })

    expect(html()).toContain(slots.default)
  })
})
