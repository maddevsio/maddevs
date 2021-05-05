import ChallengesAndSolutions from '@/components/Cases/veeqo/ChallengesAndSolutions'
import { render, screen } from '@testing-library/vue'

describe('ChallengesAndSolutions component', () => {
  it('should render correctly', () => {
    const { container } = render(ChallengesAndSolutions)

    expect(screen.getByText('Challenges and solutions')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
