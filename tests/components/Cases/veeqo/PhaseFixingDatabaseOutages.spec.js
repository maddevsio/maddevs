import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'
import { render, screen } from '@testing-library/vue'

const stubs = ['FixingDatabaseOutagesResult', 'CardTechSolution']

describe('PhaseFixingDatabaseOutages component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseFixingDatabaseOutages, {
      stubs,
    })

    expect(screen.getByText('Phase 1: Fixing database outages')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
