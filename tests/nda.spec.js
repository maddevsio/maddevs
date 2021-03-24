import { mount } from '@vue/test-utils'
import NDA from '@/components/NDA'

describe('nDA', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NDA)
  })
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
