import { render } from '@testing-library/vue'
import PhaseVideoOnDemand from '../../../../client/components/Cases/kaf/PhaseVideoOnDemand'

describe('PhaseVideoOnDemand component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseVideoOnDemand)
    expect(container).toMatchSnapshot()
  })
})
