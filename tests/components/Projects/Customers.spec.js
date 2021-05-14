import Customers from '@/components/Projects/Customers'
import { render, screen } from '@testing-library/vue'

const stubs = ['UICustomersList']

describe('Customers component', () => {
  it('should render correctly', () => {
    const { container } = render(Customers, {
      stubs,
    })

    expect(screen.queryByText('Our valued customers')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
