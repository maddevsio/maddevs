import Blog from '@/components/Blog/header/Blog'
import { render, screen } from '@testing-library/vue'
import mockedStore from '../../../__mocks__/store'

describe('header Blog', () => {
  const store = mockedStore

  it('is a Vue instance', () => {
    // reset/override mocked store here
    store.modules.blogPost.state.post.tags = ['Project Management']

    const { container } = render(Blog, { store })

    expect(screen.getByText('Project Management')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
