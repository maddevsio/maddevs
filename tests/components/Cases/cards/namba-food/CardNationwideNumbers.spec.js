import CardNationwideNumbers from '@/components/Cases/cards/namba-food/CardNationwideNumbers.vue'
import { render } from '@testing-library/vue'

describe('CardNationwideNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNationwideNumbers)

    expect(container).toMatchSnapshot()
  })
})
