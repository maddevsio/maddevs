import PostCard from '@/components/Blog/shared/PostCard'
import { render } from '@testing-library/vue'
import blogPost from '../../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../../__mocks__/blogPostWithLongTitle'

describe('post card component', () => {
  const mocks = {
    $prismic: {
      asText: text => text[0].text,
    },
  }

  const props = {
    post: blogPost,
    className: 'test',
  }

  const stubs = ['NuxtLink']

  it('should render correctly with slot', () => {
    const { container } = render(PostCard, { mocks, props, stubs })

    expect(container).toMatchSnapshot()
  })

  it('render with very long title', () => {
    props.post = blogPostWithLongTitle
    const { container } = render(PostCard, { mocks, props, stubs })

    expect(container).toMatchSnapshot()
  })
})
