import Team from '@/components/Cases/nambafood/Team.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('Team component', () => {
  it('should render correctly', () => {
    const { container } = render(Team, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Team, {
      mocks,
    })

    expect(screen.getByText(/Meet the team/i).className).toContain('case_title_h3')
  })
})
