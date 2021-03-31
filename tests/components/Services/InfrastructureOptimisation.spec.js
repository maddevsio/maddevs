import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation'
import { render } from '@testing-library/vue'

describe('infrastructure optimisation', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureOptimisation)

    expect(container).toMatchSnapshot()
  })
})
