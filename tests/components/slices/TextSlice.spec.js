import { render } from '@testing-library/vue'
import TextSlice from '@/components/slices/TextSlice'

describe('text slice component', () => {
  const slice = {
    primary: {
      text: [
        {
          type: 'heading1',
          text: 'sample text',
        },
      ],
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(TextSlice, {
      props: {
        slice,
      },
      stubs: ['PrismicRichText'],
    })

    expect(container).toMatchSnapshot()
  })
})
