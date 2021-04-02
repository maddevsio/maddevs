import CardRestaurantTalisman from '@/components/Cases/nambafood/cards/CardRestaurantTalisman.vue'
import { render, screen } from '@testing-library/vue'

describe('CardRestaurantTalisman component', () => {
  it('should render correctly', () => {
    const { container } = render(CardRestaurantTalisman)

    expect(screen.getAllByText(/Restaurant Talisman/i)).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })
})
