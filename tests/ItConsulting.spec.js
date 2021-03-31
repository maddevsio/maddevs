import { mount } from '@vue/test-utils'
import ItСonsulting from '@/components/Services/ItСonsulting.vue'

describe('itСonsulting component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ItСonsulting, {
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
