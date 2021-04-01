import { mount } from '@vue/test-utils'
import FullPlatformArchitecture from '../client/components/Cases/yourcast/FullPlatformArchitecture'

describe('full platform architecture', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FullPlatformArchitecture)
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
