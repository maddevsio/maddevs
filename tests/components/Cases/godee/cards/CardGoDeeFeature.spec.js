import CardGoDeeFeature from '@/components/Cases/godee/cards/CardGoDeeFeature.vue'
import { render } from '@testing-library/vue'

describe('CardGoDeeFeature component', () => {
  it('should render correctly', () => {
    const { container } = render(CardGoDeeFeature)

    expect(container).toMatchSnapshot()
  })
})
