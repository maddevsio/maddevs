import { mount } from '@vue/test-utils'
import WatchWhatYouLikeVideo from '../client/components/Cases/Kaf/WatchWhatYouLikeVideo'

describe('phase online cinema', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(WatchWhatYouLikeVideo)
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
