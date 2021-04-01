import ListItemBoxCheckMark from '@/components/Cases/ListItemBoxCheckMark'
import { render } from '@testing-library/vue'

describe('ListItemBoxCheckMark component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemBoxCheckMark)

    expect(container).toMatchSnapshot()
  })
})
