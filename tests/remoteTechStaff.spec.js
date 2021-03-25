import { mount } from '@vue/test-utils'
import RemoteTechStaff from '@/components/Services/RemoteTechStaff'

describe('remote tech staff', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(RemoteTechStaff)
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
