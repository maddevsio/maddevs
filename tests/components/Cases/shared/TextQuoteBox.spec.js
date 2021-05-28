import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

const props = {
  author: 'Andrew Sapozhnikov, Head of DevOps at Mad Devs',
}

describe('TextQuoteBox', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuoteBox, {
      slots,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(TextQuoteBox, {
      slots,
      props,
    })

    expect(html()).toContain(slots.default)
  })

  it('should render with author block', () => {
    render(TextQuoteBox, {
      slots,
      props,
    })

    expect(screen.queryByText(props.author)).toBeTruthy()
  })

  it('should render without author block', () => {
    render(TextQuoteBox, {
      slots,
    })

    expect(screen.queryByText(props.author)).toBeFalsy()
  })
})
