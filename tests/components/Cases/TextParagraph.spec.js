import TextParagraph from '@/components/Cases/TextParagraph'
import { render, screen } from '@testing-library/vue'

const props = {
  color: 'rgb(0, 0, 0)',
}

const slots = {
  default: 'Main Content',
}

describe('TextParagraph component', () => {
  it('should render correctly', () => {
    const { container } = render(TextParagraph, {
      props,
      slots,
    })

    expect(screen.getByText(slots.default).style.color).toBe(props.color)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without colour props', () => {
    render(TextParagraph, {
      slots,
    })

    expect(screen.getByText(slots.default).style.color).toBe('')
  })
})
