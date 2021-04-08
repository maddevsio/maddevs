import IssuesAndSolution from '@/components/Cases/godee/IssuesAndSolution.vue'
import { render, screen } from '@testing-library/vue'

describe('IssuesAndSolution component', () => {
  it('should render correctly', () => {
    const { container } = render(IssuesAndSolution)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(IssuesAndSolution)

    expect(screen.getByText(/Issues and solution/i).className).toContain('case_title_h2')
  })
})
