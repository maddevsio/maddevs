import PhasInfrastructureAsCodeResult from '@/components/Cases/veeqo/PhasInfrastructureAsCodeResult'
import { render, screen } from '@testing-library/vue'

const stubs = ['CardResult']

describe('PhasInfrastructureAsCodeResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhasInfrastructureAsCodeResult, {
      stubs,
    })

    expect(screen.getByText('Key results')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
