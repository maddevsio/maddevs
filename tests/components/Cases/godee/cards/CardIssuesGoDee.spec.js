import CardIssuesGoDee from '@/components/Cases/godee/cards/CardIssuesGoDee.vue'
import { render } from '@testing-library/vue'

describe('CardIssuesGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardIssuesGoDee)

    expect(container).toMatchSnapshot()
  })
})
