import { mount } from '@vue/test-utils'
import TechnologyStack from '../client/components/Cases/yourcast/TechnologyStack'

describe('technology stack', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TechnologyStack)
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
