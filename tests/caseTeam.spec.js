import { mount } from '@vue/test-utils'
import Team from '../client/components/Cases/kaf/Team'

describe('team', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Team, {
      mocks: {
        getMediaFromS3: () => 's3 image url',
      },
    })
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
