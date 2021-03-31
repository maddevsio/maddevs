import QuoteSlice from '@/components/Blog/slices/QuoteSlice'
import { render } from '@testing-library/vue'

describe('quoteSlice component', () => {
  const slice = {
    primary: {
      quotation_design: 'border',
      quote: 'lorem ipsum dolor sit ame',
      name_of_the_author: 'John Doe',
      portrait_author: {
        mobile: {},
        url: '',
      },
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(QuoteSlice, {
      props: {
        slice,
      },
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: html => `<p>${html}</p>`,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
