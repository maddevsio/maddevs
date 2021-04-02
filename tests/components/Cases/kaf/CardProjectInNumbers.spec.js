import CardProjectInNumbers from '@/components/Cases/kaf/CardProjectInNumbers'
import { render } from '@testing-library/vue'

describe('CardProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardProjectInNumbers)
    expect(container).toMatchSnapshot()
  })
})
