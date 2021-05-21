import { shallowMount } from '@vue/test-utils'
import ModalSearch from '@/components/core/modals/ModalSearch'

describe('ModalSearch component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {
          results: [],
        },
      }),
      mocks: {
        $refs: {
          searchInput: {
            focus: () => null,
          },
        },
        $prismic: {
          api: {
            tags: ['iOS'],
          },
        },
      },
    })
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('if set data with date Thu May 20 2021 16:52:46 GMT+0600 to formattedDate will return May 20, 2021', () => {
    const post = {
      data: {
        date: 'Thu May 20 2021 16:52:46 GMT+0600',
      },
    }
    expect(wrapper.vm.formattedDate(post)).toBe('May 20, 2021')
  })

  it('if response not results key response will return null', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {},
      }),
      mocks: {
        $refs: {
          searchInput: {
            focus: () => null,
          },
        },
        $prismic: {
          api: {
            tags: ['iOS'],
          },
        },
      },
    })
    expect(wrapper.vm.searchPosts).toBeNull()
  })
})
