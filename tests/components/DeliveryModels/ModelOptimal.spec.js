import ModelOptimal from '@/components/DeliveryModels/ModelOptimal'
import { render } from '@testing-library/vue'

describe('ModelOptimal component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelOptimal)

    expect(container).toMatchSnapshot()
  })
})
