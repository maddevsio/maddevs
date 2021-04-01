import { mount } from '@vue/test-utils'
import PhaseUserAuthorisation from '../client/components/Cases/kaf/PhaseUserAuthorisation'

describe('phase user authorisation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PhaseUserAuthorisation)
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
