import { render } from '@testing-library/vue'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalIndividuals component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalIndividuals, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
