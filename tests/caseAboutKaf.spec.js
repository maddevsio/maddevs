import { mount } from '@vue/test-utils'
import AboutKaf from '../client/components/Cases/yourcast/AboutKaf'

describe('about yourcast', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AboutKaf)
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
