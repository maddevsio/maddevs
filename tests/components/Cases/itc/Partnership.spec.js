import Partnership from '@/components/Cases/itc/Partnership'
import { render } from '@testing-library/vue'

const stubs = ['TextQuoteAuthor']

describe('Partnership component', () => {
  it('should render correctly', () => {
    const { container } = render(Partnership, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
