import PhaseCuttingTheCosts from '@/components/Cases/veeqo/PhaseCuttingTheCosts'
import { render } from '@testing-library/vue'

describe('PhaseCuttingTheCosts component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseCuttingTheCosts)

    expect(container).toMatchSnapshot()
  })
})
