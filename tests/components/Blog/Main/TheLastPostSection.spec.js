import { render } from '@testing-library/vue'
import TheLastPostSection from '@/components/Blog/Main/TheLastPostSection'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import blogPosts from '../../../__mocks__/blogPosts'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
}

const stubs = ['NuxtLink']

const store = {
  getters: {
    featuredBlogPost: () => blogPosts[0],
    postsLoaded: () => true,
  },
}

describe('TheLastPostSection component', () => {
  it('should render correctly', () => {
    const { container } = render(TheLastPostSection, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
