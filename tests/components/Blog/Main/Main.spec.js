import { render } from '@testing-library/vue'
import Main from '@/components/Blog/Main/Main'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import * as blogContent from '../../../__mocks__/blogPageContent'
import allPosts from '../../../__mocks__/allPosts'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
    api: {
      getSingle: () => ({ data: {} }),
    },
  },
  getBlogAuthors: jest.fn(),
}

const stubs = ['NuxtLink', 'FeaturedPost', 'CustomerUniversitySection']

const store = {
  getters: {
    filteredPosts: () => allPosts,
    featuredPost: () => allPosts[0],
    allPosts: () => allPosts,
    allAuthors: () => [{}],
    postsLoaded: () => true,
    postsCategory: jest.fn(),
    recentPosts: jest.fn(),
    featuredCUPost: jest.fn(),
    customerContent: () => {},
    postsPage: () => 2,
    blogPageContent: () => blogContent.default,
  },
  actions: {
    getBlogPageContent: jest.fn(),
    getBlogPosts: () => jest.fn(),
    getCustomerUniversityContent: jest.fn(),
    getBlogAuthors: jest.fn(),
  },
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
