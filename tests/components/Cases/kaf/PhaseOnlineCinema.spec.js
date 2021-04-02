import PhaseOnlineCinema from '@/components/Cases/kaf/PhaseOnlineCinema'
import { render, screen } from '@testing-library/vue'

describe('PhaseOnlineCinema component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseOnlineCinema)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseOnlineCinema)
    expect(screen.getByText(/Phase 1: Online cinema/i).className).toContain('case_title_h2')
  })
})
