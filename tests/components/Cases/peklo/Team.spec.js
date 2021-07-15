import Team from '@/components/Cases/peklo/Team'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks,
    })

    expect(screen.getByText('Meet the team')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
