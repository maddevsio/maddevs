import RecommendedBlogWidget from '@/components/Blog/RecommendedBlogWidget'
import { render } from '@testing-library/vue'
import blogPost from '../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../__mocks__/blogPostWithLongTitle'

describe('recommended blog widget component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(RecommendedBlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      props: {
        post: blogPost,
        className: 'test',
      },
      stubs: ['nuxt-link'],
    })

    expect(container).toMatchSnapshot()
  })

  it('render with very long title', () => {
    const { container } = render(RecommendedBlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      props: {
        post: blogPostWithLongTitle,
        className: 'test-long',
      },
      stubs: ['nuxt-link'],
    })

    expect(container).toMatchSnapshot()
  })
})
