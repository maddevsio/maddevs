import { render } from '@testing-library/vue'
import Main from '@/components/Blog/Main/Main'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import * as homeContent from '../../../__mocks__/homePageContent'
import allPosts from '../../../__mocks__/allPosts'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuelidate)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
    api: {
      getSingle: () => ({ data: {} }),
    },
  },
}

const stubs = ['NuxtLink', 'PrismicImage', 'ClientOnly', 'PrismicEmbed']

const store = {
  getters: {
    filteredPosts: () => allPosts,
    allPosts: () => allPosts,
    postsLoaded: jest.fn(),
    postsCategory: jest.fn(),
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
  },
  actions: {
    getHomePageContent: jest.fn(),
    getBlogPosts: () => jest.fn(),
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
