import { render, screen, fireEvent } from '@testing-library/vue'
import Post from '@/components/Blog/Post/Post'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import blogDocument from '../../../__mocks__/blogDocument'
import recomendedPosts from '../../../__mocks__/recomendedPosts'
import blogSlices from '../../../__mocks__/blogSlices'
import allPosts from '../../../__mocks__/allPosts'
import * as homeContent from '../../../__mocks__/homePageContent'

const props = {
  cluster: {},
  document: blogDocument,
  formattedDate: 'Apr 12, 2021',
  id: 'YHRrABEAACkAwDuj',
  jsonLd: '',
  openGraphUrl: 'undefined/blog/software-project-handover/',
  recommendedPosts: recomendedPosts,
  slices: blogSlices,
  tags: [
    'Project Management',
    'Featured post',
  ],
  title: 'How to Handover a Software Project to Another Team | Mad Devs Blog',
  type: 'blog_post',
}

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  $route: {
    name: 'test-route',
  },
}

const store = {
  getters: {
    filteredPosts: () => allPosts,
    allPosts: () => allPosts,
    postsCategory: jest.fn(),
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
    allAuthors: jest.fn(),
  },
  actions: {
    changePostsCategory: jest.fn(),
    getMorePosts: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'ShareNetwork', 'PrismicRichText', 'PrismicEmbed', 'BlogHeader']

const WINDOW_SCROLL_TO = jest.fn()

describe('Post component', () => {
  window.scrollTo = WINDOW_SCROLL_TO
  it('should render correctly with default props', () => {
    const { container } = render(Post, {
      stubs,
      mocks,
      props: {
        document: blogDocument,
      },
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call scroll top', async () => {
    const SCROLL_Y = 100
    const { queryAllByTestId } = render(Post, {
      stubs,
      mocks,
      props,
      store,
    })

    expect(queryAllByTestId('test-back-list')).toHaveLength(0)
    await fireEvent.scroll(window, { target: { scrollY: SCROLL_Y, scrollingElement: { scrollTop: SCROLL_Y } } })
    expect(window.scrollY).toBe(SCROLL_Y)
    expect(queryAllByTestId('test-back-list')).toHaveLength(1)
    const element = screen.getByTestId('test-back-list')
    fireEvent.click(element)
    expect(WINDOW_SCROLL_TO).toHaveBeenCalledTimes(1)
  })
})
