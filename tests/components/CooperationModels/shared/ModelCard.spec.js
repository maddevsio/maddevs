import ModelCard from '@/components/CooperationModels/shared/ModelCard'
import { render } from '@testing-library/vue'

const props = {
  full: false,
  uid: 'uid',
  title: 'title',
  animationName: 'staff',
  startAnimationOnScreenPercent: 23,
}

describe('ModelCard component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelCard, {
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
