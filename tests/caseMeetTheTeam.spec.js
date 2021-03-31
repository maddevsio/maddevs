import { mount } from '@vue/test-utils'
import MeetTheTeam from '../client/components/Cases/Kaf/MeetTheTeam'

describe('meet the team', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MeetTheTeam)
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
