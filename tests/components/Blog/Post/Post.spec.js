import { render, screen, fireEvent } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Post from '@/components/Blog/Post/Post'
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

Object.defineProperty(document, 'execCommand', { value: jest.fn() })

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
  $router: {
    currentRoute: {
      path: '/blog-post-title',
    },
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

const refs = { // use for offsetHeight random numbers
  blogPost: {
    offsetHeight: 8000,
  },
  navbar: {
    offsetHeight: 400,
  },
  recommendedPosts: {
    offsetHeight: 600,
  },
  clusterNavigation: {
    offsetHeight: 700,
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
        tags: [],
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

  describe('Post component copyAnchorLink', () => {
    const wrapper = shallowMount(Post, {
      stubs,
      mocks,
      props,
      store,
      propsData: {
        slice: {
          items: [],
        },
      },
    })

    it('if has attr data-id in btn will return valid link', () => {
      const event = {
        target: {
          getAttribute: () => 'blog-post-title',
          nextElementSibling: document.createElement('div'),
        },
      }
      const result = wrapper.vm.copyAnchorLink(event)
      expect(result).toBe('http://localhost/blog-post-title#blog-post-title')
    })

    it('if not have attr data-id in btn will return null', () => {
      const event = {
        target: {
          getAttribute: () => undefined,
          nextElementSibling: document.createElement('div'),
        },
      }
      const result = wrapper.vm.copyAnchorLink(event)
      expect(result).toBeNull()
    })
  })

  it('setStylesForNavbar should call function', () => {
    const wrapper = shallowMount(Post, {
      computed: {
        tableOfContentsSlice() {
          return true
        },
      },
    })
    const handleNavbarSpy = jest.spyOn(wrapper.vm, 'handleNavbar').mockImplementation(() => jest.fn())

    wrapper.vm.setStylesForNavbar()

    expect(handleNavbarSpy).toHaveBeenCalledTimes(1)
  })

  it('data instance should contains html element', () => {
    document.body.innerHTML = '<div id="introduction-container"></div>'
    const wrapper = shallowMount(Post)
    const element = document.getElementById('introduction-container')

    wrapper.vm.setStylesForNavbar()

    expect(wrapper.vm.$data.introductionContainer).toEqual(element)
  })

  it('getStylesTemplate should return string with params data', () => {
    const wrapper = shallowMount(Post)
    const expectedResult = 'position: absolute; top: auto; bottom: 0; left: -210px;'

    const result = wrapper.vm.getStylesTemplate('absolute', 'auto', '0', '-210px')

    expect(result).toBe(expectedResult)
  })

  it('method should return true if path contains in URL', () => {
    const wrapper = shallowMount(Post)
    Object.defineProperty(window, 'location', {
      value: {
        pathname: 'blog',
      },
    })

    const result = wrapper.vm.containsInUrl('blog')

    expect(result).toBe(true)
  })

  it('method should return false if path not contained in URL', () => {
    const wrapper = shallowMount(Post)
    const result = wrapper.vm.containsInUrl('customer-university')

    expect(result).toBe(false)
  })

  it('method should return scroll end point count for default blog post', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'containsInUrl').mockImplementation(() => false)
    wrapper.vm.$refs = refs
    const expectedResult = 6810

    const result = wrapper.vm.getScrollEndPoint()

    expect(result).toBe(expectedResult)
  })

  it('method should return scroll end point count for customer university post', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'containsInUrl').mockImplementation(() => true)
    wrapper.vm.$refs = refs
    const expectedResult = 7110

    const result = wrapper.vm.getScrollEndPoint()

    expect(result).toBe(expectedResult)
  })
})
