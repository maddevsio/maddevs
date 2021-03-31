import { mount } from '@vue/test-utils'
import CardGoDeeFeature from '@/components/Cases/cards/godee/CardGoDeeFeature'

describe('cardGoDeeFeature', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardGoDeeFeature)
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
