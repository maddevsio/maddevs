import { render, screen, fireEvent } from '@testing-library/vue'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import blogPosts from '../../../__mocks__/blogPosts'
import * as blogContent from '../../../__mocks__/blogPageContent'

const localVue = createLocalVue()
localVue.use(Vuex)

const recipeMock = jest.fn()
const scroll = jest.fn()
const windowsScroll = jest.fn()
recipeMock.mockReturnValue('blogPageContent')

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
}

const stubs = ['NuxtLink']

const store = {
  getters: {
    filteredPosts: () => blogPosts,
    blogPosts: () => blogPosts,
    postsCategory: jest.fn(),
    postsPage: () => 2,
    blogPageContent: () => blogContent.default,
    allAuthors: jest.fn(),
  },
  actions: {
    changeBlogPostsCategory: jest.fn(),
    getMoreBlogPosts: jest.fn(),
  },
}

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')
containerToRender.scrollIntoView = scroll

const link = document.createElement('a')
link.setAttribute('href', 'undefined')
link.setAttribute('data-testid', 'test-href')
containerToRender.append(link)

describe('AllPostsSection component', () => {
  window.scrollTo = windowsScroll
  it('is a Vue instance', () => {
    const { container } = render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct render posts', () => {
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(screen.getAllByTestId('test-single-post')).toHaveLength(blogPosts.length)
  })

  it('should correct work change post category', async () => {
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const input = screen.getAllByTestId('test-post-input')
    await fireEvent.update(input[0], 'Hardware')
    expect(store.actions.changeBlogPostsCategory).toHaveBeenCalledTimes(1)
  })

  it('correctly call update class function from watcher if haven\'t parent node or not found attribute', () => {
    mocks.visitedPost = 'Hardware'
    const singleLink = document.createElement('a')
    singleLink.setAttribute('href', mocks.visitedPost)
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      container: document.body.appendChild(singleLink),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(0)
    expect(windowsScroll).toHaveBeenCalledTimes(0)
  })

  it('correctly call update class function from watcher', () => {
    mocks.visitedPost = 'Hardware'
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(1)
    expect(windowsScroll).toHaveBeenCalledTimes(1)
  })

  it('should correct work get more posts handler', () => {
    const nextTick = jest.fn()
    mocks.$nextTick = nextTick
    store.getters.filteredPosts = () => [...blogPosts, ...blogPosts]
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const button = screen.getByTestId('test-load-more-button')
    fireEvent.click(button)

    expect(store.actions.getMoreBlogPosts).toHaveBeenCalledTimes(1)
  })
})
