import CardNinjaSushi from '@/components/Cases/cards/namba-food/CardNinjaSushi.vue'
import { render } from '@testing-library/vue'

describe('CardNinjaSushi component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNinjaSushi)

    expect(container).toMatchSnapshot()
  })
})
