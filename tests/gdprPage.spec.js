import { mount } from '@vue/test-utils'
import GdprPage from '@/pages/gdpr'

describe('gdpr page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(GdprPage)
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs GDPR Compliance')
    expect(wrapper.vm.$data.description).toEqual(
      'Mad Devs’ General Data Protection Regulation (GDPR) Compliance Commitment.',
    )
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/gdpr/')
  })
})
