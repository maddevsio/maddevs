import PhasInfrastructureAsCodeResult from '@/components/Cases/veeqo/PhasInfrastructureAsCodeResult'
import { render } from '@testing-library/vue'

describe('PhasInfrastructureAsCodeResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCodeResult)

    expect(container).toMatchSnapshot()
  })
})
