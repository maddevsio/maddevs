import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/blog'

jest.mock('@/api/blog', () => (
  {
    getBlogPageContent: jest.fn(() => 'test'),
    getBlogPosts: jest.fn(() => 'test'),
    getCustomerUniversityMaster: jest.fn(() => ({
      featured_cu: {
        uid: '123',
      },
    })),
    getCustomerUniversityFeaturedPost: jest.fn(() => 'test'),
  }
))

mutations.$prismic = {
  asText: jest.fn(() => ''),
}

actions.$prismic = {
  api: jest.fn(),
}

describe('Blog module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.blogPageContent).toEqual({})
    expect(state.customerContent).toEqual({})
    expect(state.featuredCUPost).toBeNull()
    expect(state.posts).toEqual([])
    expect(state.featuredPost).toBeNull()
    expect(state.postsCategory).toBeNull()
    expect(state.postsLoaded).toBeFalsy()
    expect(state.postsPage).toBe(1)
  })
})

describe('Blog module mutations', () => {
  it('should correct mutate state after calling SET_BLOG_PAGE_CONTENT mutation', () => {
    const state = defaultState()

    const data = {
      categories: [
        {
          category_title: [],
          tags: [1, 2, 3],
        },
      ],
      headline: [{ text: 'Headline' }],
      description: [{ text: 'Description' }],
      recent_posts_banner: 'Banner',
      banner_link: 'link',
      image: {
        url: 'url',
      },
    }

    mutations.SET_BLOG_PAGE_CONTENT(state, data)

    expect(state).toEqual({
      ...defaultState(),
      blogPageContent: {
        banner: 'Banner',
        bannerLink: 'link',
        categories: [
          {
            tags: [''],
            title: '',
          },
        ],
        description: 'Description',
        headline: 'Headline',
        image: 'url',
      },
    })
  })

  it('should correct mutate state after calling SET_CUSTOMER_CONTENT mutation', () => {
    const state = defaultState()

    const data = 'Data'

    mutations.SET_CUSTOMER_CONTENT(state, data)

    expect(state).toEqual({
      ...defaultState(),
      customerContent: data,
    })
  })

  it('should correct mutate state after calling SET_FEATURED_CUSTOMER_POST mutation', () => {
    const state = defaultState()

    const post = {
      date: '12-02-2021',
    }

    mutations.SET_FEATURED_CUSTOMER_POST(state, post)

    expect(state).toEqual({
      ...defaultState(),
      featuredCUPost: post,
    })
  })

  it('should correct mutate state after calling SET_POSTS mutation', () => {
    const state = defaultState()

    const data = [{
      tags: ['Featured post'],
    }]

    mutations.SET_POSTS(state, data)

    expect(state).toEqual({
      ...defaultState(),
      posts: data,
      featuredPost: data[0],
    })
  })

  it('should correct mutate state after calling SET_POSTS_CATEGORY mutation', () => {
    const state = defaultState()

    const category = 'category'

    mutations.SET_POSTS_CATEGORY(state, category)

    expect(state).toEqual({
      ...defaultState(),
      postsCategory: category,
    })
  })

  it('should correct mutate state after calling SET_POSTS_LOADED mutation', () => {
    const state = defaultState()

    const value = false

    mutations.SET_POSTS_LOADED(state, value)

    expect(state).toEqual({
      ...defaultState(),
      postsLoaded: value,
    })
  })

  it('should correct mutate state after calling SET_POSTS_PAGE mutation', () => {
    const state = defaultState()

    const page = 3

    mutations.SET_POSTS_PAGE(state, page)

    expect(state).toEqual({
      ...defaultState(),
      postsPage: page,
    })
  })
})

describe('Blog module actions', () => {
  it('should correctly called getBlogPageContent without postsCategory', async () => {
    const store = {
      state: {
        ...defaultState(),
        blogPageContent: {
          categories: [
            {
              title: '123',
            },
          ],
        },
      },
      commit: jest.fn(),
    }

    await actions.getBlogPageContent(store)

    expect(store.commit).toHaveBeenCalledWith('SET_BLOG_PAGE_CONTENT', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_CATEGORY', '123')
  })

  it('should correctly called getBlogPageContent with postsCategory', async () => {
    const store = {
      state: {
        ...defaultState(),
        postsCategory: {},
      },
      commit: jest.fn(),
    }

    await actions.getBlogPageContent(store)
    expect(store.commit).toHaveBeenCalledWith('SET_BLOG_PAGE_CONTENT', 'test')
  })

  it('should correctly called getBlogPosts', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogPosts(store)
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_LOADED', true)
  })

  it('should correctly called getMoreBlogPosts', () => {
    const store = {
      commit: jest.fn(),
      state: defaultState(),
    }

    actions.getMoreBlogPosts(store)
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_PAGE', 2)
  })

  it('should correctly called changeBlogPostsCategory', () => {
    const store = {
      commit: jest.fn(),
      state: defaultState(),
    }

    const filter = 'category'

    actions.changeBlogPostsCategory(store, filter)
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_PAGE', 1)
    expect(store.commit).toHaveBeenCalledWith('SET_POSTS_CATEGORY', filter)
  })

  it('should correctly called getCustomerUniversityContent', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getCustomerUniversityContent(store)
    expect(store.commit).toHaveBeenCalledWith('SET_CUSTOMER_CONTENT', {
      featured_cu: {
        uid: '123',
      },
    })
    expect(store.commit).toHaveBeenCalledWith('SET_FEATURED_CUSTOMER_POST', 'test')
  })
})

describe('Blog module getters', () => {
  const state = defaultState()

  it('blogPageContent', () => {
    expect(getters.blogPageContent(state)).toBe(state.blogPageContent)
  })

  it('customerContent', () => {
    expect(getters.customerContent(state)).toBe(state.customerContent)
  })

  it('featuredCUPost', () => {
    expect(getters.featuredCUPost(state)).toBe(state.featuredCUPost)
  })

  it('blogPosts', () => {
    expect(getters.blogPosts(state)).toBe(state.posts)
  })

  it('featuredPost', () => {
    expect(getters.featuredPost(state)).toBe(state.featuredPost)
  })

  it('postsCategory', () => {
    expect(getters.postsCategory(state)).toBe(state.postsCategory)
  })

  it('postsLoaded', () => {
    expect(getters.postsLoaded(state)).toBe(state.postsLoaded)
  })

  it('postsPage', () => {
    expect(getters.postsPage(state)).toBe(state.postsPage)
  })

  it('filteredBlogPosts empty', () => {
    state.postsCategory = null
    expect(getters.filteredBlogPosts(state)).toEqual([])
  })

  it('filteredBlogPosts empty 2', () => {
    state.postsCategory = 'category'
    state.blogPageContent.categories = null
    expect(getters.filteredBlogPosts(state)).toEqual([])
  })

  it('filteredBlogPosts correct', () => {
    state.postsCategory = 'category'
    state.blogPageContent.categories = [{
      title: 'category',
      tags: ['tag'],
    }]
    state.posts = [
      {
        tags: ['tag'],
      },
    ]
    expect(getters.filteredBlogPosts(state)).toEqual(state.posts)
  })

  it('recentBlogPosts', () => {
    state.posts = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(getters.recentBlogPosts(state)).toEqual([1, 2, 3, 4, {
      banner: {
        url: '#',
      },
      id: 'banner',
      link: {
        link_type: 'Web',
        target: '_self',
        url: '#',
      },
    }, 5])
  })

  it('recentBlogPosts without banner', () => {
    state.posts = []
    expect(getters.recentBlogPosts(state)).toEqual([])
  })
})
