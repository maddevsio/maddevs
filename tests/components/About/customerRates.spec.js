import CustomerRates from '@/components/About/CustomerRates'
import { render, screen } from '@testing-library/vue'

describe('CustomerRates', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerRates)
    expect(screen.getByText('10M+')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
