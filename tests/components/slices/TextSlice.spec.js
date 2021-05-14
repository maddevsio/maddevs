import { render } from '@testing-library/vue'
import TextSlice from '@/components/slices/TextSlice'

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

describe('text slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(TextSlice, {
      props: {
        slice,
        htmlSerializer: () => null,
      },
      stubs: ['PrismicRichText'],
    })

    expect(container).toMatchSnapshot()
  })
})
