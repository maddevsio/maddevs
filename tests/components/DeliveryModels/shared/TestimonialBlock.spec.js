import TestimonialBlock from '@/components/DeliveryModels/shared/TestimonialBlock'
import { render } from '@testing-library/vue'

describe('TestimonialBlock component', () => {
  it('should render correctly', () => {
    const { container } = render(TestimonialBlock)

    expect(container).toMatchSnapshot()
  })
})
