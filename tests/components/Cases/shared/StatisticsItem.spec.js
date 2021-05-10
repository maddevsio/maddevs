import StatisticsItem from '@/components/Cases/shared/StatisticsItem'
import { render, screen } from '@testing-library/vue'

describe('StatisticsItem component', () => {
  const props = {
    title: 'FOUNDED',
    number: '2013',
    description: 'by experienced ecommerce retailer',
  }

  it('should render correctly', () => {
    const { container } = render(StatisticsItem, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with props data', () => {
    render(StatisticsItem, {
      props,
    })

    expect(screen.queryByText(props.title)).toBeTruthy()
    expect(screen.queryByText(props.number)).toBeTruthy()
    expect(screen.queryByText(props.description)).toBeTruthy()
  })
})
