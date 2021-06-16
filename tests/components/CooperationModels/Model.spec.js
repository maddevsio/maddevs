import Model from '@/components/CooperationModels/Model'
import { render } from '@testing-library/vue'

const stubs = ['ModelBanner', 'ModelOptimal', 'ModelProcess', 'CTABanner']

describe('Model component', () => {
  it('should render correctly', () => {
    const { container } = render(Model, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
