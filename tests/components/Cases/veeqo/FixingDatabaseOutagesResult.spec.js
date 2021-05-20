import FixingDatabaseOutagesResult from '@/components/Cases/veeqo/FixingDatabaseOutagesResult'
import { render, screen } from '@testing-library/vue'

describe('FixingDatabaseOutagesResult component', () => {
  it('should render correctly', () => {
    const { container } = render(FixingDatabaseOutagesResult)

    expect(screen.getByText('ReadIOPS')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
