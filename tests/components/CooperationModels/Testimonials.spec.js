import Testimonials from '@/components/CooperationModels/Testimonials'
import { render } from '@testing-library/vue'

describe('Testimonials component', () => {
  it('should render correctly', () => {
    const { container } = render(Testimonials)

    expect(container).toMatchSnapshot()
  })
})
