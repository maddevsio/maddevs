import { render } from '@testing-library/vue'
import SuccessMessage from '@/components/core/modals/SuccessMessage'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('SuccessMessage component', () => {
  it('should render correctly', () => {
    const { container } = render(SuccessMessage, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
