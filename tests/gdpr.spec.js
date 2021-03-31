import { mount } from '@vue/test-utils'
import GDPR from '@/components/core/GDPR'

describe('gDPR', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(GDPR)
  })
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
