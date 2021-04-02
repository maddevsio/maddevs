import PhaseOnlineCinema from '@/components/Cases/kaf/PhaseOnlineCinema'
import { render } from '@testing-library/vue'

describe('PhaseOnlineCinema component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseOnlineCinema)
    expect(container).toMatchSnapshot()
  })
})
