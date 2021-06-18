import { render } from '@testing-library/vue'
import ModalContactMe from '@/components/core/modals/ModalContactMe'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalContactMe component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalContactMe, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
