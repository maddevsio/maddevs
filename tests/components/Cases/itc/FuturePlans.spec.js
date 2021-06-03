import FuturePlans from '@/components/Cases/itc/FuturePlans'
import { render } from '@testing-library/vue'

describe('FuturePlans component', () => {
  it('should render correctly', () => {
    const { container } = render(FuturePlans)

    expect(container).toMatchSnapshot()
  })
})
