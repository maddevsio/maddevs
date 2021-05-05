import PhaseContinuousIntegration from '@/components/Cases/veeqo/PhaseContinuousIntegration'
import { render } from '@testing-library/vue'

describe('PhaseContinuousIntegration component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseContinuousIntegration)

    expect(container).toMatchSnapshot()
  })
})
