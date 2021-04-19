import CardsBusinessModelsGrid from '@/components/Cases/nambafood/cards/CardsBusinessModelsGrid.vue'
import { render, screen } from '@testing-library/vue'

describe('CardsBusinessModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(CardsBusinessModelsGrid, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getAllByText(/Personal courier/i)).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })
})
