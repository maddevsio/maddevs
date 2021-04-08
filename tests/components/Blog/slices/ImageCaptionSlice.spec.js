import { render } from '@testing-library/vue'
import ImageCaptionSlice from '../../../../client/components/Blog/slices/ImageCaptionSlice'

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
      caption: 'caption',
    },
    slice_label: 'image-full-width',
    slice_type: 'image_with_caption',
  }

  it('is a Vue instance', () => {
    const { container } = render(ImageCaptionSlice, {
      props: {
        slice,
      },
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('caption rendered', () => {
    const { getByTestId } = render(ImageCaptionSlice, {
      props: {
        slice,
      },
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })
    expect(getByTestId('test-image-label').outerHTML).toContain(slice.primary.caption)
  })

  it('render class with enabled props', async () => {
    const { html } = render(ImageCaptionSlice, {
      props: {
        slice: {
          ...slice,
          primary: {
            ...slice.primary,
            enable_zoom: 'enable',
          },
        },
      },
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(html()).toContain('block-img-zoom')
  })
})
