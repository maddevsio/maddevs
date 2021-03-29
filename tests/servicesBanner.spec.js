import { mount } from '@vue/test-utils'
import ServicesBanner from '@/components/core/banners/ServicesBanner'

describe('form checkboxes', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/',
      },
    }
    wrapper = mount(ServicesBanner, {
      stubs: ['nuxt-link', 'NuxtLink'],
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
