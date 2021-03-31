import RecommendedBlogWidget from '@/components/Blog/RecommendedBlogWidget'
import { render, screen } from '@testing-library/vue'
import blogPost from '../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../__mocks__/blogPostWithLongTitle'

const BLOG_POST_TEXT_LIMIT = 150

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
    render(RecommendedBlogWidget, {
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

    const limitedText = blogPostWithLongTitle.data.body[0].primary.text[0].text.substr(0, BLOG_POST_TEXT_LIMIT)
    expect(screen.getByTestId('test-blog-post').textContent).toBe(
      `${limitedText.substr(0, limitedText.lastIndexOf(' '))}...`,
    )
  })
})
