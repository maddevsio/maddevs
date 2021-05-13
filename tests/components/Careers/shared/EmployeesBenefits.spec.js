import EmployeesBenefits from '@/components/Careers/shared/EmployeesBenefits'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('EmployeesBenefits', () => {
  it('is a Vue instance', () => {
    const { container } = render(EmployeesBenefits, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })

  it('correctly length of elements in DOM', () => {
    const { container } = render(EmployeesBenefits, {
      mocks,
    })
    expect(container.querySelectorAll('.employees-benefits__item')).toHaveLength(8)
  })
})
