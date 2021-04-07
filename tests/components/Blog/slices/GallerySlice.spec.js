import GallerySlice from '@/components/Blog/slices/GallerySlice'
import { render } from '@testing-library/vue'

describe('galary slice component', () => {
  const props = {
    slice: {
      items: [
        {
          gallery_image: {
            Mobile: '',
          },
        },
      ],
      primary: {},
    },
  }
  it('is a Vue instance', () => {
    const { container } = render(GallerySlice, {
      props,
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
