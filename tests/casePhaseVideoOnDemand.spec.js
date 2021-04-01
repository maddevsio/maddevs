import { mount } from '@vue/test-utils'
import PhaseVideoOnDemand from '../client/components/Cases/kaf/PhaseVideoOnDemand'

describe('phase video on demand', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PhaseVideoOnDemand)
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
