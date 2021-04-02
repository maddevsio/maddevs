import PhaseLiveStreamingTechnology from '@/components/Cases/kaf/PhaseLiveStreamingTechnology'
import { render } from '@testing-library/vue'

describe('PhaseLiveStreamingTechnology component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseLiveStreamingTechnology)
    expect(container).toMatchSnapshot()
  })
})
