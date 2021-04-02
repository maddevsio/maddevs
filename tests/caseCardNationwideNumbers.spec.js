import { mount } from '@vue/test-utils'
import CardNationwideNumbers from '@/components/Cases/nambafood/cards/CardNationwideNumbers'

describe('cardNationwideNumbers', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardNationwideNumbers)
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
