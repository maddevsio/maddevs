import { shallowMount, createLocalVue } from '@vue/test-utils'
import TableOfContents from '@/components/Blog/Post/TableOfContents'
import '../../../__mocks__/intersectionObserverMock'

const localVue = createLocalVue()

describe('careers page', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = shallowMount(TableOfContents, {
      localVue,
      stubs: ['NuxtLink'],
      data() {
        return {
          activeAnchor: null,
        }
      },
      propsData: {
        slice: {
          items: [
            {
              lable: [
                {
                  text: 'Blog post title',
                },
              ],
            },
          ],
        },
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
  describe('Table Of Contents', () => {
    it('if set args "Blog post title" to createAnchorID will return id #blog-post-title', () => {
      expect(wrapper.vm.createAnchorID('Blog post title')).toBe('blog-post-title')
    })

    it('if set not string args to createAnchorID will return null', () => {
      expect(wrapper.vm.createAnchorID(undefined)).toBeNull()
      expect(wrapper.vm.createAnchorID(null)).toBeNull()
      expect(wrapper.vm.createAnchorID(123)).toBeNull()
      expect(wrapper.vm.createAnchorID({})).toBeNull()
      expect(wrapper.vm.createAnchorID([])).toBeNull()
    })

    it('if has visible title in anchors list will set to activeAnchor active id', () => {
      const entry = {
        target: {
          id: 'blog-post-title',
        },
      }
      wrapper.vm.intersectionHandler(entry)
      expect(wrapper.vm.activeAnchor).toBe('blog-post-title')
    })

    it('if not has visible title in anchors list than not change value in activeAnchor', () => {
      const entry = {
        target: {
          id: 'new-blog-post-title',
        },
      }
      wrapper.vm.intersectionHandler(entry)
      expect(wrapper.vm.activeAnchor).toBeNull()
    })

    it('if slice items is empty than computed anchors will return []', () => {
      wrapper = shallowMount(TableOfContents, {
        localVue,
        stubs: ['NuxtLink'],
        data() {
          return {
            activeAnchor: null,
          }
        },
        propsData: {
          slice: {
            items: [],
          },
        },
      })
      const result = wrapper.vm.anchors
      expect(result.length).toBeFalsy()
    })
  })
})
