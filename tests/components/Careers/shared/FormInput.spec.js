import FormInput from '@/components/Careers/shared/FormInput'
import PositionForm from '@/components/Careers/shared/PositionForm'
import { render } from '@testing-library/vue'

describe('FormInput component', () => {
  it('should render correctly', () => {
    const { container } = render(FormInput, { parentComponent: PositionForm })

    expect(container).toMatchSnapshot()
  })
})
