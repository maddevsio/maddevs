import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'
import { render } from '@testing-library/vue'

describe('HighLevelOverview component', () => {
  it('should render correctly', () => {
    const { container } = render(HighLevelOverview)

    expect(container).toMatchSnapshot()
  })
})
