import Customers from '@/components/Projects/Customers'
import { render, screen } from '@testing-library/vue'

describe('Customers component', () => {
  it('should render correctly', () => {
    const { container } = render(Customers)

    expect(screen.queryByText('Our valued customers')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
