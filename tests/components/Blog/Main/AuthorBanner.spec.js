import { render } from '@testing-library/vue'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
      },
    }),
  },
}

describe('AuthorBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(AuthorBanner, {
      stubs: ['PrismicImage'],
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
