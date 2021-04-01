import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor'
import { render } from '@testing-library/vue'

const props = {
  authorName: 'Author name',
  authorPosition: 'Author position',
  pictureFolder: 'nambafood',
  fileName: 'apple-iphone-xr-silver',
  fileExtension: 'png',
  alt: 'alt',
}

const slots = {
  default: 'Main Content',
}

describe('TextQuoteAuthor component', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuoteAuthor, {
      slots,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
