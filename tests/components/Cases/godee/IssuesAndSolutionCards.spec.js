import IssuesAndSolutionCards from '@/components/Cases/godee/IssuesAndSolutionCards.vue'
import { render } from '@testing-library/vue'

describe('IssuesAndSolutionCards component', () => {
  it('should render correctly', () => {
    const { container } = render(IssuesAndSolutionCards)

    expect(container).toMatchSnapshot()
  })
})
