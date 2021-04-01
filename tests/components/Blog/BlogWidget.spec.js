import { render } from '@testing-library/vue'
import BlogWidget from '@/components/Blog/BlogWidget'
import blogPost from '../../__mocks__/blogPost'
import blogPostWithLongTitle from '../../__mocks__/blogPostWithLongTitle'

describe('blog widget component', () => {
  it('is a Vue instance', () => {
    const { container } = render(BlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: { post: blogPost },
      stubs: ['nuxt-link'],
    })

    expect(container).toMatchSnapshot()
  })

  it('render with very long title', () => {
    const { container } = render(BlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: { post: blogPostWithLongTitle },
      stubs: ['nuxt-link'],
    })

    expect(container).toMatchSnapshot()
  })
})
