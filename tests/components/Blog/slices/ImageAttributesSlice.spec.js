import { render } from '@testing-library/vue'
import ImageAttributesSlice from '../../../../client/components/Blog/slices/ImageAttributesSlice'

describe('image attribute slice component', () => {
  const slice = {
    items: [{}],
    primary: {
      image: {
        alt: 'alt text',
        copyright: null,
        dimensions: { height: 298, width: 1200 },
        url:
          'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298',
      },
      target: '_blank',
      title: [
        {
          spans: [],
          text: 'Tired banner',
          type: 'paragraph',
        },
      ],
      url: 'https://blog.maddevs.io',
    },
    slice_label: null,
    slice_type: 'image_with_attributes',
  }

  it('is a Vue instance', () => {
    const { container } = render(ImageAttributesSlice, {
      props: {
        slice,
      },
      stubs: ['prismic-image'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
