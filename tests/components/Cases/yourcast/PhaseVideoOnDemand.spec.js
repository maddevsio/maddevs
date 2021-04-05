import { render, screen } from '@testing-library/vue'
import PhaseVideoOnDemand from '../../../../client/components/Cases/yourcast/PhaseVideoOnDemand'
import '../../../__mocks__/intersectionObserverMock'

describe('PhaseVideoOnDemand component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseVideoOnDemand)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseVideoOnDemand)
    expect(screen.getByText(/Phase 4: Video on demand/i).className).toContain('case_title_h2')
  })
})
