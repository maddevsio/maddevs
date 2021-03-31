import { mount } from '@vue/test-utils'
import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'

describe('footerSocialNetworks', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FooterSocialNetworks)
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
