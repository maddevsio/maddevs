import { render } from '@testing-library/vue'
import { mount, createLocalVue } from '@vue/test-utils'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'
import Vuex from 'vuex'
import tagPosts from '../../../__mocks__/tagPosts'

const localVue = createLocalVue()

localVue.use(Vuex)

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogTag: () => 'Blog tag',
    tagPostsCount: () => 5,
    tagPostsLoaded: () => true,
    allAuthors: () => [
      {
        id: '1',
      }, {
        id: '2',
      }, {
        id: '3',
      },
    ],
    tagPostsPage: () => 1,
    tagPosts: () => tagPosts,
  },
}

const stubs = ['FeaturedPost', 'NuxtLink']

describe('TagPostsSection component', () => {
  it('should render correctly', () => {
    const { container } = render(TagPostsSection, {
      store,
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('if tagPosts is empty > will return null from featuredPostAuthor', () => {
    const wrapper = mount(TagPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        getters: {
          blogTag: () => 'Blog tag',
          tagPostsCount: () => 5,
          tagPostsLoaded: () => true,
          allAuthors: () => [
            {
              id: '1',
            }, {
              id: '2',
            }, {
              id: '3',
            },
          ],
          tagPostsPage: () => 1,
          tagPosts: [],
        },
      },
    })
    expect(wrapper.vm.featuredPostAuthor).toBeNull()
  })

  it('if tagPosts has data > will return { id: "YG83_xAAACIA9tnb", name: "Denisoed" }', () => {
    const wrapper = mount(TagPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        getters: {
          blogTag: 'Blog tag',
          tagPostsCount: 5,
          tagPostsLoaded: true,
          allAuthors: [
            {
              id: 'YG83_xAAACIA9tnb',
              name: 'Denisoed',
            }, {
              id: '2',
              name: 'Baha',
            }, {
              id: '3',
              name: 'Ivan',
            },
          ],
          tagPostsPage: 1,
          tagPosts,
        },
      },
    })
    expect(wrapper.vm.featuredPostAuthor).toEqual({ id: 'YG83_xAAACIA9tnb', name: 'Denisoed' })
  })
})
