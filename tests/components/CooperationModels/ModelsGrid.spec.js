import ModelsGrid from '@/components/CooperationModels/ModelsGrid'
import { render } from '@testing-library/vue'

describe('ModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelsGrid)

    expect(container).toMatchSnapshot()
  })
})
