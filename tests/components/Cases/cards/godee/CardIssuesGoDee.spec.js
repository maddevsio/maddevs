import CardIssuesGoDee from '@/components/Cases/cards/godee/CardIssuesGoDee.vue'
import { render } from '@testing-library/vue'

describe('CardIssuesGoDee component', () => {
  it('should render correctly', () => {
    const { container } = render(CardIssuesGoDee)

    expect(container).toMatchSnapshot()
  })
})
