import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'
import { render, screen } from '@testing-library/vue'

const stubs = ['BenefitCard', 'UISlider']

describe('EmployeesBenefits component', () => {
  it('should render correctly', () => {
    const { container } = render(EmployeesBenefits, {
      stubs,
    })

    expect(screen.getByText('Employees benefits')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
