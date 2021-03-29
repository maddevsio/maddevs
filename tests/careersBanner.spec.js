import { mount } from '@vue/test-utils'
import CareersBanner from '@/components/core/banners/CareersBanner'

describe('form checkboxes', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/',
      },
    }
    wrapper = mount(CareersBanner)
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
