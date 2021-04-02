import { render, screen } from '@testing-library/vue'
import PhaseUserAuthorisation from '../../../../client/components/Cases/kaf/PhaseUserAuthorisation'

describe('PhaseUserAuthorisation component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseUserAuthorisation)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseUserAuthorisation)
    expect(screen.getByText(/Phase 5: User authorisation & personalised experience/i).className).toContain('case_title_h2')
  })
})
