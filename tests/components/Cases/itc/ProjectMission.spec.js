import ProjectMission from '@/components/Cases/itc/ProjectMission'
import { render } from '@testing-library/vue'

describe('ProjectMission component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectMission)

    expect(container).toMatchSnapshot()
  })
})
