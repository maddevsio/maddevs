import CardSolutionGoDee from '@/components/Cases/godee/cards/CardSolutionGoDee.vue'
import { render } from '@testing-library/vue'

describe('CardSolutionGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardSolutionGoDee)

    expect(container).toMatchSnapshot()
  })
})
