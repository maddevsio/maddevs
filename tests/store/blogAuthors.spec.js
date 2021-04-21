import 'regenerator-runtime'
import {
  state as defaultState, mutations, actions, getters,
} from '@/store/modules/blogAuthors'

import { getBlogAuthors, getBlogAuthor, getAuthorPosts } from '@/api/blogAuthors'

jest.mock('@/api/blogAuthors', () => (
  {
    getBlogAuthors: jest.fn(() => 'test'),
    getBlogAuthor: jest.fn(() => 'test'),
    getAuthorPosts: jest.fn(() => 'test'),
  }
))

mutations.$prismic = {
  asText: jest.fn(() => ''),
}

actions.$prismic = {
  api: jest.fn(),
}

describe('BlogAuthors module state', () => {
  it('should correct returns default state', () => {
    const state = defaultState()
    expect(state.authors).toEqual([])
    expect(state.author).toEqual({})
    expect(state.authorPosts).toEqual([])
    expect(state.authorPostsLoaded).toBeFalsy()
    expect(state.authorPostsPage).toBe(1)
  })
})

describe('BlogAuthors module mutations', () => {
  const mockedAuthor = {
    type: 'type',
    id: 'id',
    uid: 'uid',
    data: {
      name: 'name',
      position: 'position',
      thumbnail_image: 'image',
      image: '123',
    },
  }

  const extractedAuthor = {
    type: mockedAuthor.type,
    id: mockedAuthor.id,
    uid: mockedAuthor.uid,
    name: mockedAuthor.data.name,
    position: mockedAuthor.data.position,
    thumbnailImage: mockedAuthor.data.thumbnail_image,
    image: mockedAuthor.data.image,
  }

  it('should correct mutate state after calling SET_ALL_AUTHORS mutation', () => {
    const state = defaultState()
    const authors = [mockedAuthor]

    mutations.SET_ALL_AUTHORS(state, authors)

    expect(state).toEqual({
      ...defaultState(),
      authors: [extractedAuthor],
    })
  })

  it('should correct mutate state after calling SET_AUTHOR mutation', () => {
    const state = defaultState()

    mutations.SET_AUTHOR(state, mockedAuthor)

    expect(state).toEqual({
      ...defaultState(),
      author: extractedAuthor,
    })
  })

  it('should correct mutate state after calling SET_AUTHOR_POSTS mutation', () => {
    const state = defaultState()
    const posts = [1, 2, 3]

    mutations.SET_AUTHOR_POSTS(state, posts)

    expect(state).toEqual({
      ...defaultState(),
      authorPosts: posts,
    })
  })

  it('should correct mutate state after calling SET_AUTHOR_POSTS_LOADED mutation', () => {
    const state = defaultState()
    const value = true

    mutations.SET_AUTHOR_POSTS_LOADED(state, value)

    expect(state).toEqual({
      ...defaultState(),
      authorPostsLoaded: value,
    })
  })

  it('should correct mutate state after calling SET_AUTHOR_POSTS_PAGE mutation', () => {
    const state = defaultState()
    const page = 4

    mutations.SET_AUTHOR_POSTS_PAGE(state, page)

    expect(state).toEqual({
      ...defaultState(),
      authorPostsPage: page,
    })
  })
})

describe('BlogAuthors module actions', () => {
  it('should correctly called getBlogAuthors', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogAuthors(store)

    expect(getBlogAuthors).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_ALL_AUTHORS', 'test')
  })

  it('should correctly called getBlogAuthor', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getBlogAuthor(store)

    expect(getBlogAuthor).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR', 'test')
  })

  it('should correctly called getAuthorPosts', async () => {
    const store = {
      commit: jest.fn(),
    }

    await actions.getAuthorPosts(store)

    expect(getAuthorPosts).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR_POSTS_LOADED', false)
    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR_POSTS', [])
    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR_POSTS', 'test')
    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR_POSTS_LOADED', true)
  })

  it('should correctly called getMoreAuthorPosts', () => {
    const store = {
      commit: jest.fn(),
      state: {
        authorPostsPage: 3,
      },
    }

    actions.getMoreAuthorPosts(store)

    expect(store.commit).toHaveBeenCalledWith('SET_AUTHOR_POSTS_PAGE', store.state.authorPostsPage + 1)
  })
})

describe('BlogAuthors module getters', () => {
  const state = defaultState()

  it('allAuthors', () => {
    expect(getters.allAuthors(state)).toBe(state.authors)
  })

  it('blogAuthor', () => {
    expect(getters.blogAuthor(state)).toBe(state.author)
  })

  it('authorPosts', () => {
    expect(getters.authorPosts(state)).toBe(state.authorPosts)
  })

  it('authorPostsLoaded', () => {
    expect(getters.authorPostsLoaded(state)).toBe(state.authorPostsLoaded)
  })

  it('authorPostsPage', () => {
    expect(getters.authorPostsPage(state)).toBe(state.authorPostsPage)
  })
})
