import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/blogTags'

import { getPostsByTag } from '@/api/blogTags'

jest.mock('@/api/blogTags', () => (
  {
    getPostsByTag: jest.fn(() => 'test'),
  }
))

mutations.$prismic = {
  asText: jest.fn(() => ''),
}

actions.$prismic = {
  api: {
    tags: ['tag', 'tag_2'],
  },
}

describe('BlogTags module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.tag).toBe('')
    expect(state.tagPosts).toEqual([])
    expect(state.tagPostsLoaded).toBeFalsy()
    expect(state.tagPostsPage).toBe(1)
  })
})

describe('BlogTags module mutations', () => {
  it('should correct mutate state after calling SET_TAG mutation', () => {
    const state = defaultState()
    const tag = 'tag'

    mutations.SET_TAG(state, tag)

    expect(state).toEqual({
      ...defaultState(),
      tag,
    })
  })

  it('should correct mutate state after calling SET_TAG_POSTS mutation', () => {
    const state = defaultState()
    const posts = [1, 2, 3]

    mutations.SET_TAG_POSTS(state, posts)

    expect(state).toEqual({
      ...defaultState(),
      tagPosts: posts,
    })
  })

  it('should correct mutate state after calling SET_TAG_POSTS_LOADED mutation', () => {
    const state = defaultState()
    const value = true

    mutations.SET_TAG_POSTS_LOADED(state, value)

    expect(state).toEqual({
      ...defaultState(),
      tagPostsLoaded: value,
    })
  })

  it('should correct mutate state after calling SET_TAG_POSTS_PAGE mutation', () => {
    const state = defaultState()
    const page = 4

    mutations.SET_TAG_POSTS_PAGE(state, page)

    expect(state).toEqual({
      ...defaultState(),
      tagPostsPage: page,
    })
  })
})

describe('BlogTags module actions', () => {
  it('should correctly called getBlogTag', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogTag(store, 'tag')
    expect(store.commit).toHaveBeenCalledWith('SET_TAG', 'tag')
  })

  it('should correctly called getPostsByTag', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogTagPosts(store)

    expect(getPostsByTag).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_TAG_POSTS_LOADED', false)
    expect(store.commit).toHaveBeenCalledWith('SET_TAG_POSTS', [])
    expect(store.commit).toHaveBeenCalledWith('SET_TAG_POSTS', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_TAG_POSTS_LOADED', true)
  })

  it('should correctly called getMoreBlogTagPosts', () => {
    const store = {
      commit: jest.fn(),
      state: {
        tagPostsPage: 3,
      },
    }

    actions.getMoreBlogTagPosts(store)

    expect(store.commit).toHaveBeenCalledWith('SET_TAG_POSTS_PAGE', store.state.tagPostsPage + 1)
  })
})

describe('BlogTags module getters', () => {
  const state = defaultState()

  it('blogTag', () => {
    expect(getters.blogTag(state)).toBe(state.tag)
  })

  it('blogTagPosts', () => {
    expect(getters.blogTagPosts(state)).toBe(state.tagPosts)
  })

  it('tagPostsCount', () => {
    expect(getters.tagPostsCount(state)).toBe(state.tagPosts.length)
  })

  it('tagPostsLoaded', () => {
    expect(getters.tagPostsLoaded(state)).toBe(state.tagPostsLoaded)
  })

  it('tagPostsPage', () => {
    expect(getters.tagPostsPage(state)).toBe(state.tagPostsPage)
  })
})
