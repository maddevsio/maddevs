import CardIssuesGoDee from '@/components/Cases/godee/cards/CardIssuesGoDee.vue'
import { render, screen } from '@testing-library/vue'

describe('CardIssuesGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardIssuesGoDee)

    expect(screen.getByText(/The kilometer price/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
