import CardDeliveryServiceNambafood from '@/components/Cases/nambafood/cards/CardDeliveryServiceNambafood.vue'
import { render, screen } from '@testing-library/vue'

describe('CardDeliveryServiceNambafood component', () => {
  it('should render correctly', () => {
    const { container } = render(CardDeliveryServiceNambafood)

    expect(screen.getByText(/Yearly increase in orders:/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
