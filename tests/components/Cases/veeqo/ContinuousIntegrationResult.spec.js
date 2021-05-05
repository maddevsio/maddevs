import ContinuousIntegrationResult from '@/components/Cases/veeqo/ContinuousIntegrationResult'
import { render } from '@testing-library/vue'

describe('ContinuousIntegrationResult component', () => {
  it('should render correctly', () => {
    const { container } = render(ContinuousIntegrationResult)

    expect(container).toMatchSnapshot()
  })
})
