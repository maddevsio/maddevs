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

Object.defineProperty(window, 'pageYOffset', {
  value: 200,
})

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
  postFooter: {
    offsetHeight: 600,
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

  it('setStylesForNavbar should call function if computed return true', () => {
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

  it('setStylesForNavbar should not call function if computed return false', () => {
    const wrapper = shallowMount(Post, {
      computed: {
        tableOfContentsSlice() {
          return false
        },
      },
    })
    const handleNavbarSpy = jest.spyOn(wrapper.vm, 'handleNavbar').mockImplementation(() => jest.fn())

    wrapper.vm.setStylesForNavbar()

    expect(handleNavbarSpy).toHaveBeenCalledTimes(0)
  })

  it('data instance should contains html element', () => {
    document.body.innerHTML = '<div id="introduction-container"/><div id="header-container"/>'
    const wrapper = shallowMount(Post)
    const introductionContainer = document.getElementById('introduction-container')
    const headerContainer = document.getElementById('header-container')

    wrapper.vm.setStylesForNavbar()

    expect(wrapper.vm.introductionContainer).toEqual(introductionContainer)
    expect(wrapper.vm.headerContainer).toEqual(headerContainer)
  })

  it('getScrollStartPoint should return scroll start point count', () => {
    const wrapper = shallowMount(Post)
    const state = { offsetHeight: 1 }
    const expectedResult = 2

    wrapper.vm.introductionContainer = state
    wrapper.vm.headerContainer = state

    const result = wrapper.vm.getScrollStartPoint()

    expect(result).toBe(expectedResult)
  })

  it('getScrollEndPoint should return scroll end point count', () => {
    const expectedResult = 6810
    const wrapper = shallowMount(Post)
    wrapper.vm.$refs = refs

    const result = wrapper.vm.getScrollEndPoint()

    expect(result).toBe(expectedResult)
  })

  it('setStateForCssVar should return scroll end point count', () => {
    const wrapper = shallowMount(Post)
    const state = { offsetHeight: 1 }
    const setPropertySpy = jest.spyOn(document.documentElement.style, 'setProperty').mockImplementation(() => jest.fn())

    wrapper.vm.introductionContainer = state

    wrapper.vm.setStateForCssVar()

    expect(setPropertySpy).toHaveBeenCalledWith('--top', '31px')
  })

  it('handleNavbar should call methods: getScrollStartPoint, getScrollEndPoint, setStateForCssVar', () => {
    const wrapper = shallowMount(Post)
    const getScrollStartPointSpy = jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    const getScrollEndPointSpy = jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    const setStateForCssVarSpy = jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(getScrollStartPointSpy).toHaveBeenCalledTimes(1)
    expect(getScrollEndPointSpy).toHaveBeenCalledTimes(1)
    expect(setStateForCssVarSpy).toHaveBeenCalledTimes(1)
  })

  it('handleNavbar should set true for isFixed if window.pageYOffset more than scrollStartPoint', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => 100)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isFixed).toBe(true)
  })

  it('handleNavbar should set false for isFixed if window.pageYOffset less than scrollStartPoint', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => 300)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isFixed).toBe(false)
  })

  it('handleNavbar should set true for isBottom if window.pageYOffset more than scrollEndPoint', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => 100)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isBottom).toBe(true)
  })

  it('handleNavbar should set false for isBottom if window.pageYOffset less than scrollEndPoint', () => {
    const wrapper = shallowMount(Post)
    jest.spyOn(wrapper.vm, 'getScrollEndPoint').mockImplementation(() => 300)
    jest.spyOn(wrapper.vm, 'getScrollStartPoint').mockImplementation(() => jest.fn())
    jest.spyOn(wrapper.vm, 'setStateForCssVar').mockImplementation(() => jest.fn())

    wrapper.vm.handleNavbar()

    expect(wrapper.vm.isBottom).toBe(false)
  })
})
