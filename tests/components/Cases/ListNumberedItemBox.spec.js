import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox'
import { render } from '@testing-library/vue'

describe('ListNumberedItemBox component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumberedItemBox)

    expect(container).toMatchSnapshot()
  })
})
