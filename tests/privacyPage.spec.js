import { mount } from '@vue/test-utils'
import PrivacyPage from '@/pages/privacy'

describe('privacy page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PrivacyPage)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Privacy Policy')
    expect(wrapper.vm.$data.description).toEqual('Mad Devs’ Privacy Policy: Website Acceptable Use Terms.')
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/privacy/')
  })
})
