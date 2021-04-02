import KeyProjectMilestones from '@/components/Cases/kaf/KeyProjectMilestones'
import { render } from '@testing-library/vue'

describe('KeyProjectMilestones component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyProjectMilestones)
    expect(container).toMatchSnapshot()
  })
})
