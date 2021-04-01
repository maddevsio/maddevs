import { mount } from '@vue/test-utils'
import ProjectInNumbers from '../client/components/Cases/yourcast/ProjectInNumbers'

describe('project in numbers', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ProjectInNumbers)
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
