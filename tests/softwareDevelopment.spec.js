import { mount } from '@vue/test-utils'
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment'

describe('softwareDevelopment', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SoftwareDevelopment, {
      stubs: ['client-only'],
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
