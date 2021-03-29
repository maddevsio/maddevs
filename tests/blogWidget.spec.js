import { mount } from '@vue/test-utils'
import BlogWidget from '../client/components/Blog/BlogWidget'
import blogPost from './__mocks__/blogPost'

describe('recommended blog widget component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData: { post: blogPost },
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
