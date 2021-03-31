import { mount } from '@vue/test-utils'
import CardRestaurantTalisman from '@/components/Cases/cards/namba-food/CardRestaurantTalisman'

describe('cardRestaurantTalisman', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardRestaurantTalisman)
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
