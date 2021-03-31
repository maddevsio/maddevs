import { mount } from '@vue/test-utils'
import NambaFood from '../client/pages/case-studies/namba-food'
import './__mocks__/intersectionObserverMock'

describe('namba food', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(NambaFood, {
      stubs: ['client-only', 'nuxt-link', 'NuxtLink'],
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
