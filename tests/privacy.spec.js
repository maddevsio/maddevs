import { mount } from '@vue/test-utils'
import Privacy from '@/components/core/Privacy'

describe('privacy', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Privacy)
  })
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
