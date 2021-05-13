import EmployeesBenefits from '@/components/Careers/shared/EmployeesBenefits'
import { render } from '@testing-library/vue'

describe('EmployeesBenefits', () => {
  it('is a Vue instance', () => {
    const { container } = render(EmployeesBenefits)
    expect(container).toMatchSnapshot()
  })

  it('correctly length of elements in DOM', () => {
    const { container } = render(EmployeesBenefits)
    expect(container.querySelectorAll('.employees-benefits__item')).toHaveLength(8)
  })
})
