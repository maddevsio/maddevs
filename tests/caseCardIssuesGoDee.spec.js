import { mount } from '@vue/test-utils'
import CardIssuesGoDee from '@/components/Cases/godee/cards/CardIssuesGoDee'

describe('cardIssuesGoDee', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardIssuesGoDee)
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
