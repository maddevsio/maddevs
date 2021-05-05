import Team from '@/components/Cases/veeqo/Team'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
