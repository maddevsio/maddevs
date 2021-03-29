import { mount } from '@vue/test-utils'
import FeaturedPost from '../client/components/Blog/FeaturedPost'
import blogPost from './__mocks__/blogPost'

describe('featured post component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FeaturedPost, {
      propsData: {
        post: blogPost,
      },
      stubs: ['nuxt-link', 'NuxtLink'],
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
