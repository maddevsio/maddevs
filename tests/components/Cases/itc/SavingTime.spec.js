import SavingTime from '@/components/Cases/itc/SavingTime'
import { render } from '@testing-library/vue'

describe('SavingTime component', () => {
  it('should render correctly', () => {
    const { container } = render(SavingTime)

    expect(container).toMatchSnapshot()
  })
})
