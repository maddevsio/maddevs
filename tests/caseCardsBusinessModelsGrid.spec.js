import { mount } from '@vue/test-utils'
import CardsBusinessModelsGrid from '@/components/Cases/cards/namba-food/CardsBusinessModelsGrid'

describe('cardsBusinessModelsGrid', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardsBusinessModelsGrid, {
      mocks: {
        getMediaFromS3: () => 's3 image url',
      },
    })
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
