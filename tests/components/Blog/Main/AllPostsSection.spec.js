import { render } from '@testing-library/vue'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import allPosts from '../../../__mocks__/allPosts'
import * as homeContent from '../../../__mocks__/homePageContent'

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
          homePageContent: () => homeContent,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct render posts', () => {
    const { container } = render(AllPostsSection, {
      localVue,
      store: {
        getters: {
          filteredPosts: () => allPosts,
          allPosts: () => allPosts,
          postsCategory: jest.fn(),
          postsPage: jest.fn(),
          homePageContent: () => homeContent,
        },
      },
    })

    expect(container).toMatchSnapshot()
    // console.log(screen.getAllByTestId('test-single-post'))
  })
})
