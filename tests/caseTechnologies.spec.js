import { mount } from '@vue/test-utils'
import Technologies from '../client/components/Cases/yourcast/Technologies'

describe('technology', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Technologies)
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
