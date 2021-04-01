import CardRestaurantTalisman from '@/components/Cases/cards/namba-food/CardRestaurantTalisman.vue'
import { render } from '@testing-library/vue'

describe('CardRestaurantTalisman component', () => {
  it('should render correctly', () => {
    const { container } = render(CardRestaurantTalisman)

    expect(container).toMatchSnapshot()
  })
})
