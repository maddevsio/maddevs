import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import { render } from '@testing-library/vue'

const slots = {
  default: 'test',
}

describe('StatisticsContainer component', () => {
  it('should render correctly', () => {
    const { container } = render(StatisticsContainer, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(StatisticsContainer, {
      slots,
    })

    expect(html()).toContain(slots.default)
  })
})
