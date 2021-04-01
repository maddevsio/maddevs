import { mount } from '@vue/test-utils'
import CardProjectInNumbers from '@/components/Cases/yourcast/CardProjectInNumbers'

describe('сard project in numbers', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardProjectInNumbers)
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
