import { mount } from '@vue/test-utils'
import CustomerRates from '@/components/About/CustomerRates.vue'

describe('customer Rates', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CustomerRates)
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
