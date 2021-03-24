import { mount } from '@vue/test-utils'
import footerSocialNetworkList from '@/components/Footer/footer-social-network-list'

describe('footer social network list', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(footerSocialNetworkList)
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
