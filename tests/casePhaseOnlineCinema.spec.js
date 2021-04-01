import { mount } from '@vue/test-utils'
import PhaseOnlineCinema from '../client/components/Cases/kaf/PhaseOnlineCinema'

describe('phase online cinema', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PhaseOnlineCinema)
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
