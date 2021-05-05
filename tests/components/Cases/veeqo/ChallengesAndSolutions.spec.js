import ChallengesAndSolutions from '@/components/Cases/veeqo/ChallengesAndSolutions'
import { render } from '@testing-library/vue'

describe('ChallengesAndSolutions component', () => {
  it('should render correctly', () => {
    const { container } = render(ChallengesAndSolutions)

    expect(container).toMatchSnapshot()
  })
})
