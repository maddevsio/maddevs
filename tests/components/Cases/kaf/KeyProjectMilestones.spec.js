import KeyProjectMilestones from '@/components/Cases/kaf/KeyProjectMilestones'
import { render, screen } from '@testing-library/vue'

describe('KeyProjectMilestones component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyProjectMilestones)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(KeyProjectMilestones)
    expect(screen.getByText(/Key project milestones/i)).toBeTruthy()
  })
})
