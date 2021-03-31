import { mount } from '@vue/test-utils'
import WeCreateItProjectsFor from '@/components/About/WeCreateItProjectsFor'

describe('we Create It Project For', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(WeCreateItProjectsFor)
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
