import CTABanner from '@/components/CooperationModels/CTABanner'
import { render } from '@testing-library/vue'

const stubs = ['UIBanner', 'UIButton']

describe('CTABanner component', () => {
  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
