import { mount } from '@vue/test-utils'
import WeCreateItProjectFor from '@/components/About/WeCreateItProjectFor'

describe('we Create It Project For', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(WeCreateItProjectFor)
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
