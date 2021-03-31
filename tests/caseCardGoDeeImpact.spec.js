import { mount } from '@vue/test-utils'
import CardGoDeeImpact from '@/components/Cases/cards/godee/CardGoDeeImpact'

describe('cardGoDeeImpact', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardGoDeeImpact)
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
