import { render } from '@testing-library/vue'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  modules: {
    blog: {
      state: {
        customerContent: {
          featured_cu: {
            uid: 'uid',
          },
        },
      },
      getters: {
        customerContent(state) {
          return state.customerContent
        },
      },
    },
    blogAuthors: {
      state: {
        authors: [],
      },
      getters: {
        blogAuthors(state) {
          return state.authors
        },
      },
    },
  },
  getters: {
    featuredCUPost: () => ({
      body: [],
      post_author: {
        id: 'id',
      },
      featured_image: {
        url: '',
      },
    }),
  },
}

const stubs = ['PrismicImage', 'NuxtLink']

describe('CustomerUniversitySection component', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs,
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
