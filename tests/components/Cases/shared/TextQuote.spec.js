import TextQuote from '@/components/Cases/shared/TextQuote'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

const props = {
  author: 'Andrew Sapozhnikov, Head of DevOps at Mad Devs',
}

describe('TextQuote', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuote, {
      slots,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(TextQuote, {
      slots,
      props,
    })

    expect(html()).toContain(slots.default)
  })

  it('should render with author block', () => {
    render(TextQuote, {
      slots,
      props,
    })

    expect(screen.queryByText(props.author)).toBeTruthy()
  })

  it('should render without author block', () => {
    render(TextQuote, {
      slots,
    })

    expect(screen.queryByText(props.author)).toBeFalsy()
  })
})
