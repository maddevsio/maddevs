import Main from '@/components/Cases/veeqo/Main'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
