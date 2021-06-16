import ModelsGrid from '@/components/CooperationModels/ModelsGrid'
import { render } from '@testing-library/vue'

const stubs = ['ModelCard']

describe('ModelsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelsGrid, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
