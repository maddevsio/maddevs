import { mount } from '@vue/test-utils'
import CardNinjaSushi from '@/components/Cases/cards/namba-food/CardNinjaSushi'

describe('cardNinjaSushi', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardNinjaSushi)
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
