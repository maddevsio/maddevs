import { mount } from '@vue/test-utils'
import CardsBusinessModelsGrid from '@/components/Cases/nambafood/cards/CardsBusinessModelsGrid'

describe('cardsBusinessModelsGrid', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardsBusinessModelsGrid)
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
