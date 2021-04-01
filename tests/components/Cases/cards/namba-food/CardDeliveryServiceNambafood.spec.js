import CardDeliveryServiceNambafood from '@/components/Cases/cards/namba-food/CardDeliveryServiceNambafood.vue'
import { render } from '@testing-library/vue'

describe('CardDeliveryServiceNambafood component', () => {
  it('should render correctly', () => {
    const { container } = render(CardDeliveryServiceNambafood)

    expect(container).toMatchSnapshot()
  })
})
