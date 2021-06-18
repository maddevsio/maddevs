import { render } from '@testing-library/vue'
import ModalOrderProjectFromUs from '@/components/core/modals/ModalOrderProjectFromUs'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalOrderProjectFromUs component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalOrderProjectFromUs, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
