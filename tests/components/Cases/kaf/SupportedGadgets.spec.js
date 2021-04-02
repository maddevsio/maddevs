import SupportedGadgets from '@/components/Cases/kaf/SupportedGadgets'
import { render } from '@testing-library/vue'

describe('SupportedGadgets component', () => {
  it('should render correctly', () => {
    const { container } = render(SupportedGadgets, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
