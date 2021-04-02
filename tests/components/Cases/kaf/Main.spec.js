import Main from '@/components/Cases/kaf/Main'
import { render } from '@testing-library/vue'

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
