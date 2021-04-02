import CardRestaurantTalisman from '@/components/Cases/namba-food/cards/CardRestaurantTalisman.vue'
import { render } from '@testing-library/vue'

describe('CardRestaurantTalisman component', () => {
  it('should render correctly', () => {
    const { container } = render(CardRestaurantTalisman)

    expect(container).toMatchSnapshot()
  })
})
