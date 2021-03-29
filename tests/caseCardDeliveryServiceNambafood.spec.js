import { mount } from '@vue/test-utils'
import CardDeliveryServiceNambafood from '@/components/Cases/cards/namba-food/CardDeliveryServiceNambafood'

describe('cardDeliveryServiceNambafood', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardDeliveryServiceNambafood)
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
