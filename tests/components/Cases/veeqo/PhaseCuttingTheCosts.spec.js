import PhaseCuttingTheCosts from '@/components/Cases/veeqo/PhaseCuttingTheCosts'
import { render, screen } from '@testing-library/vue'

describe('PhaseCuttingTheCosts component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseCuttingTheCosts)

    expect(screen.getByText('Phase 4: Cutting the costs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
