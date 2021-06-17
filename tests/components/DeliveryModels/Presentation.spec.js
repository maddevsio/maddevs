import Presentation from '@/components/DeliveryModels/Presentation'
import { render } from '@testing-library/vue'

describe('Presentation component', () => {
  it('should render correctly', () => {
    const { container } = render(Presentation)

    expect(container).toMatchSnapshot()
  })
})
