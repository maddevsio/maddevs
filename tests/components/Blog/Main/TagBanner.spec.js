import { render, screen } from '@testing-library/vue'
import TagBanner from '@/components/Blog/Main/TagBanner'

const store = {
  getters: {
    blogTag: () => 'Blog tag',
    tagPostsCount: () => 5,
  },
}

describe('TagBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(TagBanner, {
      store,
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByText(store.getters.blogTag())).toBeTruthy()
  })
})
