import PhaseRedesignAndOptimisations from '@/components/Cases/kaf/PhaseRedesignAndOptimisations'
import { render } from '@testing-library/vue'

describe('PhaseRedesignAndOptimisations component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseRedesignAndOptimisations)
    expect(container).toMatchSnapshot()
  })
})
