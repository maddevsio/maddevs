import KeyMetrics from '@/components/Careers/KeyMetrics'
import { render, screen } from '@testing-library/vue'

const stubs = ['MetricaCard']

describe('KeyMetrics component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyMetrics, {
      stubs,
    })

    expect(screen.getByText('Mad Devs’ key metrics')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
