import Team from '@/components/Cases/kaf/Team'
import { render, screen } from '@testing-library/vue'

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(Team, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(screen.getByText(/Meet the team/i).className).toContain('case_title_h2')
  })
})
