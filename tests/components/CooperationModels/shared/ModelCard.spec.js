import ModelCard from '@/components/CooperationModels/shared/ModelCard'
import { render } from '@testing-library/vue'

describe('ModelCard component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelCard)

    expect(container).toMatchSnapshot()
  })
})
