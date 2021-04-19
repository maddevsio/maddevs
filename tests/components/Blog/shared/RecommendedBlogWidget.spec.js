import RecommendedBlogWidget from '@/components/Blog/shared/RecommendedBlogWidget'
import { render } from '@testing-library/vue'
import blogPost from '../../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../../__mocks__/blogPostWithLongTitle'

describe('recommended blog widget component', () => {
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
    const { container } = render(RecommendedBlogWidget, { mocks, props, stubs })

    expect(container).toMatchSnapshot()
  })

  it('render with very long title', () => {
    props.post = blogPostWithLongTitle
    const { container } = render(RecommendedBlogWidget, { mocks, props, stubs })

    expect(container).toMatchSnapshot()
  })
})
