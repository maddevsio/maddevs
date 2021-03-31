import { mount } from '@vue/test-utils'
import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation'

describe('infrastructure optimisation', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(InfrastructureOptimisation)
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
