import Swiper from '@/components/Cases/Swiper'
import { render } from '@testing-library/vue'

const props = {
  components: [
    {
      fileName: 'admin',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
    {
      fileName: 'dashboard',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
  ],
}

describe('should render correctly', () => {
  it('Picture component', () => {
    const { container } = render(Swiper, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
