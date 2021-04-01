import { mount } from '@vue/test-utils'
import PhaseLiveStreamingTechnology from '../client/components/Cases/kaf/PhaseLiveStreamingTechnology'

describe('phase live streaming technology', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PhaseLiveStreamingTechnology)
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
