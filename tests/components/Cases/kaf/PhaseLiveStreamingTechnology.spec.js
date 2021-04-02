import PhaseLiveStreamingTechnology from '@/components/Cases/kaf/PhaseLiveStreamingTechnology'
import { render, screen } from '@testing-library/vue'

describe('PhaseLiveStreamingTechnology component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseLiveStreamingTechnology)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseLiveStreamingTechnology)
    expect(screen.getByText(/Phase 2: Live streaming technology/i).className).toContain('case_title_h2')
  })
})