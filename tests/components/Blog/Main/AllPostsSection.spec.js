import { render } from '@testing-library/vue'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

const recipeMock = jest.fn()
recipeMock.mockReturnValue('homePageContent')

describe('AllPostsSection component', () => {
  it('is a Vue instance', () => {
    const { container } = render(AllPostsSection, {
      localVue,
      store: {
        getters: {
          filteredPosts: () => [{}],
          allPosts: () => [],
          postsCategory: jest.fn(),
          postsPage: jest.fn(),
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
