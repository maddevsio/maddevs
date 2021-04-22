import CardSupportedGadgets from '@/components/Cases/yourcast/CardSupportedGadgets'
import { render, screen } from '@testing-library/vue'

const props = {
  title: 'title',
  width: 0,
  height: 0,
  file: 'macbook-pro',
  alt: 'alt',
}

describe('CardSupportedGadgets component', () => {
  it('should render correctly', () => {
    const { container } = render(CardSupportedGadgets, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardSupportedGadgets, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(screen.getByText(props.title).className).toContain('card-content_title case_title_h4')
  })
})
