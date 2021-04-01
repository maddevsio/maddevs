import { mount } from '@vue/test-utils'
import PhaseRedesignAndOptimisations from '../client/components/Cases/kaf/PhaseRedesignAndOptimisations'

describe('phase redesign and optimisations', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PhaseRedesignAndOptimisations)
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
