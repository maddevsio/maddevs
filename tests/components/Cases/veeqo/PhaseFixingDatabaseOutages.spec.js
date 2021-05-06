import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'
import { render, screen } from '@testing-library/vue'

describe('PhaseFixingDatabaseOutages component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseFixingDatabaseOutages)

    expect(screen.getByText('Phase 1: Fixing database outages')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
