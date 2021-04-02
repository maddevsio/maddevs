import TechnologyStack from '@/components/Cases/kaf/TechnologyStack'
import { render } from '@testing-library/vue'

describe('TechnologyStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologyStack)
    expect(container).toMatchSnapshot()
  })
})
