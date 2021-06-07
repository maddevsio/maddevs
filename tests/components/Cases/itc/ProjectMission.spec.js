import ProjectMission from '@/components/Cases/itc/ProjectMission'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ProjectMission component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectMission, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
