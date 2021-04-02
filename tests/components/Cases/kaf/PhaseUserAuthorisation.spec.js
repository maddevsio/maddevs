import { render } from '@testing-library/vue'
import PhaseUserAuthorisation from '../../../../client/components/Cases/kaf/PhaseUserAuthorisation'

describe('PhaseUserAuthorisation component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseUserAuthorisation)
    expect(container).toMatchSnapshot()
  })
})
