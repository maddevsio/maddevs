import CardsBusinessModelsGrid from '@/components/Cases/cards/namba-food/CardsBusinessModelsGrid.vue'
import { render } from '@testing-library/vue'

describe('CardsBusinessModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(CardsBusinessModelsGrid)

    expect(container).toMatchSnapshot()
  })
})
