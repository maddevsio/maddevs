import CardGoDeeImpact from '@/components/Cases/godee/cards/CardGoDeeImpact.vue'
import { render, screen } from '@testing-library/vue'

describe('CardGoDeeImpact component', () => {
  it('should render correctly', () => {
    const { container } = render(CardGoDeeImpact)

    expect(screen.getByText(/Total routes/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
