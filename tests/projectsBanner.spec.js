import { mount } from '@vue/test-utils'
import ProjectsBanner from '@/components/Banner/ProjectsBanner'

describe('form checkboxes', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/',
      },
    }
    wrapper = mount(ProjectsBanner, {
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
