import OrderingProcess from '@/components/Cases/nambafood/OrderingProcess.vue'
import { render, screen } from '@testing-library/vue'

describe('OrderingProcess component', () => {
  it('should render correctly', () => {
    const { container } = render(OrderingProcess)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(OrderingProcess)

    expect(screen.getByText(/Simple ordering process for end-users/i).className).toContain('case_title_h2')
  })
})
