import { mount } from '@vue/test-utils'
import AboutBanner from '@/components/Banner/AboutBanner'

describe('form checkboxes', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/',
      },
    }
    wrapper = mount(AboutBanner, {
      stubs: ['nuxt-link'],
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
