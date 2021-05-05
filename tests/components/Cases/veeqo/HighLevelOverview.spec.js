import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'
import { render, screen } from '@testing-library/vue'

describe('HighLevelOverview component', () => {
  it('should render correctly', () => {
    const { container } = render(HighLevelOverview)

    expect(screen.getByText('Veeqo high-level overview')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
