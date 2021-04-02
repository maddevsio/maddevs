import Picture from '@/components/Cases/shared/Picture'
import { render } from '@testing-library/vue'

describe('Picture component', () => {
  const props = {
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
    lazyLoading: true,
    boxShadow: true,
    borderRadius: false,
    height: 0,
    width: 0,
    backgroundColor: false,
  }

  it('should render correctly', () => {
    const { container } = render(Picture, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
