import ListItemDot from '@/components/Cases/ListItemDot'
import { render } from '@testing-library/vue'

describe('ListItemDot component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemDot)

    expect(container).toMatchSnapshot()
  })
})
