import CardSolutionGoDee from '@/components/Cases/godee/cards/CardSolutionGoDee.vue'
import { render, screen } from '@testing-library/vue'

describe('CardSolutionGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardSolutionGoDee)

    expect(screen.getByText(/Solution: GoDee/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
