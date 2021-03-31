import { render, screen } from '@testing-library/vue'
import BlogWidget from '@/components/Blog/BlogWidget'
import blogPost from '../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../__mocks__/blogPostWithLongTitle'

const BLOG_POST_TEXT_LIMIT = 300

describe('recommended blog widget component', () => {
  it('is a Vue instance', () => {
    const { getByTestId } = render(BlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: { post: blogPost },
      stubs: ['nuxt-link'],
    })

    expect(getByTestId('test-post-title').textContent).toBe(blogPost.data.title[0].text)
  })

  it('render with very long title', () => {
    render(BlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: { post: blogPostWithLongTitle },
      stubs: ['nuxt-link'],
    })

    const limitedText = blogPostWithLongTitle.data.body[0].primary.text[0].text.substr(0, BLOG_POST_TEXT_LIMIT)
    expect(screen.getByTestId('test-first-paragraph').textContent).toBe(
      `${limitedText.substr(0, limitedText.lastIndexOf(' '))}...`,
    )
  })
})
