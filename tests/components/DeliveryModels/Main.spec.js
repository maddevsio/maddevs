import Main from '@/components/DeliveryModels/Main'
import { render } from '@testing-library/vue'

const stubs = ['Banner', 'ModelsGrid', 'Presentation', 'Testimonials', 'CTABanner']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
