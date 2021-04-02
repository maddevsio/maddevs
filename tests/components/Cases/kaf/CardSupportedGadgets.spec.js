import CardSupportedGadgets from '@/components/Cases/kaf/CardSupportedGadgets'
import { render } from '@testing-library/vue'

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
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
