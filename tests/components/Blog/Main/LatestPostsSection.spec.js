import { render } from '@testing-library/vue'
import LatestPostsSection from '@/components/Blog/Main/LatestPostsSection'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    postsLoaded: () => true,
    recentBlogPosts: jest.fn(),
  },
}

describe('LatestPostsSection component', () => {
  it('should render correctly', () => {
    const { container } = render(LatestPostsSection, {
      stubs: ['PrismicImage'],
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
