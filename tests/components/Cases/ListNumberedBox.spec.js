import ListNumberedBox from '@/components/Cases/ListNumberedBox'
import { render } from '@testing-library/vue'

describe('ListNumberedBox component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumberedBox)

    expect(container).toMatchSnapshot()
  })
})
