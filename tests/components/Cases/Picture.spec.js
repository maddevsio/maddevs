import Picture from '@/components/Cases/Picture'
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

  it('Picture component', () => {
    const { container } = render(Picture, {
      props,
    })
    expect(container).toMatchSnapshot()
  })
})
