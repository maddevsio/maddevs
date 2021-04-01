import { render } from '@testing-library/vue'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import blogPost from '../../__mocks__/blogPost'

describe('featured post component', () => {
  it('is a Vue instance', () => {
    const { container } = render(FeaturedPost, {
      propsData: {
        post: blogPost,
      },
      stubs: ['nuxt-link'],
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
