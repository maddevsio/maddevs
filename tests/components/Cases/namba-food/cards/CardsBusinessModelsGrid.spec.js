import CardsBusinessModelsGrid from '@/components/Cases/namba-food/cards/CardsBusinessModelsGrid.vue'
import { render } from '@testing-library/vue'

describe('CardsBusinessModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(CardsBusinessModelsGrid, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
