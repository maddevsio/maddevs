import PhasInfrastructureAsCode from '@/components/Cases/veeqo/PhasInfrastructureAsCode'
import { render, screen } from '@testing-library/vue'

describe('PhasInfrastructureAsCode component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCode)

    expect(screen.getByText('Phase 6: Infrastructure as Code (IaC)')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
