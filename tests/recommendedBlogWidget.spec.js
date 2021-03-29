import { mount } from '@vue/test-utils'
import RecommendedBlogWidget from '../client/components/Blog/RecommendedBlogWidget'
import blogPost from './__mocks__/blogPost'

describe('recommended blog widget component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(RecommendedBlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: {
        post: blogPost,
        className: 'test',
      },
      stubs: ['nuxt-link', 'NuxtLink'],
    })
  })

  it('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
