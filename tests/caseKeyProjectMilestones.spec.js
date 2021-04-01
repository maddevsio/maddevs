import { mount } from '@vue/test-utils'
import KeyProjectMilestones from '../client/components/Cases/kaf/KeyProjectMilestones'

describe('key project milestones', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(KeyProjectMilestones)
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
