import ModelBanner from '@/components/CooperationModels/ModelBanner'
import { render } from '@testing-library/vue'

describe('ModelBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelBanner)

    expect(container).toMatchSnapshot()
  })
})
