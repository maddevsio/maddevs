import { shallowMount } from '@vue/test-utils'
import Header from '@/components/core/Header/Header'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      mocks: {
        $nuxt: {
          $route: {
            path: '/',
          },
        },
      },
      stubs: ['RouterLink'],
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
})
