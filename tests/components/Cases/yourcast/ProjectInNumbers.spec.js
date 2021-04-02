import ProjectInNumbers from '@/components/Cases/yourcast/ProjectInNumbers'
import { render, screen } from '@testing-library/vue'

describe('ProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectInNumbers)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(ProjectInNumbers)
    expect(screen.getByText(/Project in numbers/i).className).toContain('case_title_h2')
  })
})
