import { mount } from '@vue/test-utils'
import FooterContacts from '@/components/Footer/footer-contacts'

describe('footer contacts', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FooterContacts)
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
