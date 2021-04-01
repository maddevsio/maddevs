import { render } from '@testing-library/vue'
import TextSlice from '../../../../client/components/Blog/slices/TextSlice'

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
      stubs: ['prismic-rich-text'],
    })

    expect(container).toMatchSnapshot()
  })
})
