import PhasInfrastructureAsCode from '@/components/Cases/veeqo/PhasInfrastructureAsCode'
import { render } from '@testing-library/vue'

describe('PhasInfrastructureAsCode component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCode)

    expect(container).toMatchSnapshot()
  })
})
