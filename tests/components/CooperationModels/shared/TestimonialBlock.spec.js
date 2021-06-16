import TestimonialBlock from '@/components/CooperationModels/shared/TestimonialBlock'
import { render } from '@testing-library/vue'

describe('TestimonialBlock component', () => {
  it('should render correctly', () => {
    const { container } = render(TestimonialBlock)

    expect(container).toMatchSnapshot()
  })
})
