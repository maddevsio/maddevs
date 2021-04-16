import PreviewCards from '@/components/Cases/godee/PreviewCards.vue'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('PreviewCards component', () => {
  it('should render correctly', () => {
    const { container } = render(PreviewCards, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
