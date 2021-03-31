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
})
