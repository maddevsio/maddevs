import CardGoDeeImpact from '@/components/Cases/cards/godee/CardGoDeeImpact.vue'
import { render } from '@testing-library/vue'

describe('CardGoDeeImpact component', () => {
  it('should render correctly', () => {
    const { container } = render(CardGoDeeImpact)

    expect(container).toMatchSnapshot()
  })
})
