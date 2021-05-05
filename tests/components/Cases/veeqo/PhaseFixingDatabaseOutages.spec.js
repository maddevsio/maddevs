import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'
import { render } from '@testing-library/vue'

describe('PhaseFixingDatabaseOutages component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseFixingDatabaseOutages)

    expect(container).toMatchSnapshot()
  })
})
